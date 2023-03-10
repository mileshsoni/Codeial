//creating a action which can be accessed outside this module
// using module.exports
module.exports.home = function(request, response){
    return response.render("home", {
        title: "home"
    }
    );
}