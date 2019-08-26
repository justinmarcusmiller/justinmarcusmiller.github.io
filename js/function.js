$(document).ready(function(){

    // Moves name left and right when scrolling down
    $(window).scroll(function() {
        let distance = $(window).scrollTop();
        $('#first-name').css({ 'transform': 'translate(' + -distance + 'px, 0px)'});
        $('#last-name').css({ 'transform': 'translate(' + distance + 'px, 0px)'});

    });

    // moves view to about section when spash button is clicked/pressed
    $("#splashbutton").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

});