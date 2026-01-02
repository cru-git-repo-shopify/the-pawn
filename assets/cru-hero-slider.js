jQuery(document).ready(function(){
    jQuery('.hero_main_container').slick({
            infinite: true,
            dots: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });

        jQuery('.slider-inner-container, .slider-container').slick({
            infinite: true,
            dots: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
        });
        setTimeout(function(){
            if(jQuery('.hero_main_container').length > 0){
                var currentSlide = jQuery('.hero_main_container').slick('slickCurrentSlide');
                var header_type = jQuery('#slick-slide0'+currentSlide).attr('header-type');
                // jQuery('.cru_header_logo_centered').removeClass('dark');
                // jQuery('.cru_header_logo_centered').removeClass('light');
                // jQuery('.cru_header_logo_centered').addClass(header_type);
            }
        }, 3000);
        

        jQuery('.hero_main_container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var header_type = jQuery('#slick-slide0'+nextSlide).attr('header-type');
            // jQuery('.cru_header_logo_centered').removeClass('dark');
            // jQuery('.cru_header_logo_centered').removeClass('light');
            // jQuery('.cru_header_logo_centered').addClass(header_type);
        });

        jQuery('a.hero_slider_next').on('click', function(e){
            e.preventDefault();
            jQuery('.hero_main_container').slick('slickNext');
        });
        
        jQuery('a.hero_slider_prev').on('click', function(e){
            e.preventDefault();
            jQuery('.hero_main_container').slick('slickPrev');
        });
    });