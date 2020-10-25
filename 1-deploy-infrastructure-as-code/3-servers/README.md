# Lesson 3 - Network Stack
Deployment of tomcat server using Autoscaling and Loadbalancer
![WebApp infrastructure](../2-networking/AWSWebApp.jpeg)

```shell script
./deploy-stack.sh demonetwork ../2-networking/network.yml ../2-networking/network-params.json

aws ec2 create-key-pair --key-name demo-key-pair --query "KeyMaterial" --output text
./deploy-stack.sh demoserver servers.yml servers-params.json
```
