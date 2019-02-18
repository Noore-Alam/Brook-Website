           /*======================================
                              Show & Hide White Navigation 
                              ===================================*/


           $(function() {
               $(window).scroll(function() {


                   if ($(window).scrollTop() > 50) {

                       // Show white nav
                       $("header").addClass("bg_menu");
                   } else {

                       // Hide white nav
                       $("header").removeClass("bg_menu");

                   }
               });
           });

           $(function() {
               new WOW().init();
           });

           $(window).on('load', function() {

               // Initialize Isotope
               $("#isotope-container").isotope({});

               // filter items on button click
               $(".isotope-filters").on('click', 'button', function() {

                   // get filter value
                   var filterValue = $(this).attr('data-filter');

                   // filter portfolio
                   $(".isotope-container").isotope({
                       filter: filterValue
                   });

                   // active button
                   $(".isotope-filters").find('.active').removeClass('active');
                   $(this).addClass('active');
               });
           });
           $(function() {
               $(".portfolio_wrapper").magnificPopup({
                   delegate: 'a',
                   type: 'image',
                   gallery: {
                       enabled: true
                   }
               });
           });