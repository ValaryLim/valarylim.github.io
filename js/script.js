$(document).ready(function(){
    // Execute when document is ready
    $('#slides').superslides({
        animation: 'fade',
        // Change image every 10 seconds
        play: 10000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ["Business Analyst", "Student"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('[data-fancybox]').fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $('#filters a').click(function() {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $('#navigation li a').click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;
        $('html, body').animate({
            scrollTop: targetPosition - 50
        }, 'slow');
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        const body = $('body');
        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + "px");
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }

    $('.skillbar').skillBars({
        // number start
        from: 0,       
      
        // number end 
        to: false,      
      
        // animation speed
        speed: 1000,   
      
        // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
        interval: 100,    
      
        // the number of decimal places to show
        decimals: 0,      
      
        // callback method for every time the element is updated,
        onUpdate: null,   
      
        // callback method for when the element finishes updating
        onComplete: null,   
      
        // CSS classes
        classes:{
          skillBarBar : '.skillbar-bar',
          skillBarPercent : '.skill-bar-percent',
        }
    });
});