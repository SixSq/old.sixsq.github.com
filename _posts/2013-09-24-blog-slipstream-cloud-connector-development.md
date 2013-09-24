---
layout: article
title: Development of Cloud connector for SlipStream
category: blog
image: /img/design/slipstream_category.png
author: Konstantin Skaburskas
comments: true
---

The [SlipStream][SS] offers a plugable model for the development of the cloud 
connectors.

The third-party cloud connectors are intended to be developed outside of the 
SlipStream core by inheriting from its core base classes.

Connector consists of two parts: *server side* (Java) and *client side* (Python).  
The main job of the Java connector is to deploy Orchestrator VM, get information 
about running cloud instances and terminate the running deployments.  The Python 
connector is used on Orchestrator VM to provision the requested deployments.

For more technical details on how the SlipStream works please see 
[SlipStream technical info][SStech].

## Development project and notes on deployment

If Maven is used, the proposed project structure could be as follows assuming 
the artifacts' final packaging is RPM.

    ├── java
    │   ├── jar
    │   │   ├── pom.xml
    │   │   └── src
    │   │       ├── main
    │   │       │   ├── java
                        ├ ... (Java connector code goes here)
    │   │       └── test
    │   │           └── java
                        ├ ... (Java connector test code goes here)
    │   ├── pom.xml
    │   └── rpm
    │       └── pom.xml
    ├── python
    │   ├── pom.xml
    │   ├── rpm
    │   │   └── pom.xml
    │   └── tar
    │       ├── bundle.xml
    │       ├── pom.xml
    │       ├── slipstream_example
                ├ ... (Python connector code goes here)
    │       └── test
                ├ ... (Python connector test code goes here)
    ├── pom.xml
    └── README.md

To help with the development of the cloud connectors an 
[example connector project][example_project] was created following the project 
structure above.

To get started clone the following git repositories

    # SlipStream Example Cloud connector
    git clone https://github.com/slipstream/SlipStreamConnector-Example.git

    # SlipStream Server
    git clone https://github.com/slipstream/SlipStreamServer.git

    # SlipStream Client
    git clone https://github.com/slipstream/SlipStreamClient.git

In your IDE for the `SlipStreamConnector-Example` project set up project level 
dependencies on `SlipStreamServer` and `SlipStreamClient`.

You will need to add the following SlipStream Maven repositories that contain 
some required artifacts into your `~/.m2/settings.xml` 

    <profile>
      <id>slipstream-snapshots</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
      <repositories>
        <repository>
          <id>sixsq.slipstream.snapshots</id>
          <url>http://ci.sixsq.com:8080/nexus/content/repositories/snapshots</url>
        </repository>
      </repositories>
    </profile>
    <profile>
      <id>slipstream-releases</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
      <repositories>
        <repository>
          <id>sixsq.slipstream.releases</id>
          <url>http://ci.sixsq.com:8080/nexus/content/repositories/releases</url>
        </repository>
      </repositories>
    </profile>

