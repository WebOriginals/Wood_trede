$(document).ready(function(){
    jQuery(function($){
      $(".js--phone").mask("+7 (999) 999-99-99");
    });

    $(".js--scroll-btn").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
        return false;
    });


  jQuery('.js--slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoHeight: true,
    prevArrow: '.js--prev',
    nextArrow: '.js--next',
    // asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    // focusOnSelect: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });



    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      // 'albumLabel': "Image %1 of %2"
      'albumLabel':  " "
    })

  jQuery(document).ready(function () {
    
    $('.menu-trigger').click(function () {
      $('#menu-trigger').toggleClass('clicked');
      $('.all-wrap').toggleClass('push');
      $('.menu-type').toggleClass('open');
      $('.nav__static').addClass('nav__fix');
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".nav__static").addClass("nav__fix");

    } else {
      $(".nav__static").removeClass("nav__fix");
    };
  }); 

// $('.nav__static').addClass('nav__fix');
  $(window).trigger('scroll');
  $(window).trigger('resize');
});





  // $(document).ready(function(){
  //   $("#start").sticky({topSpacing:0});
  // });
 

   

// $('[aria-expanded="false"].navbar-toggler').click(
//   function(){
//     $(this).toggleClass('burger-open');
//   }
// ); 