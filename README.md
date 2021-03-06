# GutscheinGang
![Backend](https://github.com/Corona-Killer/GutscheinGang/workflows/Backend/badge.svg)
![Frontend](https://github.com/Corona-Killer/GutscheinGang/workflows/Frontend/badge.svg)

A project, where vouchers can be bought to support local businesses that have big losses during the Corona crisis. Those vouchers are supposed to be redeemed after the crisis and therefore flatten the impact curve of the crisis on those businesses.

The project originates from the <a href="https://wirvsvirushackathon.org/" target="_blank">#WirVsVirus-Hackathon</a> of the German federal government in March 2020.

## Prerequisites
Backend:
- JDK 11

Frontend:
- NodeJS
- NPM

## Run the backend locally
1. Set the database credentials as environment variables (POSTGRES_URL, POSTGRES_USER, POSTGRES_PASSWORD)
2. Set a random JWT secret as environment variable (JWT_SECRET)
3. Run it directly by executing ```gradlew bootRun``` or build a jar-file by running ```gradlew build```

## Run the frontend locally
1. Run ```npm install``` to install all prerequisites
2. Run ```npm start```
