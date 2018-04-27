// promotional tabs
jQuery(document).ready(function(){
    $('#js-promoTabs').tabs();
});

// slick carousel
// http://kenwheeler.github.io/slick/
jQuery(document).ready(function() {
    $('#js-photoCarousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});