# Deploying nginx server with Ansible
Create a ansible role to install and deploy an nginx server
## Tasks
- Install Nginx
- Generate Nginx site config
- Generate index.html
- Enable Nginx service

```shell script
docker build -t ansible-test:latest .

docker run -p 80:80 --rm ansible-test:latest

# access localhost
```