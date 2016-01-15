$(document).ready(function(){

    // Homepage

    $('.linedrawing-carousel').slick({
        autoplay: true,
        dots: false,
        slidesToShow: 1
    });

    $('.home-resume-popover').fancybox();

    $('[rel=home-scrollarrow]').click( function() {
        $('html, body').animate({
            scrollTop: $('.home-secondbanner').offset().top
        }, 500);
        return false;
    })

    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if(height  > 400) {
            $('[rel=home-scrollarrow]').addClass('hidearrow');
        } else {
            $('[rel=home-scrollarrow]').removeClass('hidearrow');
        }
    });

    // Portfolio

    $('.portfolio-carousel').slick({
        autoplay: false,
        dots: true,
        slidesToShow: 1
    });

    $('.portfolio-project-popover').fancybox();

});
