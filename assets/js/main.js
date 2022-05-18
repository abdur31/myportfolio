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

$( document ).ready(function() {
    $('#brand-item-2').owlCarousel({
        loop:true,
        margin:50,
         autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        autoplayHoverPause:true,
        dots:true,
        responsive:{
              0:{
                items:1
            },
              480:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1000:{
                items:3
            },
             1200:{
                items:4
            }
        }
    });
});
 
// skill section //


