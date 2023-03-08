//creating a action which can be accessed outside this moudle
// using module.exports
module.exports.home = function(request, response){
    return response.end(
        "<h1> Sociology is on </h1>"
    );
}