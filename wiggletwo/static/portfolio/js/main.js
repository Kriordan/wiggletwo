$(document).ready(function(){

    $('.linedrawing-carousel').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.resume-popover').fancybox();

});
