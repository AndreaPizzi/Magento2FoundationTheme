define([
    "jquery",
    "foundation"
  ], 
  function($) {
    "use strict";

      $(document).foundation();
      
      $(document).ready(function($){
             
          console.log("DID IT! jQuery log complete 222.");
      });

      $(window).scroll(function() {

        var scrollTop     = $(window).scrollTop();

        /* parallax - Check if banner exist */
        if ( $( ".banner_parallax " ).length ) {

        var backImgHeight = $( ".banner_parallax img" ).height();
        //  console.log(backImgHeight);
        
        var elementOffset = $('.banner_parallax').offset().top,
        distance      = (elementOffset - scrollTop),
        perc      =(elementOffset / (scrollTop-distance))*100;
        if (perc > -1082) {
          var perc2 = '-'+perc+'px';
        $('.banner_parallax img').css('margin-top',perc2)
       // console.log('scrolltop: '+scrollTop);
        }
      }
      /* Desktop header */
      if (scrollTop > 235) {
        $('.nav-sections').addClass('fixed');
      }else{
        $('.nav-sections').removeClass('fixed');
      }


      });
      return;
  });