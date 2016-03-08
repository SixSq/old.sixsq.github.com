---
layout: article
title: Improve Security to Amazon Web Services
category: blog
image: /img/design/slipstream_category.png
author: Lionel Schaub
comments: true
summary: Sometime ago Amazon introduced Identity Access Management or IAM. With IAM you can disable or remove access and secret keys of your AWS root account and create IAM users with the principle of least privilege in mind.
twitter-author: "@LionelS_ch"
---


Using AWS's security best practices with SlipStream
------

A little while ago, Amazon introduced a free service called [IAM](http://aws.amazon.com/iam/), which stands for Identity and Access Management. IAM is a great tool which allows you to increase security without too much effort. With it, you can securely control access to AWS services by creating sub-users and retaining a fine grain control over which actions each sub-user can do. You can disable or delete access and secret keys of your AWS root account and create IAM users with the principle of least privilege in mind.

[SlipStream](http://sixsq.com/products/slipstream.html) is SixSq's multi-cloud application deployment platform, in other words a launch pad for your apps. It supports a long list of clouds, including AWS, and gives users a simple, quick way to deploy their apps to the **cloud of their choice.**

SlipStream is inherently secure. You simply create an account, enable AWS, if that's the cloud provider you want, by configuring your account, and off you go. If it's just you using the AWS account, you're done. If not, you may want to use IAM to create a series of sub-accounts so that you can restrict access to only parts of your AWS account. To do this, carry out the following actions using IAM.


Enable actions for SlipStream
------

The following list explains which actions need to be enabled for different features of SlipStream.

    Common:
	    ec2:CreateTags
	    ec2:ImportKeyPair
	    ec2:DeleteKeyPair
	    ec2:DescribeInstances
	    ec2:RunInstances
	    ec2:TerminateInstances
	    ec2:DescribeRegions
        ec2:DescribeSecurityGroups
        ec2:CreateSecurityGroup
        ec2:AuthorizeSecurityGroupIngress

    For build image:
	    ec2:CreateImage
	    ec2:CreateKeyPair
	    ec2:StopInstances
	    ec2:DescribeImages


Adding a IAM user for SlipStream
------

First of all you need to login to the Amazon AWS console at [https://console.aws.amazon.com](https://console.aws.amazon.com).

Once you are logged in you can access the IAM console by clicking on your name (at the top right) and
then click on `Security Credentials` or you can simply access this URL [https://console.aws.amazon.com/iam/](https://console.aws.amazon.com/iam/) .

Now click on `Users` in the left menu and click on `Create New Users`. Set one or more usernames (e.g. SlipStream), make sure the checkbox `Generate an access key for each user` and click on the `Create`. <br/>
Then click on `Show User Security Credentials` and save them on a safe place. It will be impossible to retreive the `Secret Access Key` afterward.
You can also click on `Download Credentials` to download them as a CSV file. Please ensure they are stored in a safe place.
Click on `Close` to return to the list of IAM users.

Then click on `Policiesers` in the left menu and click on `Create Policy`.
Select `Create Your Own Policy`. Set a name for this policy (e.g. SlipStreamUser-Policy) and a description (e.g. Grant the least privileges needed to use all features of SlipStream. Use it for all IAM users created to be used with SlipStream).
You can then copy-paste the following Policy Document:

    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Sid": "SlipStreamUser",
          "Effect": "Allow",
          "Action": [
                "ec2:CreateImage",
                "ec2:CreateKeyPair",
                "ec2:CreateTags",
                "ec2:DeleteKeyPair",
                "ec2:DescribeImages",
                "ec2:DescribeInstances",
                "ec2:DescribeRegions",
                "ec2:ImportKeyPair",
                "ec2:RunInstances",
                "ec2:StopInstances",
                "ec2:TerminateInstances",
                "ec2:DescribeSecurityGroups",
                "ec2:CreateSecurityGroup",
                "ec2:AuthorizeSecurityGroupIngress"
          ],
          "Resource": [
            "*"
          ]
        }
      ]
    }

Once this is done you can click on `Create Policy` and you will return to the list of Policies.
Now click on the policy you've just created and select the tab `Attached Entities`. By clicking on the `Attach` button, you can select the users for which you want this policy to apply.


Now you can configure your SlipStream user account(s) to use the credentials downloaded previously.<br/>
**Don’t forget** to delete/disable all Access keys of your AWS root account. <br/>
For improved security you should also add a `Multi-Factor Authentication` to your AWS root account.
<br/>
<br/>

Feel free to contact the [SlipStream Support team](mailto:support@sixsq.com) with follow up questions.


