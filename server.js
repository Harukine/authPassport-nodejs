// Pull in our required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize our app
const app = express();

// Apply the middleware function
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Set the port for our server to run on and have our app listen on this port
app.listen(port, () => console.log(`Server up and running on port ${port} ! yeeee`));
