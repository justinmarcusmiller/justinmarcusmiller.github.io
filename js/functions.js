$(document).ready(function () {
    "use strict";
    
    $('*').hide();
    $('*').fadeIn(1000);

    
});

$(window).scroll(function () {
    $("#mainsection").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});