$(window).scroll(function() {
    $("header").css({
    'opacity' : 1-(($(this).scrollTop())/450)
    });          
});