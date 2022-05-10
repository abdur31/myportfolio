$( document ).ready(function() {
    $('#brand-item-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
         autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });
});
// portfolio section //
$(document).ready(function(){
  var mixer = mixitup('.js-add-costom');
  var mixer = mixitup(containerEl, {
    pagination: {
        limit: 8 // impose a limit of 8 targets per page
    }
});
});


