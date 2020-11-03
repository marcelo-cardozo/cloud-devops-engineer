# Deploying webpage to S3 Bucket
The repository [Jenkins-Pipeline-Test](https://github.com/marcelo-cardozo/jenkins-pipeline-test/tree/master) is deployed to a S3 bucket using a Jenkins Pipeline.

###Pipeline Stages
- Build
- Linting
- Security Scan
- Deployment


## Plugins installed
- Recommended Plugins
- BlueOcean Aggregator
- Pipeline: AWS Steps 
- Aqua Microscanner

## Aqua Security Checking
To use Aqua, Docker needs to be available inside the Jenkins container, instead of running the Aqua container inside of the Jenkins container, the docker socket from the host machine is shared as a volume to the jenkins container.

In order to have the permissions to call the docker socket from the jenkins container (which uses the jenkins user). 
We need to add the jenkins user from the container to the docker group in the host machine.

As the users and groups from the container and host machine are totally independent, we can't add the jenkins user from the container to the docker group in the host machine.

But given that linux checks if a user id has the group id to read a file, we could replicate the ids from the host to the container. 

```shell script
# create jenkins user in host
sudo useradd jenkins

# get user uid
id -u jenkins
# HOST_UID => 1001

# add jenkins user to the docker group
# so that jenkins user can execute docker commands
sudo usermod -aG docker jenkins
sudo systemctl restart docker

# get docker group id
getent group | grep docker.*jenkins | awk -F : '{print $3}'
# docker:x:998:user,jenkins; HOST_GID => 998

#
# Set docker container args in docker-compose.yml file
# 
docker-compose up
```

