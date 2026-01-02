jQuery(document).ready(function(){	
	jQuery('a.mobile_trigger').on('click', function(e){
		e.preventDefault();
		if(jQuery(this).hasClass("active")){
			jQuery(this).toggleClass("active");
			var target = jQuery(this).attr("target");
			jQuery("#"+target).slideToggle();
			jQuery("#"+target).toggleClass("active");
		}
		else{
			jQuery('a.mobile_trigger').each(function(){
				jQuery(this).removeClass("active");
			});
			jQuery('ul.footer_menu').each(function(){
				if(jQuery(this).hasClass("active")){
					jQuery(this).slideToggle();
					jQuery(this).removeClass("active");
				}
			});

			jQuery(this).toggleClass("active");
			var target = jQuery(this).attr("target");
			jQuery("#"+target).toggleClass("active");
			jQuery("#"+target).slideToggle();

		}
	});
});