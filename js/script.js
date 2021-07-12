

$(document).ready(function() {

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





    
    // this was just a test to see it jQuery is working
//     $('h1').click(function() {
//         $(this).css('background-color', "#ff0000")
//     });

});