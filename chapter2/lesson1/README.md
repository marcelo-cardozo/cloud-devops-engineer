# Notes
To create the stack to AWS
```shell script
aws cloudformation create-stack --stack-name testing-vpc --template-body file://vpctest.yml
```
To update the stack
```shell script
aws cloudformation update-stack --stack-name testing-vpc --template-body file://vpctest.yml
```