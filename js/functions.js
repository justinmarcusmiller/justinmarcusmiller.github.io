
$(window).scroll(function(){
/*Header Parallax*/
  var wScroll = $(this).scrollTop();

  $('header h1').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

$('.sun').css({
    'transform' : 'translate(0px, '+ wScroll /3 +'%)'
  });
    
  $('.m2').css({
    'transform' : 'translate(0px, '+ wScroll /40 +'%)'
  });

  $('.m1').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });
    
});
