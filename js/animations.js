$( document ).ready(function() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //No animations for mobile
  }
  else{
    $('#profile .title').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });
    $('#profile img').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
    });

    $('#portfolio .title').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });
    $('#portfolio .portfolio-item').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
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

    $('#contact .title').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInDown');}
    });
    $('#contact form').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
    });

    $('#footer .location').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInLeft');}
    });
    $('#footer .credits').css('opacity', 0).one('inview', function(isInView) {
      if (isInView) {$(this).addClass('animated fadeInRight');}
    });
  }
});
