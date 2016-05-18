$(document).foundation();

$(document).ready(function(){
  $('.gallery').slick({
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    draggable: true,
    mobilefirst: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    touchMove: true,
    responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: "unslick"
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
      
});

$(document).ready(function() {
    $(".fancybox").fancybox({
      height: 1000,
    beforeShow : function() {
        var alt = this.element.find('img').attr('alt');
        
        this.inner.find('img').attr('alt', alt);
        
        this.title = alt;
    }

  });
});

$(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        
        // Get the current target hash
        var target = this.hash;
        
        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

