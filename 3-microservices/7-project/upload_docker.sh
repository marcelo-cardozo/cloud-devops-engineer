#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built via `run_docker.sh`

# Create dockerpath
dockerpath=marcecardozo/housing-prediction:latest

docker login -u "$1" -p "$2"

# Push image to a docker repository
docker push $dockerpath
