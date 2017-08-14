function Featured() {

    function bindUIAction() {

        var maxHeight = 0;

        var w = 0;
        w = $( window ).width();

        var breakpoint = 1024;

        function isDesktop() {
            return $(window).width() > breakpoint;
        }

        function isMobile() {
            return $(window).width() < breakpoint;
        }

        function featuredBehavior(){
            $(".Featured-item").hover(
                function() {
                    if (isDesktop()) {
                        $(".Featured-item").addClass("Featured-item--notHover");
                        $(this).addClass("Featured-item--hover");
                    }
                },
                function() {
                    if (isDesktop()) {
                        $(".Featured-item")
                            .removeClass(
                                "Featured-item--hover Featured-item--notHover"
                            );
                    }
                }
            );

            $('.Featured-itemWrapper').on('click', function(event){
                if (isMobile()) {
                    $(this).find('.Featured-itemSlide').toggleClass('visible');
                    $(this).find('.Featured-itemMoreinfo .arrow').toggleClass('rotate');
                    $(this).find('.text').toggleClass('visible');
                }
            });
        }

        function hideSlide() {
            $('.Featured-itemMoreinfo').find('.arrow').removeClass('rotate');
            $('.Featured-itemSlide').removeClass('visible');
        }

        featuredBehavior();

        $(window).resize(function(){

            if( w != $( window ).width() ){
                hideSlide();
                featuredBehavior();
                calcTitleHeight();
                w = $( window ).width();
            }
        });

        function calcTitleHeight(){
            if (isDesktop()) {
                $('.Featured-itemTitle').height("auto");
                $('.Featured-itemTitle').each(function() {
                    if(maxHeight < $(this).outerHeight()) {
                        maxHeight = $(this).outerHeight();
                    }
                });
                $('.Featured-itemTitle').height(maxHeight);
            } else {
                $('.Featured-itemTitle').height("auto");
            }
        }

        calcTitleHeight();

        if(document.body.clientWidth >= breakpoint) {
            $('video').attr('autoplay', true);
        }

        $(window).resize(function() {
            if(document.body.clientWidth >= breakpoint) {
                $('video').attr('autoplay', true);
            }
        });

    }

    return {
        init: bindUIAction
    }
}

export default Featured();
