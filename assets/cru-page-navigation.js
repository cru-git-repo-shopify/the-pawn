jQuery(document).ready(function($) {
    jQuery('a.dropdown_trigger').on('click', function(e){
        e.preventDefault();
        if(!jQuery(this).hasClass('active')){
            jQuery('ul.nav-menu.mobile').slideDown();
            jQuery(this).addClass('active');
        }
        else{
            jQuery(this).removeClass('active');
            jQuery('ul.nav-menu.mobile').slideUp();
        }
        
    });
});