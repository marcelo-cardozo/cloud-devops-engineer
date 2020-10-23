# Notes
To create the stack to AWS
```shell script
aws cloudformation create-stack --stack-name testing-vpc --template-body file://vpctest.yml
```
To update the stack
```shell script
aws cloudformation update-stack --stack-name testing-vpc --template-body file://vpctest.yml
```

# Exercise
Create EC2 instance with the CLI
```shell script
# create key pair 
aws ec2 create-key-pair --key-name taskKey --query "KeyMaterial" --output text > taskKey.pem
chmod 400 taskKey.pem 

aws ec2 create-security-group --group-name exercise-1 --description "Exercise security group" --region us-west-2

# get current public ip to access the db from the computer
curl https://checkip.amazonaws.com

# authorize my computer
aws ec2 authorize-security-group-ingress --group-name exercise-1 --protocol tcp --port 22 --cidr MY_PUBLIC_IP/32 --region us-west-2

# create instance
aws ec2 run-instances --image-id ami-01fee56b22f308154 --count 1 --instance-type t2.micro --key-name taskKey --security-groups exercise-1 --region us-west-2

# log in to instance
ssh -i taskKey.pem ec2-user@PUBLIC_DNS
```