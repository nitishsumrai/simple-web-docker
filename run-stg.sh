#!/bin/bash
# Creating and Pushing docker Image of nextjs

cd test/simple-web-docker/

git pull

echo "git pulled"

echo "creating  Docker Image"


docker build -t nitishyadav169/new .



kubectl apply -f K8s


