# Kubernetes Autoscaling 
It is necessary t have the metrics-server deployed. Installed from [Metrics-Server](https://github.com/kubernetes-sigs/metrics-server) or use the one in the folder. 
`kubectl apply -f components.yml`

```shell script
docker build -t marcecardozo/node-example:latest .
docker push marcecardozo/node-example:latest

minikube start
kubectl apply -f node-server.yml

# as an example: scale the deployment if more than 5% of the cpu is used
kubectl autoscale deployment node-server --cpu-percent=5 --min=1 --max=10
# increase load to test autoscaling 
kubectl run -i --tty load-generator --rm --image=busybox --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://node-server:3000; done"
# to check the status of the scaling
kubectl get hpa
```