( function( $ ) {
    'use strict';
    if ( $('.progress-counter').length > 0 ) {

        if ( $('.progress-counter .prog-radial').length > 0 ) {
            fill_circle_count();
        }
        if ( $('.progress-counter .progressbar').length > 0 ) {
            fill_bar_counter();
        }

        $(window).on('scroll', function () {
            if ( $('.progress-counter .prog-radial').length > 0 ) {
                fill_circle_count();
            }
            if ( $('.progress-counter .progressbar').length > 0 ) {
                fill_bar_counter();
            }
        });
    }

    function fill_circle_count() {
        $(' .prog-radial .countervalue').each(function(){
            if ($(this).hasClass('start')){
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                if(elementBottom > viewportTop && elementTop < viewportBottom){
                    $(this).removeClass('start');
                    $(this).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2800,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now) + '%');
                        }
                    });
                    $(this).parents('svg.prog-radial').find('circle.complete').removeAttr( 'style' );
                    var percent = $(this).parents('svg.prog-radial').data('countervalue');
                    var radius = $(this).parents('svg.prog-radial').find('circle.complete').attr('r');
                    var circumference = 2 * Math.PI * radius;
                    var strokeDashOffset = circumference - ((percent * circumference) / 100);
                    $(this).parents('svg.prog-radial').find('circle.complete').animate({'stroke-dashoffset': strokeDashOffset}, 2800);
                }
            }
        });
    }

    function fill_bar_counter() {
        $('.progress_outer').each(function() {
            if ($(this).find('span').hasClass('start')) {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).find('span').removeClass('start');
                    let progressWidth = $(this).find('.progress').attr('data-value');
                    $(this).find('.progress').css("width", progressWidth + "%");
                }
            }
        });
    }

    function check_if_in_view() {
        $(".progress_outer .progressbar .progress > span").each(function() {
            if ($(this).hasClass('start')){
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                if(elementBottom > viewportTop && elementTop < viewportBottom){
                    $(this).removeClass('start');
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now) + '%');
                        }
                    });
                    progress_fill();
                }
            }
        });

    }
    function progress_fill() {
        $(".progress_outer .progressbar .progress").each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if(elementBottom > viewportTop && elementTop < viewportBottom) {
                let bar_width = $(this).attr('data-value');
                $(this).css('width', bar_width + '%');
            }
        });
    }
    

}( jQuery ) );