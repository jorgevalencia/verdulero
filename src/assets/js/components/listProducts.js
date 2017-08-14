function listProducts() {

    function bindUIAction() {

        $(".listProductItem-tooltip").on({
            mouseenter: function() {
                $(this).find('.listProductItem-riskCard').fadeToggle('fast');
            },
            mouseleave: function() {
                $(this).find('.listProductItem-riskCard').fadeToggle('fast');
            }
        });

        $(".listProductItem-button").on({
            mouseenter: function() {
                $(this).find('.listProductItem-buttonTooltip').fadeToggle('fast');
            },
            mouseleave: function() {
                $(this).find('.listProductItem-buttonTooltip').fadeToggle('fast');
            }
        });

        $('.listProductItem-tooltip-mobile').on('click', function(event){
            $(this).closest('.listProductItem-container').find('.listProductItem-riskCard--mobile').slideToggle('fast');
        });

        $('.js-anchor').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 70
            }, 500);
        });

    }

    return {
        init: bindUIAction
    }
}

export default listProducts();
