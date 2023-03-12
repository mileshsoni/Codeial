$(document).ready(function(){
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
$("#form").validate({
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