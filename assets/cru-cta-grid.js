jQuery(document).ready(function($) {
    jQuery('.cta-products').slick({
        infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
		prevArrow:"<i class='fa-solid fa-chevron-left'></i>",
      	nextArrow:"<i class='fa-solid fa-chevron-right'></i>",
    });
});