 //------------------------------- TABS WIDGET ------------------------------------------//

 $(function() {

    $( "#tabs" ).tabs();

    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
        function() {
            $( this ).addClass( "ui-state-hover" );
        },
        function() {
            $( this ).removeClass( "ui-state-hover" );
        }
    );


 //-------------------------------- INCLUDE PARTIALS ---------------------------------------//


    $('#header').load('includes/partials.html #hdr', function (){
          $(thisPage).removeClass('flat').addClass('point');       //  ACTIVE STATE
    });

    $('#social').load('includes/partials.html #social-links');


//  ------------------------------- NESTED TABS AJAX LOAD ---------------------------------//

     $('.static').on('click','a', function(){           // CONTENT NOT A SLIDER LOAD
         var that = $(this),
             loadDiv = that.data('sp-file'),
             changeDiv = that.data('sp-id');
         $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv,function(){
             $('.hood-content').fadeIn('slow');
         }));

     });

    $('#tour1').on('click', function(){
        var that = $(this),
            loadDiv = that.data('sp-file'),
            changeDiv = that.data('sp-id');
        $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv,function(){
            $('#property').orbit();                     // ORBITS SLIDER
        }));

    });

     $('#tour2').on('click', function(){
         var that = $(this),
             loadDiv = that.data('sp-file'),
             changeDiv = that.data('sp-id');
         $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv,function(){
             $('#community').orbit();                     // ORBITS SLIDER
         }));

     });

     $('#tour3').on('click', function(){
         var that = $(this),
             loadDiv = that.data('sp-file'),
             changeDiv = that.data('sp-id');
         $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv,function(){
             $('#homes').orbit();                     // ORBITS SLIDER
         }));

     });


     $('#event1').on('click', function(){
         var that = $(this),
             loadDiv = that.data('sp-file'),
             changeDiv = that.data('sp-id');
         $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv,function(){
             $('#wedding').orbit();                     // ORBITS SLIDER
         }));

     });



//--------------------------------- NAVIGATION MENU --------------------------------------//


         $('.bottom-tab li').on('click', function(){
             $('.bottom-tab li').removeClass('tab-active'),
             $(this).toggleClass('tab-active');
         });


 });

