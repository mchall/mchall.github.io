$( document ).ready(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //No animations for mobile
  }
  else{
    $('#profile').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });

    $('#portfolio .title').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });
    $('#portfolio .portfolio-item').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
    });

    $('#about img').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInLeft');}
    });
    $('#about .title').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });
    $('#about .about-text').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
    });
    $('#about .download').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInUp');}
    });
  }
});
