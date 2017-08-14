function Menu() {
    function bindUIAction() {
        $('.js-hamburger').on('click', function(event) {
            event.preventDefault();
            $(this).addClass('is-open');
            $('.js-menuMobile').toggleClass('is-open');
            $('.js-Header').toggleClass('is-open');
            $('.js-main').toggleClass('u-fixed');
            $('.js-footer').toggleClass('u-fixed');
            $('.js-hamburger').toggleClass('is-active');
            $('.js-searchBtn').removeClass('is-active');
            $('.js-searchBar').removeClass('is-open');
            $('.js-btnMobile-open').show();
            $('.js-btnMobile-close').hide();
        });

        var width = $(window).width();
        $(window).on('resize', function(){
            if($(this).width() != width){
                width = $(this).width();
                $('.js-menuMobile').removeClass('is-open');
                $('.js-Header').removeClass('is-open');
                $('.js-main').removeClass('u-fixed');
                $('.js-footer').removeClass('u-fixed');
                $('.js-hamburger').removeClass('is-active');
            }
        });
    }

    return {
        init: bindUIAction
    }
}

export default Menu();
