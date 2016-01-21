$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
});
