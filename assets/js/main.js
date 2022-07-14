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
/*
Inspired by Florin Pop's coding challenges, you can check them here: https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/
*/

function loading() {
  document.querySelectorAll(".bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);
