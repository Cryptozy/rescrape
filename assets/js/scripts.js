$(document).ready(function(){
    $("#nextLogin").click(function(){
        $("#user").animate({"left":"-1000px", "opacity": "0"});
        $("#pass").animate({"left":"0px", "opacity": "1"});
        $(".btn").removeClass("btn-primary").addClass("btn-success");
    })
});
