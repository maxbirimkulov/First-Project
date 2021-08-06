$(document).ready(function(){
    // Start carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoHeight: true
    });

// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    // End carousel

    // Start Tabs
    $('ul.catalog__caption').on('click', 'li:not(.catalog__list_active)', function() {
        $(this)
            .addClass('catalog__list_active').siblings().removeClass('catalog__list_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    // End Tabs

    //Start move

    // $('.catalog__card-more').on('click',function (event) {
    //     event.preventDefault();
    //     $('.catalog__card-top').addClass('catalog__card-top_active')
    // });

    $('.catalog__card-more').each(function (link) {
        $(this).on('click',function (event) {
            event.preventDefault();
            $('.catalog__card-top').eq(link).addClass('catalog__card-top_active')
        })
    });

    $('.catalog__card-prev').each(function (link) {
        $(this).on('click',function (event) {
            event.preventDefault();
            $('.catalog__card-top').eq(link).removeClass('catalog__card-top_active')
        })
    });

    var map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.878982, 74.595075],
            zoom: 18
        });
        var myIcon = DG.icon({
            iconUrl: 'https://lightscreative.com/images/clients/itRun.png',
            iconSize: [65, 95],
        });
        DG.marker([42.878982, 74.595075], {icon: myIcon})
            .addTo(map).bindPopup('Академия программирования IT-RUN')
            .bindLabel('Академия программирования IT-RUN', { static: false});
    });

    $('input[type="tel"]').inputmask("+\\9\\96(999)99-99-99");



    $('.header__btn, .button__consult').on('click', function () {
        $('.overlay,.overlay__consult').fadeIn(1000)

    });

    $('.overlay__close').on('click', function () {
        $('.overlay,.overlay__consult, .overlay__buy, .overlay__thanks, .overlay__buy-thanks').fadeOut(1000)
    });

    $('.catalog__card-btn').on('click', function () {
        $('.overlay,.overlay__buy').fadeIn(1000)
    });

    $('.consultation__btn').on('click', function (event) {
        event.preventDefault();
        $('.overlay,.overlay__consult').fadeOut();
        $('.overlay,.overlay__thanks').fadeIn(1000);
        setTimeout(function(){
            $('.overlay, .overlay__thanks').fadeOut(1000);
        },5000)
    });

    $('.overlay__buy-btn').on('click', function (event) {
        event.preventDefault();
        $('.overlay, .overlay__buy').fadeOut();
        $('.overlay,.overlay__buy-thanks').fadeIn(1000);
        setTimeout(function(){
            $('.overlay, .overlay__thanks').fadeOut(1000);
        },5000)
    })
});