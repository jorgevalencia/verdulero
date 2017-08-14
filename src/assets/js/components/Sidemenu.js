function Sidemenu() {
    function bindUIAction() {
        $('.Sidemenu-item.dropdown').on('click', function(event){
            $(this).toggleClass('open');
            $(this).find('.Sidemenu-submenu').slideToggle();
        });

        $('.Sidemenu-main').on('click', function(event){
            if ($(window).width() < 960) {
                $(this).toggleClass('open');
                $('.Sidemenu-container').slideToggle();
            }
        });

    }

    return {
        init: bindUIAction
    }
}

export default Sidemenu();
