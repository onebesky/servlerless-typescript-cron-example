# NodeJS TypeScript boilerplate
Simple example for cron-enabled function on AWS with AWS SecretsManger integration.

# Install AWS CLI on MacOSX

```
brew install python3
pip3 install awscli
```

## AWS Setup
Generate your personal AWS key and Secret combo on aws website
* go to Identity & Access Management -> Your Security Credentials -> Create New Access Key

## Serverless Framework Setup

https://serverless.com/framework/docs/providers/aws/guide/credentials/

Configure your dev credentials through servless
```
yarn serverless config credentials --provider aws --key AKIAmykey --secret pcW8+mysecretpassword
```

Or AWS Cli
```
$ aws configure
AWS Access Key ID [None]: AKIAmykey
AWS Secret Access Key [None]: pcW8+mysecretpassword
Default region name [None]: us-west-1
Default output format [None]: ENTER
```

# Deployment
By default there are dev, test, and production environments. Environments are manged in package.json file

**Test deployment**
```
yarn deploy-test
```


# View Logs

1) Using CLI you can list the most recent events:
```
yarn serverless logs -s test -f cron-template
```
2) Using CloudWatch
https://us-west-1.console.aws.amazon.com/cloudwatch

## Development

Local run of a function
```
yarn serverless invoke local --function cron-template
```

Run Jasmine
```
yarn tests
```

Destroy the stack
```
yarn sls remove -s test
```
