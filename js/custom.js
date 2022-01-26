$(document).ready(function(){

    // slick slider js   =============;
    $('.img-slider').slick({
        // autoplay: true,
        arrows: false,
        // fade: true,
        asNavFor: '.text-slider',
    });
    $('.text-slider').slick({
        // autoplay: true,
        prevArrow: '<i class="fas fa-arrow-left slick-prev left-arrow"></i>',
        nextArrow: '<i class="fas fa-arrow-right slick-next right-arrow"></i>',
        asNavFor: '.img-slider',
    });
    
});