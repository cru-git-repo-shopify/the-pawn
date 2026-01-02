jQuery(document).ready(function($) {
    jQuery('.cru-2-col').each(function(){
        parentHeight = jQuery(this).height();
        jQuery(this).children('.image-column').height(parentHeight);
    });
    
    jQuery('a.scroll_to').on('click', function(e){
		e.preventDefault();
		jQuery('a.scroll_to').each(function(){
			jQuery(this).removeClass('active');
		});
		jQuery(this).addClass('active');
		var targ = jQuery(this).attr('href');
		if(targ == "#our-story" && jQuery(window).width() <= 782){
			targ = "#terrior_mobile";
		}
		if(jQuery(window).width() > 900){
			jQuery('html, body').animate({
				scrollTop: jQuery(targ).offset().top - 50
			}, 1000);
		}
		else{
			jQuery('html, body').animate({
				scrollTop: jQuery(targ).offset().top - 50
			}, 1000);
		}
	});

	jQuery('.image-column .slider').slick({
	    infinite: true,
	    dots: true,
	    speed: 500,
	    fade: true,
	    cssEase: 'linear',
	    autoplay: true,
  		autoplaySpeed: 5000,
  		prevArrow:"<i class='fa-solid fa-chevron-left'></i>",
      	nextArrow:"<i class='fa-solid fa-chevron-right'></i>"
	});
	
	var product_item_height = 0;
	jQuery('.cru-product-collection .cru-product-item').each(function(){
		if(jQuery(this).height() > product_item_height){
			product_item_height = jQuery(this).height();
		}
	});
	jQuery('.cru-product-collection .cru-product-item').each(function(){
		jQuery(this).height(product_item_height);
	});

	if(jQuery(window).width() <= 781){
		jQuery('.cru-featured-products').slick({
			infinite: true,
			dots: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			autoplay: false
		});

		jQuery('.layout-grid .cru-product-slider').slick({
			infinite: true,
			dots: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			autoplay: false
		});
	}

	jQuery('a.open_submenu').on('click', function(e){
		e.preventDefault();
		console.log('test');
		jQuery(this).siblings('ul.sub-menu').html();
		if(jQuery(this).hasClass('active')){
			jQuery(this).parent().removeClass('active');
			jQuery(this).removeClass('active');
		}
		else{
			jQuery(this).parent().addClass('active');
			jQuery(this).addClass('active');
		}
	});
	
});