function Search() {
    function bindUIAction() {
        $('.js-searchBtn').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('is-active');
            $('.js-searchBar').toggleClass('is-open');
            $('.js-btnMobile-open').toggle();
            $('.js-btnMobile-close').toggle();
            $('.js-menuMobile').removeClass('is-open');
            $('.js-Header').removeClass('is-open');
            $('.js-main').removeClass('u-fixed');
            $('.js-footer').removeClass('u-fixed');
            $('.js-hamburger').removeClass('is-active');
        });

        var width = $(window).width();
        $(window).on('resize', function(){
            if($(this).width() != width){
                width = $(this).width();
                $('.js-searchBtn').removeClass('is-active');
                $('.js-searchBar').removeClass('is-open');
                $('.js-btnMobile-open').show();
                $('.js-btnMobile-close').hide();
            }
        });
    }

    return {
        init: bindUIAction
    }
}

export default Search();
