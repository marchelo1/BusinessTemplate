// preloader
$(window).on('load', function() {   // this jQuery function assuring us that whole site is loaded
$('#status').fadeOut();     
$('#preloader').delay(350).fadeOut();
});


// Circle Image Slider
jQuery(document).ready(function() {
  "use strict";
  $("#slider-carousel").carouFredSel({
    responsive: true, // make responsive on any browser
    width: "100%;",
    circular: true, 
    scroll: {
      items: 1,
      duration: 700,
      pauseOnHover: true
    },
    auto: true, // automatic slider
    items: {
      visible: {
        min: 1,
        max: 1
      },
      height: "variable"
    },

    // pagination -simple navigation which lets you split a huge amount of content within the tables into smaller parts
    pagination: {
      container: ".sliderpager",
      pageAnchorBuilder: false
    }
  });
  
  $(window).scroll(function() {
    // show navbar when is scrolling down
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("header").addClass("secondary");
    } else if ($("header").hasClass("secondary")) {
      $("header").removeClass("secondary");
    }

  });


  //Responsive Mobile Menu Plugin for jQuery
  $('#menu').slicknav({
    label: '',
  })

  //Scroll Effect
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

});




// Back To Top Button 
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 1000);
});


