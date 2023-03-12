const mongoose = require ('mongoose');
mongoose.connect("mongodb://0.0.0.0/codeial_developement");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to db"));
db.once("open", function(){
    console.log("connected to database :: MongoDB");
});
mongoose.exports = db;