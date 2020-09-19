$(function(){

    $('.slider__inner').slick({
        autoplay: true,
        // dots: true,
        arrows: false,
    });

    $('.partner__items').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.stock__items').slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    });

    $('.new__items').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });

});