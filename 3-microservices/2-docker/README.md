## Containerization
Create a docker container for the project

```shell script
docker build -t api:latest .

docker run --rm -p 8000:5001 api:latest
```


## Exercise
Containerize flask app
```shell script
docker build -t tezt:latest .

docker run --rm -p 8000:5000 tezt:latest
```
