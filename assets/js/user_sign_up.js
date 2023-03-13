$(document).ready(function(){
    // jquery code to toggle visibility of password
    $("#show-pass").on("click", function(){
        var field = $("#password").attr('type');
        if(field == "password"){
            $("#password").attr('type', 'text');
        }
        else {
            $("#password").attr('type', 'password')
        }
    });
});
// jquery code to validate the form
// we cannot use it without including the jquery validate cdn
$("#form").validate({

    // rules are defined on input fields
    // fields are accessed using their name attribute
    rules: {
        password: {
            required: "true"
        },
        confirm_pass: {
            required: "true",
            equalTo: "#password"
        }

    }

});