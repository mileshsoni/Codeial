const express = require("express");
const app = express();
// library required to use layouts
const expressLayout = require("express-ejs-layouts");
// accessing db
const db = require("./config/mongoose");
// by default websites run on port 80
const port = 8000;
// To use layouts
app.use(expressLayout);

// to extract styles and scripts from individual pages
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// getting the express router function to be called using the middleware
app.use("/", require("./routes"));

app.use(express.static("./assets"));
//to set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(port, function(error){
    if(error){
        console.log(`error in running the server ${error}`);
        return ;
    }
    console.log(`server is running on ${port}`);
});