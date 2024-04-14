#!/bin/bash
set -e
sudo npm update -y
sudo pm2 update
sudo aws s3 cp s3://GW-s3/secrets/Dev-Api/.env /home/ubuntu/project-name/
sudo aws s3 cp s3://GW-s3/secrets/Dev-Api/firebase-adminSDK.json /home/ubuntu/project-name/
#sudo service nginx reload