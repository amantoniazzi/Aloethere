# aloethere
Aloe There! a plant care app 

Aloe There! runs on an express server, with a MongoDB (/Mongoose) database.
The db has 2 joint collections for plants and userPlants.
API endpoints at /plants, /myplants, /subscription. The latter uses the server as a push server for push notifications. On the client side those are handled with service worker in the public folder (public folder / sw.js)

The client is a react app bootstrapped with create-react-app. 
In the containers folder you can find the 3 main screens.

You can find default settings to run the server and mongoDB in the index.js files.
You can start the server with npm run start script, same for the client.