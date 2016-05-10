$(document).ready(function () {
    "use strict";
    
    $(window).scroll(function () {
        
        var wScroll = $(this).scrollTop();
        
        if (wScroll > $('.main-bottom-sections').offset().top) {
            
            $('.main-cta-nav').addClass('is-fixed');
            
        };
        
        if (wScroll < $('.main-bottom-sections').offset().top) {
            
            $('.main-cta-nav').removeClass('is-fixed');
            
        };

    });
});

