$(document).ready(function(){
    // Execute when document is ready
    var typed = new Typed('.typed', {
        strings: ["Business Analyst.", "Student."],
        typeSpeed: 125,
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
    };

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {
        if (window.pageYOffset > (skillsTopOffset - $(window).height() + 200)) {
            $('.skillbar').skillBars({
                // number start
                from: 0,       
              
                // number end 
                to: false,      
              
                // animation speed
                speed: 800,   
              
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
        }
    });
});