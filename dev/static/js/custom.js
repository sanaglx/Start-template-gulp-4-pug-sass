console.log('cistom');

//Верх меню
$('.top-line-mob-kn').click(function(){

    if($('.top-menu').hasClass('active')){
        $('.top-menu').removeClass('active'); 
    }else{
        $('.top-menu').addClass('active');  
    }

    return false;

});

$('.owl-tovar-1').owlCarousel({
    items: 1,
    //  center: true,
    //  rtl:true,
    //  stagePadding: 50,
      // merge:true,
      margin:0,
      loop: true,
      autoHeight:false,
      navText: ["←","→"],
      
      //autoplay: true,
      
      responsive:{
          0:{
              center: true,
              nav: true,
          },
          410:{
            items:2,
            
          },
          768:{
              items:3,
              nav: true,
          },

          992:{
              items:4,
              nav: true,
          }
        }
      });
