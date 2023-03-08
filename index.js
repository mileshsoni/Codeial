const express = require("express");
const app = express();
// by default websites run on port 80
const port = 8000;

// getting the express router function to be called using the middleware
app.use("/", require("./routes"));
app.listen(port, function(error){
    if(error){
        console.log(`error in running the server ${error}`);
        return ;
    }
    console.log(`server is running on ${port}`);
});