

$(document).ready(function() {



    // for the sticky navigation 

    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            // this meaning the sticky nav apper OOpx before this the transition section
            offset: '60px;'
    });



    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })




    // scroll on buttons 
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);

    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

    });
    



    
    // this was just a test to see it jQuery is working
//     $('h1').click(function() {
//         $(this).css('background-color', "#ff0000")
//     });

});