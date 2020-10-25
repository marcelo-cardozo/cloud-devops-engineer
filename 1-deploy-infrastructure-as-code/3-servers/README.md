# Lesson 3 - Network Stack
Deployment of tomcat server using Autoscaling and Loadbalancer
![WebApp infrastructure](../2-networking/AWSWebApp.jpeg)

```shell script
./deploy-stack.sh demonetwork ../2-networking/network.yml ../2-networking/network-params.json

aws ec2 create-key-pair --key-name demo-key-pair --query "KeyMaterial" --output text
./deploy-stack.sh demoserver servers.yml servers-params.json
```

## Exercise 
Managing parameters with the **EC2 Parameter Store**
```shell script
# add simple string parameter
aws ssm put-parameter --name "dbAddress" --type "String" --value "1.2.3.4" --no-overwrite
# rewrite parameter
aws ssm put-parameter --name "dbPort" --type "String" --value "80" --no-overwrite
aws ssm put-parameter --name "dbPort" --type "String" --value "5432" --overwrite
# Add encrypted parameter
aws ssm put-parameter --name "dbPassword" --type "SecureString" --value "12345678" --overwrite

# Get parameter values
aws ssm get-parameter --name dbPassword --with-decryption
aws ssm get-parameter --name dbPort

```