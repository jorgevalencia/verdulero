function Language() {
    function bindUIAction() {
        $('.js-langTitle').on('click', function(event) {
            event.preventDefault();
            $(this).toggleClass('is-active');
            $('.js-langContent').toggleClass('is-open');
        });
    }

    return {
        init: bindUIAction
    }
}

export default Language();
