$(document).ready(function () {
    $(window).scroll(function () {
        const nav = $("nav");
        const main = $('main');
        const fixed = 'fixed';
        const top = $(window).scrollTop();
        top < nav.height() ? main.addClass(fixed) : main.removeClass(fixed)
    })
});