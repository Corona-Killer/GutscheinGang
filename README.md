# GutscheinGang
![.github/workflows/azure.yml](https://github.com/Corona-Killer/GutscheinGang/workflows/.github/workflows/azure.yml/badge.svg?branch=master)

A project, where Vouchers can be bought to support local businesses that have big losses during the Corona crisis. Those vouchers are supposed to be redeemed after the crisis and therefore flatten the impact curve on those businesses.

## Prerequisites
Backend:
- JDK 11 

Frontend:
- NodeJS
- NPM

## Run the backend locally
1. Insert the database credentials into ```/src/main/resources/application.properties```. Take the ```application_sample.properties``` as sample.
2. Run it directly by executing ```gradlew bootRun``` or build a jar-file by running ```gradlew build```

## Run the frontend locally
1. Run ```npm install``` to install all prerequisites
2. Run ```npm start```
