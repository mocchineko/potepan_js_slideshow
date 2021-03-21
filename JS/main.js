$(function () {

    $(".slick").slick({
        autoplay: true,
        autoplayspeed: 4000,
        dots: true,
        // arrows: true,
        // accessibility: true,
    });

    $("img.lazyload").lazyload();
});