# onlinebookstore

This is a simple app that allows users to login and select a book of their choice, get a brief description of what the book is about and the add it to their cart for purchase if interested in the book.

The app is built on the MERN stack technology, i.e MongoDb for database, express js as the webframe work, Reactjs for the frontend and Nodejs for the backend.

To start the backend part of the app after cloning:

add a /server/.env file with the following inputs for your MongoDb configuration:

```
MONGODB_URI=mongodb+srv://[USERNAME]:[PASSWORD]@onlinebookstore.awkteqv.mongodb.net/bookstore?retryWrites=true&w=majority&appName=onlinebookstore
```

The above configurations will depend with how you name your database, alternatively, you can use MongoDb in a local instance of you computer.

```js
- cd server
- run npm install
- npm start
```
The above command will start the backend part of the app.

To start the frontend part of the app:

```
- cd client
- nmp install
- npm start

```