const owl = $('.owl-carousel');
$(function () {
    owl.owlCarousel({
        items: 1,
        center: true,
        autoWidth: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 2000
    });
});