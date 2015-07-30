$( document ).ready(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // You are in mobile browser
  }
  else{
    $('#portfolio .title').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay1s');}
        });
    $('#portfolio .portfolio-item').css('opacity', 0).one('inview', function(isInView) {
        if (isInView) {$(this).addClass('animated fadeInUp delay1s');}
    });
  }
});
