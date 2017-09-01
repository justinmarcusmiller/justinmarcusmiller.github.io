$(document).ready(function () {
    "use strict";
    
    $('*').hide();
    $('*').fadeIn(1000);

    
});

// Parallax scrolling for #mainsection background. works on desktop only
$(window).scroll(function () {
    if($(window).width() > 800) {
        $("#mainsection").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
    }
});