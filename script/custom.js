$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoPlay: 2000,
    items: 8
  });
});

if($(window).width() < 420) {
  $(".owl-carousel").owlCarousel({
    items: 3
  });
};