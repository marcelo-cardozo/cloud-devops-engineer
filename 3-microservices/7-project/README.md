[![CircleCI](https://circleci.com/gh/marcelo-cardozo/cloud-devops-engineer.svg?style=svg)](https://circleci.com/gh/marcelo-cardozo/cloud-devops-engineer)

# Operationalize Machine Learning API

## Setup the Environment
```shell script
# Create a virtualenv and activate it
make setup
source .project/bin/activate

# Install the necessary dependencies
make install
```

### Running the App

1. Standalone:  `python app.py`
2. Run in Docker:  `./run_docker.sh`
3. Run in Kubernetes:  `./run_kubernetes.sh`

### Make test prediction
```shell script
./make_prediction.sh
```