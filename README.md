# GutscheinGang
![.github/workflows/azure.yml](https://github.com/Corona-Killer/GutscheinGang/workflows/.github/workflows/azure.yml/badge.svg?branch=master)
## Prerequisites
Backend:
- Java 11 
- gradle

Frontend:
- NodeJS
- NPM

## Run the backend locally
1. Insert the database credentials into ```/src/main/resources/application.properties```. Take the ```application_sample.properties``` as sample.
2. Run it directly by executing ```gradle bootRun``` or build a jar-file by running ```gradle build```

## Run the frontend locally
1. Run ```npm install``` to install all prerequisites
2. Run ```npm start```
