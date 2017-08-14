function Slider() {
    function bindUIAction() {
        var activeSlide = 2;

        setInterval(function() {
            function updatePosition(id, data) {
                var elems = document.querySelectorAll(id);
                [].forEach.call(elems, function(el) {
                    el.classList.remove('active');
                });

                var elements = document.querySelectorAll(id);
                Array.prototype.forEach.call(elements, function(el, i){
                    if (el.getAttribute(data) == activeSlide) {
                        el.classList.add('active');
                    }
                });
            }

            updatePosition('.Slider-slidesItem', 'data-slide');
            updatePosition('.Slider-thumbnailsItem', 'data-thumb');

            if (activeSlide > 2) {
                activeSlide = 1;
            } else {
                activeSlide++;
            }
        }, 5000);

        $('.Slider-thumbnailsItem').hover( function() {

            var elems = document.querySelectorAll('.Slider-thumbnailsItem');
            [].forEach.call(elems, function(el) {
                el.classList.remove('active');
            });

            $(this).addClass('active');
            activeSlide = $(this).attr('data-thumb');

            var elems = document.querySelectorAll('.Slider-slidesItem');
            [].forEach.call(elems, function(el) {
                el.classList.remove('active');
            });

            var elements = document.querySelectorAll('.Slider-slidesItem');
            Array.prototype.forEach.call(elements, function(el, i){
                if (el.getAttribute('data-slide') == activeSlide) {
                    el.classList.add('active');
                }
            });
        });
    }

    return {
        init: bindUIAction
    }
}

export default Slider();
