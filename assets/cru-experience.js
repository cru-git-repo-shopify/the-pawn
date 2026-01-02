jQuery(document).ready(function(){
    if(jQuery(window).width() > 900){
        jQuery('.experience-loop.cta-grid-container').each(function(){
            var desc_height = 0;
            jQuery(this).children('.cta_content').each(function(){
                jQuery(this).children('.cta_txt_content').each(function(){
                    jQuery(this).children('.cta_heading').each(function(){
                        if(jQuery(this).height() > desc_height){
                            desc_height = jQuery(this).height()
                        }
                        console.log(desc_height);
                    });
                });
            });

            jQuery(this).children('.experience-loop .cta_content').each(function(){
                jQuery(this).children('.cta_txt_content').each(function(){
                    jQuery(this).children('.cta_heading').each(function(){
                        var margin = (desc_height  - jQuery(this).height()) + 24;
                        jQuery(this).css('margin-bottom', margin+"px");
                    });
                });
            });
        });
    }
});