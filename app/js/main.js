$(function(){

    $('.slider__inner').slick({
        // autoplay: true,
        dots: true,
        arrows: false,
    });

    $('.partner__items').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,  
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,  
                }
            },
        ]
    });

    $('.stock__items').slick({
        // autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,  
                }
            },
        ] 
    });

    $('.header__menu-btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});