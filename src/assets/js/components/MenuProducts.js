function MenuProducts() {
    function bindUIAction() {
        var htmlClass = $('html').attr('data-html');
        function ProductsMenu() {
            $('.js-products-trigger').each(function(index) {
                var submenu_id = 'section-' + $(this).attr('data-submenu');
                if( htmlClass == submenu_id ) {
                    $(this).addClass('is-selected');
                    $('.js-' + submenu_id.substring(8) ).addClass('is-open');
                }
            });
        }
        ProductsMenu();
        $('.js-products-trigger').mouseenter(function() {
            var trigger = $(this).attr('data-submenu');
            $('.js-products-trigger').removeClass('is-selected');
            $(this).addClass('is-selected');
            $('.js-productsMenu').removeClass('is-open');
            setTimeout(function(){
                $('.js-' + trigger ).addClass('is-open');
            }, 100);
        });
        $('.js-Products').mouseleave(function() {
            $('.js-products-trigger').removeClass('is-selected');
            $('.js-productsMenu').removeClass('is-open');
            ProductsMenu();
        });
    }

    return {
        init: bindUIAction
    }
}

export default MenuProducts();
