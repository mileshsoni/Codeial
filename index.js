const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
// server will run on this port
const port = 8000;

// library required to use layouts
const expressLayout = require("express-ejs-layouts");

// accessing db
const db = require("./config/mongoose");

// reading through post request 
app.use(express.urlencoded());

// using cookie parser
app.use(cookieParser());

// To use layouts
app.use(expressLayout);

// to extract styles and scripts from individual pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// getting the express router function to be called using the middleware
app.use("/", require("./routes"));

// mentioning folder to look up for static files
app.use(express.static("./assets"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(error){
    if(error){
        console.log(`error in running the server ${error}`);
        return ;
    }
    console.log(`server is running on ${port}`);
});