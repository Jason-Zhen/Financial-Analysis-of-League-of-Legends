$(document).ready(function () {

    $("nav #menu img").on('click', function (e) {
        $('main').removeClass('fixed');
        var id = $("#" + $(this).attr('ref'));
        var section_top = id.offset().top;
        $(window).scrollTop(section_top - 100);
        e.preventDefault();
    });

    $(window).scroll(function () {
        var nav = $("#nav-container");
        var main = $('main');
        var fixed = 'fixed';
        var top = $(window).scrollTop();
        top < nav.height() ? main.addClass(fixed) : main.removeClass(fixed)
    })
});