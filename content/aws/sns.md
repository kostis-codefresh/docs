---
title: "How to create an AWS Simple Notification Service (SNS) with Pulumi"
og:
    description: "Use Pulumi to code, deploy, and manage cloud, serverless, and container apps and infrastructure"
    image: "/images/service/aws-sns.png"

aliases: ["sns.html"]

service: "SNS"
description: "is a flexible, fully managed pub/sub messaging and mobile notifications service for coordinating the delivery of messages to subscribing endpoints and clients"
aws_here: "https://aws.amazon.com/sns/"

menu:
  aws:
    parent: aws
    name: SNS
---

## Create an AWS SNS resource using `@pulumi/aws`

The `@pulumi/aws` library enables fine-grained control over the AWS SNS resource meaning it can be coded, deployed, and managed entirely in code.

```javascript
const aws = require("@pulumi/aws");

const topic = new aws.sns.Topic("mytopic");

const topicSubscription = new aws.sns.TopicSubscription("mytopicsubscription", {
    topic: topic,
    protocol: "sqs",
    endpoint: queue.arn
});
```
