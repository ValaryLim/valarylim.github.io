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

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $('.skillsSection').offset().top;
    $(window).scroll(function() {
        // Animate as soon as charts get into view
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#35477D',
                trackColor: '#fff',
                lineWidth: 15,
                size: 152,
                scaleColor: false,
                lineCap: 'round',
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
});