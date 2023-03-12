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
module.exports.signIn = function(request, response) {
    return response.render("user_sign_in", {
        title: "Codeial | Sign in"
    });
}

module.exports.singUp = function(require, response) {
    return response.render("user_sign_up", {
       title : "Codeial | Sign up" 
    });
}