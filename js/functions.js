
$(window).scroll(function(){
/*Header Parallax*/
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
    
});
