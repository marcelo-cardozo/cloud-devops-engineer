#!/usr/bin/env bash

# This tags and uploads an image to Docker Hub

# Step 1:
# This is your Docker ID/path
dockerpath=marcecardozo/housing-prediction:latest

# Step 2
# Run the Docker Hub container with kubernetes
kubectl run housing\
    --generator=run-pod/v1\
    --image=marcecardozo/housing-prediction\
    --port=80 --labels app=housing\
    --image-pull-policy=Never


# Step 3:
# List kubernetes pods
kubectl get pods

# Step 4:
# Forward the container port to a host
kubectl port-forward housing 7777:80
