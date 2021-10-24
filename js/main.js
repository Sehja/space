$(function () {

    $(document).ready(function () {
        $('.slider__wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img src="images/arrow-left.png" alt="arrow-prev" class="slider__arrow-prev">',
            nextArrow: '<img src="images/arrow-right.png" alt="arrow-next" class="slider__arrow-next">'
        });
    });
});