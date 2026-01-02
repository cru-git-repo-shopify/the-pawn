jQuery(document).ready(function($) {
		$('.shop_filter ul li').has('a[href=".product_cat-gift-voucher"]').appendTo( $('.shop_filter ul') );
		$('.shop_filter ul li').has('a[href=".product_cat-wine"]').insertAfter( $('.shop_filter ul li').has('a[href="*"]'));
});

jQuery(document).ready(function() {
	jQuery('ul.products').isotope({
	  itemSelector: '.cru-product-collection .cru-product-item',
	  layoutMode: 'fitRows',
	  filter: '*',
	  masonry: {
	    columnWidth: '.cru-product-collection .cru-product-item',
	  }
	});

	jQuery('.term-item').on('click',function(e){
		e.preventDefault();
		jQuery('.term-item').removeClass('active');
		jQuery(this).addClass('active');

		var target = jQuery(this).attr('href');
		jQuery('.cru-product-collection').isotope({ filter: target })
	});

	 var $container = jQuery('.cru-product-collection'),
        $select = jQuery('.filters_select');
	    $container.isotope({
	        itemSelector: '.cru-product-collection .cru-product-item'
	    });

	    $select.change(function() {
            var filters = jQuery(this).val();
            jQuery('.active').removeClass('active');
            if (filters != '.woocommerce ul.products li.product') {
                jQuery( filters).addClass('active');
            }
            $container.isotope({
                filter: filters
            });
	    });

});