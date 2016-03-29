function showLogin(){
    $(".box").slideDown("fast");
}

$("#loginForm").keypress(function(event) {
    var keyCode = (event.keyCode ? event.keyCode : event.which);
    if (keyCode == 13) {
        $("#user").slideUp();
        $("#pass").slideToggle().focus();
        $(".btn").css({"display": "flex"}).fadeIn("slow");
    }
});

$("#nextLogin").click(function(){
    var user = $("#user").val();
    var pass = $("#pass").val();
    $(".box").slideUp();
    $("#loading").fadeIn("fast");
    $.ajax({
        url: 'includes/ajax/doLogin.php',
        data: {user: user, pass: pass},
        type: 'POST',
        success: function(data){
            console.log(data);
            if(data == true){
                window.location.replace("home");
            } else {
                showLogin();
            }
        }
    })
});
