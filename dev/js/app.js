$(function() {
  'use strict';
  var $page = $('#main'),
    options = {
      debug: true,
      prefetch: true,
      cacheLength: 2,
      forms: 'form',
      onStart: {
        duration: 400, // Duration of our animation
        render: function($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');
          $('html, body').scrollTop();
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // Inject the new content
          $container.html($newContent);
        }
      },
      onAfter: function($container, $newContent) {
        button();
      }
    },
    smoothState = $page.smoothState(options).data('smoothState');

  button();
});

function button() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - window.innerHeight * 0.15
    }, 700, 'easeInOutExpo');
    event.preventDefault();
  });
}
