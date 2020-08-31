# Aloe there! 👋🌿

## What is it

A plant care progressive web app, for expert plant lovers and newbies alike.

With a short quiz, it finds the perfect plant match for your environment and requirements, provides watering instructions and sets watering reminders with push notifications.

!["Oh no, your plants need you - yellow themed homepage"](client/src/assets/mobile-homepage-yellow.png)

!['The watering schedule, you've forgotten to water Fernando!'](client/src/assets/mobile-myplant-yellow.png)

Aloe there comes in two colour schemes, visually flagging when your plants need watering.
Checkout the <a href="client/src/assets/mobile-homepage-green.png">homepage screen</a> and the <a href="client/src/assets/mobile-myplants-green.png">schedule screen</a> when all your plants are watered and happy.

## Tech stack

The app runs on an Express server, with a MongoDB (/Mongoose) database. On the frontend, it's built in React, with a mobile-first design. Assets courtesy of undraw.

## Getting started

To get started, install dependencies and start both client and server:

```bash
cd server
npm install
npm run start
```

```bash
cd client
npm install
npm run start
```

The environment variables needed to set the application to run are in the .env.example files in both directories.

To checkout the already deployed version of the app, visit: https://whispering-springs-27123.herokuapp.com/