function Faq() {
    function bindUIAction() {
        $('.js-Faq-trigger').on('click', function(event) {
            event.preventDefault();
            $(this).siblings('.js-Faq-content').slideToggle();
            $(this).children('.Faq-button-arrow').toggleClass('is-open');
            return false;
        });
        $('.js-Faq-star').hover(
            function() {
                $(this).parent().find('.js-Faq-star').removeClass('is-selected');
                var star = $(this).attr('data-val');
                $(this).parent().find('.js-Faq-star').each( function( index ) {
                    if ( index < star ) {
                        $(this).addClass('is-active');
                    }
                });
            },
            function() {
                $(this).parent().find('.js-Faq-star').removeClass('is-active');
                var star = $(this).parent().attr('data-selected');
                $(this).parent().find('.js-Faq-star').each( function( index ) {
                    if ( index < star ) {
                        $(this).addClass('is-selected');
                    }
                });
            }
        );
        $('.js-Faq-star').on('click', function(event) {
            event.preventDefault();
            var star = $(this).attr('data-val');
            $(this).parent().attr('data-selected', star);
            $(this).parent().find('.js-Faq-star').each( function( index ) {
                if ( index < star ) {
                    $(this).addClass('is-selected');
                }
            });
        });
    }

    return {
        init: bindUIAction
    }
}

export default Faq();
