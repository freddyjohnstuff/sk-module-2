"use strict";
(function () {
    $.fn.burger = function () {
        window.burgerState = 0;
        var _this = this;
        $(this).on('click', function () {

            if(window.burgerState === 0) {
                $('.burger .burger__normal').hide();
                $('.burger .burger__open').show()
                $('.nav .nav__menu').show().css('display', 'flex');
                window.burgerState = 1;
            } else {
                $('.burger .burger__normal').show();
                $('.burger .burger__open').hide();
                $('.nav .nav__menu').hide();
                window.burgerState = 0;
            }
            console.log(window.burgerState);
        });
    }
}());

$(function () {
    $('.header .nav .burger').burger();
});