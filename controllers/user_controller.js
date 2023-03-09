module.exports.profile = function(request, response){
    response.end(
    " <h1>User Profile</h1> "
    );
}
module.exports.post = function(request, response) {
    response.end(" <h1> This is a Post  </h1> ");
}