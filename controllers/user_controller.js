module.exports.profile = function(request, response){
    return response.render("users", {
        title: "Profile"
    });
}
module.exports.post = function(request, response) {
    return response.render("users", {
        title: "Post"
    });
}