# Lesson 3 - S3 and RDS
As these are services that are not usually expected to be recreated after each single stack-update. It's usually a good option to just create them from the console.

Or add the `DeletionPolicy: retain` property.

###RDS
Deployment of Aurora Cluster with 2 instances to private subnet.
```shell script
./deploy-stack.sh demonetwork ../2-networking/network.yml ../2-networking/network-params.json

./deploy-stack.sh demords rds.yml rds-params.json
```

###S3
Deployment of public S3 bucket
```shell script
./deploy-stack.sh demos3 s3.yml s3-params.json
```

## Exercise 
Deployment of S3 bucket only allowed to ip address
```shell script
./deploy-stack.sh exers3 exercise/s3.yml exercise/s3-params.json
```