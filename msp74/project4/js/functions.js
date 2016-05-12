$(document).ready(function () {
    "use strict";
    
    $(window).scroll(function () {
        
        var wScroll = $(this).scrollTop();
        
        // Past CTA
        if (wScroll + 60 > $('.main-bottom-sections').offset().top) {
            
            $('.main-cta-nav').addClass('is-fixed').fadeIn();
            
        };
        
        // Above CTA
        if (wScroll + 60 < $('.main-bottom-sections').offset().top) {
            
            $('.main-cta-nav').removeClass('is-fixed').fadeIn();
            
        };

    });
});

