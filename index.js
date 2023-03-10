const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
// by default websites run on port 80
const port = 8000;

app.use(expressLayout);
// getting the express router function to be called using the middleware
app.use("/", require("./routes"));

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