#!/usr/bin/env bash

# Step 1:
# Build image and add a descriptive tag
docker build -t marcecardozo/housing-prediction:latest .

# Step 2: 
# List docker images
docker images

# Step 3: 
# Run flask app
docker run --rm -ti -p 7777:80 marcecardozo/housing-prediction:latest