! function(i) {
	var o, n,z;
	i(".title-block").on("click", function() {
    o = i(this).parents(".accordion_item"), n = o.find(".info")
    if( n.is(':visible')){
      (o.removeClass("active_block"),o.removeClass("active_line"), n.slideUp())
    }else{
     o.hasClass("active_block") ? (o.removeClass("active_block"), n.slideUp()) 
      : (o.addClass("active_block"),o.addClass("active_line"), n.stop(!0, !0).slideDown(),
          o.siblings(".active_block").removeClass("active_block").children(".info").stop(!0, !0).slideDown())
    }  
	})
  }(jQuery);