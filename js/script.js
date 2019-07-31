$(document).ready(function(){
    // Execute when document is ready
    $('#slides').superslides({
        animation: 'fade',
        // Change image every 10 seconds
        play: 10000,
        pagination: false
    })

    var typed = new Typed('.typed', {
        strings: ["Business Analyst", "Student"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })
}); 