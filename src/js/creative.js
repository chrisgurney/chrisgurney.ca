(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click', function() {
    // $('.navbar-collapse').collapse('hide');
    $('#navbarFull').collapse('hide');
    return true;
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Full-Screen Menu Toggle
  $('.menu-toggle').on('click', function(){
    $('.menu-full').toggleClass('menu-full--open');
  })

  // Toggle DIVs - Flip icons
  $('a#toggle-ethno1').click(function () {
    $(this).find('i.toggle-ethno1').toggleClass('fa-angle-up fa-angle-down');
  })

  $('a#toggle-ethno2').click(function () {
    $(this).find('i.toggle-ethno2').toggleClass('fa-angle-up fa-angle-down');
  })

  $('a#toggle-ethno3').click(function () {
    $(this).find('i.toggle-ethno3').toggleClass('fa-angle-up fa-angle-down');
  })

  // set equal width rows on desktop
  if ($(window).width() >= 992) {  
    $('.is-equal').matchHeight({ byRow: false });
  }

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-card', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-card-media', {
    duration: 1500
  }, 50);  
  sr.reveal('.sr-image', {
    duration: 1000,
    delay: 200
  });    
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: 'title' 
      }
    });
  });

  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // process.html - Toggle showing process step cards
  $("#process-btns .btn").on("click", function() {
    var btn_list = $(this).data("list");
    $("#process-cards .process-card").filter(function() {
      $(this).toggle($(this).data("list").indexOf(btn_list) > -1)
    });
  });

  // faq.html - Page filter search bar thing
  $("#faq-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#faq-answers > *").filter(function() {
      if ($(this).is('h6')) {
        return;
      }
      var matched = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(matched);
    });
    // ensure neighboring elements are visible, for context
    // TODO: these don't seem to work as I'm expecting
    $("#faq-answers p:visible").prevUntil('h1').addBack().toggle(true);    
    $("#faq-answers ul:visible").prevUntil('h1').addBack().toggle(true);    
    $("#faq-answers ol:visible").prevUntil('h1').addBack().toggle(true);
    $("#faq-answers h2:visible").nextUntil('h1,h6,hr').toggle(true);    
    $("#faq-answers h1:visible").nextUntil('h1,h6,hr').toggle(true);
  });

  //var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
  });

})(jQuery); // End of use strict
