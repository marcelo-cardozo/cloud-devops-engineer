# NodeJS app - Kubernetes 
```shell script
docker build -t marcecardozo/node-example:latest .
docker push marcecardozo/node-example:latest

minikube start
kubectl run node-demo\
    --generator=run-pod/v1\
    --image=marcecardozo/node-example\
    --port=3000 --labels app=node-demo

kubectl port-forward node-demo 8000:3000
```