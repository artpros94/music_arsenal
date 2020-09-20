$(function(){

    $('.slider__inner').slick({
        autoplay: true,
        dots: true,
        arrows: false,
    });

    $('.partner__items').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
    });

    $('.stock__items').slick({
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    });


});