After the connector is developed, both its parts -- server as .jar(s) and client 
as tarball -- should be installed on the SlipStream server.  The Java connector 
should be made available in the class path of the server and the connector's 
entry point (main class) configured in the SlipStream's system parameters.  
After the connector gets loaded by the server the *System/User/Image/*etc. 
configuration parameters from the connector implementation will become available 
in the respective SlipStream modules.  In turn, the tarball with the Python 
client connector must be placed into a predefined location and the tarball's file 
name configured in the connector's system parameters.  More on this in details in 
the **Packaging**, **Installation** and **Configuration** sections.

In the reminder of the text we will assume that the cloud connector is developed 
for a Cloud called *Example*.

## Server side connector - Java ##

`src/main/java/` contains Java package with the connector specific classes. 
Suppose the package was named `org.example.slipstream.connector.example` -- it 
should contain the following class files 

**ExampleConnector.java** 
   : The connector should inherit from `ConnectorBase` (or its child classes) and 
     implement `launch()`, `terminate()`, `describeInstances()`, `copy()` 
     of `Connector` interface as well as override some methods e.g. `constructKey()`, 
     `getServiceConfigurationParametersTemplate()` etc.

**ExampleSystemConfigurationParametersFactory.java**
   : Definitions of the system level cloud connector parameters.  The parameters 
   defined here will become accessible in the *System Configuration* module of 
   the Web UI under the cloud specific parameters section.

**ExampleUserParametersFactory.java**
   : Definitions of the user level cloud connector parameters.  The parameters 
   defined here will become accessible in the *User* module of the Web UI under 
   the cloud specific parameters section.

**ExampleImageParametersFactory.java**
   : Definitions of the cloud image parameters.  The parameters 
   defined here will become accessible in the *Image* module of the Web UI under 
   the cloud specific parameters section/tab.
 
**ExampleCredentials.java**
   : Cloud credentials getter.

The classes and methods mentioned above are documented in the class files of the 
[example project][example_project] and/or their respective parent classes. 

For examples of the real implementations of the server side connector see

+ StratusLab connector [com.sixsq.slipstream.connector.stratuslab][SLjava] (uses 
  StratusLab User CLI)
+ OpenStack connector [com.sixsq.slipstream.connector.openstack][OSjava] (uses 
  [Jclouds][jclouds])


## Client side connector - Python ##

The base client code requires Python `>=2.6 and <3`.

`python/tar` directory should contain the Cloud connector package. The name can
be arbitrary however, the one suggested is `slipstream_<cloudname>`.

The suggested name for the connector module is `<CloudName>ClientCloud`. The 
connector module should implement `getConnector(configHolder)` interface 
methods to be used by the framework's internal connectors instantiation factory. 

The connector class inherits from `BaseCloudConnetor` and should implement among 
the others the following main bound methods 

+ `initialization(user_info)`
+ `_startImage(user_info, image_info, instance_name, cloudSpecificData={})` 
+ `_buildImage(user_info, image_info)`
+ `stopImages()`

Because the `BaseCloudConnector` uses threads (`threading.Thread`) to concurrently 
dispatch the VMs instantiation requests -- the implementation of the connector 
itself should be thread-safe.  For that purposes thread-local field should be 
used to hold the required local to the thread objects.

All of the notes above are captured in the documentation of the example source 
code in `python/tar/slipstream_example/ExampleClientCloud.py`.

For examples of the real implementations of the client side connector see

+ StratusLab connector [slipstream.cloudconnectors.stratuslab][SLpython] 
  (uses StratusLab Python API library)
+ OpenStack connector [slipstream.cloudconnectors.openstack][OSpython] (uses 
  [libcloud][libcloud])


## Packaging ##

The packaging goal for the Java server code should be _jar_ and the Python client 
code should be packaged as _.tgz_ tarball.

The _jar_ packaging is automatically done by defining `<packaging>jar</packaging>` 
in the `java/jar/pom.xml`. 

For generating the tarball with Python client code, one should update assembly 
descriptor file `python/tar/bundle.xml`.  The connector package (and if required 
dependency packages) should be packaged at the root of the tarball.  On 
Orchestrator VM the tarball will be automatically extracted and the framework 
will set the `PYTHONPATH` accordingly for the connector package and its 
dependencies to be loadable.  The execution of the assembly is done automatically 
from `python/rpm/pom.xml` by using [Maven Assembly Plugin][mvn_assembly].  The 
resulting tarball will become available as an artifact with the coordinates of 
the `python/pom.xml`, so that it can later be referred to from e.g. 
[RPM Maven Plugin][mvn_rpm].    

## Installation ##

### Server part

SlipStream server runs under Jetty.  The connector jars (connector jar and its 
dependencies) must be installed into `/opt/slipstream/server/lib/ext/<connector_name>/`

Unfortunately, due to a bug in the Jetty version that is used at the moment the 
jars must be copied to `/opt/slipstream/server/webapps/slipstream.war/WEB-INF/lib/`.
This can automatically be accomplished during installation by RPM post-install 
scriptlet (on example of CloudSigma connector)

    $ rpm -q --scripts slipstream-connector-cloudsigma
    postinstall scriptlet (using /bin/sh):
    /bin/cp -f /opt/slipstream/server/lib/ext/cloudsigma/* /opt/slipstream/server/webapps/slipstream.war/WEB-INF/lib
    $ rpm -ql slipstream-connector-cloudsigma
    /opt/slipstream/server/lib/ext/cloudsigma/slipstream-connector-cloudsigma.jar
    $ 

The above actions are by default implemented in `java/rpm/pom.xml`.  You might 
want to edit the POM file to adjust names of the resulting artifacts, dependencies 
and/or the artifacts generation behavior. 

### Client part

The client tarball should be installed into `/opt/slipstream/downloads/`.  For 
RPM based systems this is accomplished by generation of 
`slipstream-connector-<cloudname>-python` RPM in `python/rpm/pom.xml` with 
`org.example:SlipStreamConnector-Example-python-bundle:bundle:tar.gz` artifact 
placed into the required location.  You might want to edit this POM to update 
artifact/package/etc. names.

**Configuring connector** section will describe how to make this Python clinet 
connector tarball to be exposed in a corresponding system configuration parameter.

## Configuration ##

The are two steps in the configuration of the connector. 

### Loading connector

First, the connector should be pointed to for loading.  (That is why we had to 
make sure in the **Installation** that the jar with the connector class is in the 
class path of the server.)  The loading of the connector is done by adding the 
canonical java class name of the connector to `SlipStream_basic -> Cloud 
connector java class name(s)` parameter under the server's *System Configuration*.  
See the figure below.

If required by the connector, instances of the connector can be 
created.  To obtain a named instance of the connector simply prepend the class 
name with `<instance_name>:`.

<a href="/img/content/Adding_cloud_connector_in_server_conf.png" target="_blank">
  <img src="/img/content/Adding_cloud_connector_in_server_conf.png" 
       alt="Adding cloud connector in the server configuration" 
       width="650px" height="378px"/>
</a>

After saving the cloud connector java class name, the connector's system configuration 
parameters will appear under a separate accordion tab named either after the 
initial name of the connector or after its instance name (prepended as 
`<instance_name>:` to the class name).   

<a href="/img/content/Connector_config_params.png" target="_blank">
  <img src="/img/content/Connector_config_params.png" 
       alt="Configuration parameters of added connector" 
       width="650px" height="378px"/>
</a>

### Configuring connector

The connector is ready to be configured now by providing the values to the 
corresponding parameters.  The parameters that become available are the ones define in
`ExampleSystemConfigurationParametersFactory.java`.

Here is a note regarding `URL with the cloud client specific connector` parameter.  
The Python cloud client connector tarball (which gets installed under 
`/opt/slipstream/downloads/`) should be configured as `https://<IP>/downloads/<tarball-file.tgz>`.  
The usage of `IP` is preferable here to remove the necessity for forward lookups 
of the SlipStream server when bootstraping the deployment orchestration 
process on the Orchestrator VM. 

After the connector system parameters are specified, the connector is ready to be 
used.  From this point on *User* and *Image* modules will have the parameters 
sections/tabs named after the connector and exposing parameters defined in 
`ExampleUserParametersFactory.java` and `ExampleImageParametersFactory.java` 
respectively.

[SS]: /products/slipstream.html "SlipStream"
[SStech]: /products/slipstream.html#for_techies_how_does_it_work "SlipStream technical info"
[mvn_assembly]: http://maven.apache.org/plugins/maven-assembly-plugin/ "Maven Assembly Plugin"
[mvn_rpm]: http://mojo.codehaus.org/rpm-maven-plugin/ "RPM Maven Plugin"
[example_project]: https://github.com/slipstream/SlipStreamConnector-Example "Example project on GitHub"
[SLjava]: https://github.com/slipstream/SlipStreamServer/tree/master/jar/src/main/java/com/sixsq/slipstream/connector/stratuslab "StratusLab connector Java"
[SLpython]: https://github.com/slipstream/SlipStreamClient/tree/master/client/src/main/python/slipstream/cloudconnectors/stratuslab "StratusLab connector Python"
[OSjava]: https://github.com/slipstream/SlipStreamServer/tree/master/jar/src/main/java/com/sixsq/slipstream/connector/openstack "OpenStack connector Java"
[OSpython]: https://github.com/slipstream/SlipStreamClient/tree/master/client/src/main/python/slipstream/cloudconnectors/openstack "OpenStack connector Python"
[SSParent]: https://github.com/slipstream/SlipStreamParent "SlipStream Parent project"
[jclouds]: http://jclouds.incubator.apache.org "Jclouds"
[libcloud]: http://libcloud.apache.org/ "Apache Libcloud"
