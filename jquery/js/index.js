"use strict";
var myWidth='400px';
$(document).ready(function() {
    //jQuery methods
    // $(".btn-success, #test1").hide();
    //toggle(), hide(), show(), slideUp(), slideToggle(1000) (speed)
    $("ul li:first-child").mouseenter(function () {
        $("#test3").slideToggle(100, function() {
            $("#test2").toggle();
        });
    });
    //on click
    $(".btn-primary").click(function () {
       // alert("Text: " + $("#test1").text() );
        $("#test2").animate( {
            height: '300px',
            width: '300px'
        }, 1000, function(){ //callback function 
         //  $("#test2").addClass("bg-warning").text("Hellooo bitch");
         //  $("#test2").append("<p>the div is now " + $("#test2").outerHeight() + " tall<p>");
        $("main div").html("").css("width","28em").append("<div class= 'card-block'>");
        $(".card-block").html("<h4 class='card-title'>Card Title</h4>")
            .append(
                $("<p></p>")
                .text("Card body text!")
                .addClass("card-text"));
         $("#test1").animate({
               left: myWidth,
               top: '300px'
           },3000);
        });

        $("ul").children("li").eq(0).addClass("bg-danger");
        $("ul").find("a").addClass("text-white");
    });
    $("#test3").hide();
    $("[name='alternamte']").mousedown(function () {
        $("#test3").show();
    });
    $("[name = 'alternate']").mouseup(function () {
        $("#test3").hide();
        $(this).animate({
            width: myWidth
        });
    });
});