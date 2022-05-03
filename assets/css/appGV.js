$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa fa-arrow-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'> <i class="fa fa-arrow-right"></i></button>`,
       
    });
  });

  document.addEventListener("touchstart", function(){}, true);