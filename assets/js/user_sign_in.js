// jquery code to toggle password visibility
$(document).ready(function(){
    $("#show-pass").on("click", function(){
        // to get the type of input field
        var field = $("#password").attr('type');
        if(field == "password"){
            $("#password").attr('type', 'text');
        }
        else {
            $("#password").attr('type', 'password')
        }
    });
});
