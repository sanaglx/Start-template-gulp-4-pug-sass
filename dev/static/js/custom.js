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
              items:2,
              nav: true,
          },

          992:{
              items:4,
              nav: true,
          }
        }
});

// cart 
$('.cart-left').click(function () {
    if(!$('.cart-min-list').hasClass('active')){
        $('.cart-min-list').addClass('active');
    }else{
        $('.cart-min-list').removeClass('active');
    }
    return false;
  })

  ///////////////цена + -/////////////////////////////
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
  });
