jQuery(document).ready(function() {
	/*menu slider toggles*/
	jQuery('.logo_centered_right_hamb a.left_hamburger').on('click', function(e){
	    e.preventDefault();
	    jQuery('.right-popup-menu').show("slide", { direction: "right" }, 300);
	});
	jQuery('logo_centered_right_hamb a.hamburger_close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.right-popup-menu').hide("slide", { direction: "right" }, 300);
	});

	jQuery('.logo_centered_left_hamb a.left_hamburger').on('click', function(e){
	    e.preventDefault();
	    jQuery('.left-popup-menu').show("slide", { direction: "right" }, 300);
	});
	jQuery('.left-popup-menu a.hamburger_close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.left-popup-menu').hide("slide", { direction: "right" }, 300);
	});

	jQuery('.mobile_header a.left_hamburger').on('click', function(e){
	    e.preventDefault();
	    jQuery('.left-popup-menu').show("slide", { direction: "right" }, 300);
	});

	jQuery('a.banner-close').on('click', function(e){
	    e.preventDefault();
	    jQuery('.header_notif').slideUp();
	});
	
	jQuery(window).on( 'scroll', function(){
	    var s = jQuery(window).scrollTop(),
	      d = jQuery(document).height(),
	      c = jQuery(window).height();
	    var scrollPercent = (s / (d - c)) * 100;
	    if(scrollPercent >= 5){
	        jQuery('.cru_header_logo_centered').addClass('scrolled');
	    }
	    else{
	        jQuery('.cru_header_logo_centered').removeClass('scrolled');
	    }
	});

	var lastScrollTop = 0;
	
	jQuery(window).scroll(function(event){
	   var st = jQuery(this).scrollTop();
	   if (st > lastScrollTop){
		   jQuery('.cru_header_logo_centered.scrolled').addClass('down');
	   } else {
		   jQuery('.cru_header_logo_centered.scrolled').removeClass('down');
	   }
	   lastScrollTop = st;
	});

	setTimeout(function(){
		if(jQuery('.hero_main_container').length > 0){
			var currentSlide = jQuery('.hero_main_container').slick('slickCurrentSlide');
			var header_type = jQuery('#slick-slide0'+currentSlide).attr('header-type');
			jQuery('.cru_header_logo_centered').removeClass('dark');
			jQuery('.cru_header_logo_centered').removeClass('light');
			jQuery('.cru_header_logo_centered').addClass(header_type);
		}
	}, 3000);
	

	jQuery('.hero_main_container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var header_type = jQuery('#slick-slide0'+nextSlide).attr('header-type');
		jQuery('.cru_header_logo_centered').removeClass('dark');
		jQuery('.cru_header_logo_centered').removeClass('light');
		jQuery('.cru_header_logo_centered').addClass(header_type);
	});
});