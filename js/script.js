

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


    // navigation scroll
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')

    
    $(function(){
        // starting with # 
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            //   if content exists
              if (target.length) {
                event.preventDefault();
                // move to the top of this section 
                $('html, body').animate({
                  scrollTop: target.offset().top
                //   in 500=0.5s, 1000ms=1s 
                }, 500);
                return false;
              } 
            }    
        }); 
     });



     
     //  animation on scroll
     $('.js--wp-1').waypoint(function(direction) {
         $('.js--wp-1').addClass('animate__fadeIn');
        }, {
            offset: '50%'
        });

     $('.js--wp-2').waypoint(function(direction) {
         $('.js--wp-2').addClass('animate__fadeInUp');
        }, {
            offset: '50%'
        });

     $('.js--wp-3').waypoint(function(direction) {
         $('.js--wp-3').addClass('animate__fadeIn');
        }, {
            offset: '50%'
        });

     $('.js--wp-4').waypoint(function(direction) {
         $('.js--wp-4').addClass('animate__pulse');
        }, {
            offset: '50%'
        });
        
        
        
        // this was just a test to see it jQuery is working
    //     $('h1').click(function() {
    //         $(this).css('background-color', "#ff0000")
    //     });
    

});