"use strict"

// Removes background-color from header when scroll is at top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() < 10) {
            $("header").addClass("no-background");
        } else {
            $("header").removeClass("no-background");
        }
        let distance = $(window).scrollTop();
        $('#first-name').css({ 'transform': 'translate(' + -distance + 'px, 0px)'});
        $("#last-name").css({'transform': 'translate(' + distance + 'px, 0px)'});
    });
    
    
});
