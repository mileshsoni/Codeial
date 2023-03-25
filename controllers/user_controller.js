const { findOne } = require("../models/user");
const User = require("../models/user");
module.exports.profile = function(request, response){
    let id = request.cookies.user_id;
    User.findById(id)
    .then ((user) => {
        return response.render("users", {
            title: "users",
            name: user.name,
            email: user.email
        });
    })
    .catch(()=>{
        console.log("error in finding the user");
        return response.redirect("/users/sign-in");
    });
}
module.exports.post = function(request, response) {
    return response.render("users", {
        title: "Post"
    });
}
// sign in controller
module.exports.signIn = function(request, response) {
    return response.render("user_sign_in", {
        title: "Codeial | Sign in"
    });
}
// sign up controller
module.exports.singUp = function(require, response) {
    return response.render("user_sign_up", {
       title : "Codeial | Sign up" 
    });
}
// controller to get the user data or form data
module.exports.create = function(request, response){
    
    // checking whether the password entered in password field and confirm password field are same or not
    // form data is collected and can be seen in request body
    if(request.body.password != request.body.confirm_pass){
        return response.redirect("back");
    }

    // if the above condition is false
    let mail = request.body.email;
    // finding user based on the mail entered as mail should be unique in Database
    async function findUser (){
        await User.findOne({email: mail});
    }
    // if error
    findUser().catch(() => {
        console.log("error in finding user");
        return ;
    });
    // if no error occurs while finding the user
    findUser().then((user)=>{
        // the user doesn't exist in Database
        if(!user){
            // function to create user
            async function createUser (){
                await User.create(request.body);
            }
            // if user is create successfully
            // we will redirect the user to sign in page
            // else we will print the user
            createUser().then(() => {
                return response.redirect("/users/sign-in");
            }).catch(()=>{
                console.log("error in creating the user");
            });
        }
        // if the user already exits 
        // we will redirect the user to previous page
        // that is sign up page
        else {
            return response.redirect("back");
        }
    });
}

// sign in and create session for the user
module.exports.createSession = function (request, response) {
    // find the user
    let mail = request.body.email;
    // alternates of callback function

    // option1 using then and catch
    // function findUser () {
    //     User.findOne({email: mail})
    //     .then((user) => {
    //         if(user) {
    //             if(user.password != request.body.password) {
    //                 return response.redirect("back");
    //             }
    //             response.cookie('user_id', user.id);
    //             return response.redirect("/users/profile");
    //         }
    //         else{
    //             return response.redirect("back");
    //         }
    //     })
    //     .catch(() => {
    //         console.log("error in finding the user");
    //     } );
    // };
    // findUser();

    // option 2
    // using async await

    async function findUser() {
        try {
            // await keyword converts the object into promise
            const user = await User.findOne(
                {email: mail}
            );
            if(user) {
                if(user.password != request.body.password) {
                    return response.redirect("back");
                }
                response.cookie('user_id', user.id);
                return response.redirect("/users/profile");
            }
            else{
                return response.redirect("back");
            }
        }
        catch {
            console.log("error in finding the user");
        }
    }
    findUser();

    // option 3
    // async function findUser () {
    //     return User.findOne({email: mail});
    // }
    // findUser().then((user) => {
    //     console.log(user.password);
    //     if(user){
    //         if(user.password != request.body.password){
    //             console.log("wrong password ");
    //             return response.redirect("back");
    //         }
    //         console.log("user created");
    //         response.cookie("user_id", user.id);
    //         return response.redirect("/users/profile");
    //     }
    //     else{
    //         console.log("user is not present");
    //         return response.redirect("back");
    //     }
    // });
    // findUser().catch(() => {
    //     console.log("error in finding the user");
    // });

    // option 4

    // async function findUser () {
    //     return await User.findOne({email: mail});
    // }
    // let user = findUser();
    // user.then((user) => {
    //     console.log(user.password);
    //     if(user){
    //         if(user.password != request.body.password){
    //             console.log("wrong password ");
    //             return response.redirect("back");
    //         }
    //         console.log("user created");
    //         response.cookie("user_id", user.id);
    //         return response.redirect("/users/profile");
    //     }
    //     else{
    //         console.log("user is not present");
    //         return response.redirect("back");
    //     }
    // });
    // user.catch(() => {
    //     console.log("error in finding the user");
    // });
}
module.exports.signOut = function(request, response) {
    let id = request.cookies.user_id;
    response.clearCookie("user_id");
    User.findById(id)
    .then ((user) => {
        return response.render("signOut", {
            title: "sign out",
            name: user.name
        });
    });
    
}