
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - window.innerHeight*0.2
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
});
