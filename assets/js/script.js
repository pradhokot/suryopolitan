$(document).ready(function () {

    // carousel fullscreen
    $('.carousel-fullscreen .carousel-item').height($(window).height() - $('#topbar').height());

});

// when window is scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('body').addClass('scroll');
    } else {
        $('body').removeClass('scroll');
    }
});