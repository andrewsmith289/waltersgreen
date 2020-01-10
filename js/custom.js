// JavaScript Document

$(window).on('load', function() {
  'use strict'; 

$(window).on('scroll', function() {
  'use strict';

  /*----------------------------------------------------*/
  /*	Navigtion Menu Scroll
		/*----------------------------------------------------*/

  var b = $(window).scrollTop();

  if (b > 60) {
    $('.navbar').addClass('scroll');
  } else {
    $('.navbar').removeClass('scroll');
  }
});

$(document).ready(function() {
  'use strict';

  /*----------------------------------------------------*/
  /*	Header Fixed on Top White Bg
		/*----------------------------------------------------*/

  var heHeight = $('#navigation-menu').css('height');
  if ($('.navbar').hasClass('bg-white')) {
    $('.header').css('margin-bottom', heHeight);
  }

  /*----------------------------------------------------*/
  /*	Header Fixed on Top Transparent Bg
		/*----------------------------------------------------*/

  if ($('.navbar').hasClass('no-bg')) {
    $('.intro-section').addClass('wide-intro');
  }

  /*----------------------------------------------------*/
  /*	Mobile Menu Toggle
		/*----------------------------------------------------*/

  $('.navbar-nav li.nav-link').on('click', function() {
    $('#navigation-menu')
      .css('height', '1px')
      .removeClass('in')
      .addClass('collapse');
    $('#navigation-menu').removeClass('open');
  });
 

  /*----------------------------------------------------*/
  /*	ScrollUp
		/*----------------------------------------------------*/

  $.scrollUp = function(options) {
    // Defaults
    var defaults = {
      scrollName: 'scrollUp', // Element ID
      topDistance: 600, // Distance from top before showing element (px)
      topSpeed: 800, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '', // Text for element
      scrollImg: false, // Set true to use image
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    };

    var o = $.extend({}, defaults, options),
      scrollId = '#' + o.scrollName;

    // Create element
    $('<a/>', {
      id: o.scrollName,
      href: '#top',
      title: o.scrollText,
    }).appendTo('body');

    // If not using an image display text
    if (!o.scrollImg) {
      $(scrollId).text(o.scrollText);
    }

    // Minium CSS to make the magic happen
    $(scrollId).css({
      display: 'none',
      position: 'fixed',
      'z-index': '2147483647',
    });

    // Active point overlay
    if (o.activeOverlay) {
      $('body').append("<div id='" + o.scrollName + "-active'></div>");
      $(scrollId + '-active').css({
        position: 'absolute',
        top: o.topDistance + 'px',
        width: '100%',
        'border-top': '1px dotted ' + o.activeOverlay,
        'z-index': '2147483647',
      });
    }

    // Scroll function
    $(window).scroll(function() {
      switch (o.animation) {
        case 'fade':
          $(
            $(window).scrollTop() > o.topDistance
              ? $(scrollId).fadeIn(o.animationInSpeed)
              : $(scrollId).fadeOut(o.animationOutSpeed)
          );
          break;
        case 'slide':
          $(
            $(window).scrollTop() > o.topDistance
              ? $(scrollId).slideDown(o.animationInSpeed)
              : $(scrollId).slideUp(o.animationOutSpeed)
          );
          break;
        default:
          $(
            $(window).scrollTop() > o.topDistance
              ? $(scrollId).show(0)
              : $(scrollId).hide(0)
          );
      }
    });

    // To the top
    $(scrollId).click(function(event) {
      $('html, body').animate({ scrollTop: 0 }, o.topSpeed);
      event.preventDefault();
    });
  };

  $.scrollUp();

  /*----------------------------------------------------*/
  /*	Contact Form Validation
		/*----------------------------------------------------*/

  $('.contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
        maxlength: 16,
      },
      email: {
        required: true,
        email: true,
      },
      subject: {
        required: true,
        minlength: 4,
        maxlength: 24,
      },
      message: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      name: {
        required: 'Please enter no more than (1) characters',
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
      message: {
        required: 'Please enter no more than (2) characters',
      },
    },
  });

  /*----------------------------------------------------*/
  /*	Callback Form Validation
		/*----------------------------------------------------*/

  $('.callback-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Please enter no more than (1) characters',
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
    },
  });

  /*----------------------------------------------------*/
  /*	Register Form Validation
		/*----------------------------------------------------*/

  $('.register-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 16,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        digits: true,
      },
    },
    messages: {
      name: {
        required: 'Please enter no more than (1) characters',
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
      phone: {
        required: 'Please enter only digits',
        digits: 'Please enter a valid number',
      },
    },
  });
});
