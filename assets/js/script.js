
window.carouselSteps = [];
jQuery(document).ready(function ($) {

    var slideCount = $('.gallery .gallery__list li.gallery__li').length;
    var slideWidth = $('.gallery .gallery__list').width();
    var slideHeight = $('.gallery .gallery__list').height();
    var sliderUlWidth = slideCount * slideWidth;

    /*$('.gallery .gallery__list').css({width: slideWidth, height: slideHeight});*/
    $('.gallery .gallery__list').css({width: slideWidth, height: '208px'});

    $('.gallery .gallery__list > ul').css({width: sliderUlWidth, marginLeft: -slideWidth});
    $('.gallery .gallery__list > ul > li.gallery__li').css({width: slideWidth});

    $('.gallery .gallery__list > ul > li:last-child').prependTo('.gallery .gallery__list > ul');

    function moveLeft() {
        $('.gallery .gallery__list ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('.gallery .gallery__list ul li:last-child').prependTo('.gallery .gallery__list ul');
            $('.gallery .gallery__list ul').css('left', '');
        });
    };

    function moveRight() {
        $('.gallery .gallery__list ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('.gallery .gallery__list ul li:first-child').appendTo('.gallery .gallery__list ul');
            $('.gallery .gallery__list ul').css('left', '');
        });
    };

    $('.gallery .c-buttons__left').click(function () {moveLeft();});

    $('.gallery .c-buttons__right').click(function () {moveRight();});
});


jQuery(document).ready(function ($) {
    function move(step) {
        var carousel = 0;
        $('.projects .carousel__steps div.step').each((index, element) => {
            if(!$(element).is(":hidden")){
                carousel = parseInt($(element).attr('carousel'));
            }
        })
        carousel = parseInt(carousel) + parseInt(step);
        if(parseInt(carousel) > parseInt(window.slideCount)) { carousel = 1;}
        if(parseInt(carousel) < 1) { carousel = parseInt(window.slideCount);}
        $('.projects .carousel__steps div.step').hide();
        $('.projects .carousel__steps div.step[carousel=' + carousel + ']').show();
    }
    function moveLeft() { move(-1); }
    function moveRight() { move(1);}
    window.slideCount = $('.projects .carousel__steps div.step').length;
    if (window.slideCount > 0) {
        $('.projects .carousel__steps div.step').each((index, element)=>{
            $(element).hide();
            var i = parseInt($(element).attr('carousel'));
            window.carouselSteps[i] = $(element);
        })
        $('.projects .carousel__steps div.step:first-child').show();
    }
    $('.projects .c-buttons__left').click(moveLeft);
    $('.projects .c-buttons__right').click(moveRight);
});
