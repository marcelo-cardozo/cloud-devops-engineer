# Monitoring Voting app with ELK Stack
Sets up the monitoring for the Docker Sample Votting application using ELK Stack

```shell script
docker-compose -f docker-elk/docker-compose.yml up -d
docker-compose -f voting-app/docker-compose.yml up -d
```