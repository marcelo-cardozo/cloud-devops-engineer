# Load Testing with Locust
### Local
```shell script
python -m venv .exercise
source .exercise/bin/activate

pip install --upgrade pip
pip install --trusted-host pypi.python.org -r requirements

python app/web.py
```
In another terminal run Locust en access http://localhost:8089
```shell script
source .exercise/bin/activate
locust
```
### Kubernetes
```shell script
docker build -t marcecardozo/flask-example:latest .
docker push marcecardozo/flask-example:latest

minikube start
kubectl apply -f flask-server.yml

# to get service address
minikube service flask-server 
```

In another terminal run Locust en access http://localhost:8089
```shell script
source .exercise/bin/activate
locust
```