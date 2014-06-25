---
layout: article
title: SlipStream and Amazon Web Services (AWS) Identity and Access Management (IAM)
category: blog
image: /img/design/slipstream_category.png
author: Lionel Schaub
comments: true
summary: Amazon introduced sometimes ago IAM. With IAM you can disable or remove access and secret keys of your AWS root account and create IAM users with the principle of least privilege in mind.
twitter-author: "@LionelS_ch"
---


**Using AWS's security best practices with SlipStream**

Amazon introduced sometimes ago IAM. IAM means Identity and Access Management.
IAM allow you to create sub-users and have a fine grain control of which actions each sub-user can do.

With IAM you can disable or delete access and secret keys of your AWS root account and create IAM users with the principle of least privilege in mind.
You can find more information about IAM on [http://aws.amazon.com/iam/]([http://aws.amazon.com/iam/) .


**Allowed actions needed by SlipStream**

The following list explains which actions need to be allowed for different features of SlipStream.

    Common:
	    ec2:CreateTags
	    ec2:ImportKeyPair
	    ec2:DeleteKeyPair
	    ec2:DescribeInstances
	    ec2:RunInstances
	    ec2:TerminateInstances
	    ec2:DescribeRegions

    For build image:
	    ec2:CreateImage
	    ec2:CreateKeyPair
	    ec2:StopInstances
	    ec2:DescribeImages


**Adding an IAM user for SlipStream**

First of all you need to login to the Amazon AWS console at [https://console.aws.amazon.com](https://console.aws.amazon.com).

Once you are logged in you can access the IAM console by clicking on your first name (at the top right) and
then click on `Security Credentials` or you can simply access this URL [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/) .

Now click on `Users` in the left menu and click on `Create New Users`. Set a name for this user (e.g. SlipStream) and click on `Create`. <br/>
Download the user’s credentials and close the popup.

Then select this user and click on the tab named `Permissions` and `Attach User Policy`.
Select `Custom Policy`. Set a name for this policy (e.g. SlipStreamUser-Policy) and copy-paste the following Policy Document:

    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "SlipStreamUser",
          "Effect": "Allow",
          "Action": [
            "ec2:CreateTags",
            "ec2:ImportKeyPair",
            "ec2:DeleteKeyPair",
            "ec2:DescribeInstances",
            "ec2:RunInstances",
            "ec2:TerminateInstances",
            "ec2:DescribeRegions",
            "ec2:CreateImage",
            "ec2:CreateKeyPair",
            "ec2:StopInstances",
            "ec2:DescribeImages"
          ],
          "Resource": [
            "*"
          ]
        }
      ]
    }

Once this is done you can click on `Apply Policy` and configure your SlipStream user account to use the credentials downloaded previously.<br/>
Don’t forget to delete/disable all Access keys of your AWS root account. <br/>
For an improved security you should also add a `Multi-Factor Authentication` to your AWS root account.
<br/>
<br/>


