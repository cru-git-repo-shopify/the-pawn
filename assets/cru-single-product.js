jQuery(document).ready(function($) {
    jQuery('a.anchor_link').on('click', function(){
	    var target = jQuery(this).attr('targets');
	    jQuery('html, body').animate({
	        scrollTop: jQuery('#'+target).offset().top - 150
	    }, 500);
	});
	
	jQuery('a.collapse_specs').on('click', function(e){
	    e.preventDefault();
	    var target = jQuery(this).attr('target');
	    jQuery(this).toggleClass('active');
	    jQuery('#'+target).toggle("slide", { direction: "up" }, 500);
	});
});