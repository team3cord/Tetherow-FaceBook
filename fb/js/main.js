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
          $(thisPage).removeClass('flat').addClass('point');
    });
    $('#social').load('includes/partials.html #social-links');


//  ------------------------------- NESTED TABS AJAX LOAD ---------------------------------//


    $('.bottom-tab').on('click','a', function(){
        var that = $(this),
            loadDiv = that.data('sp-file'),
            changeDiv = that.data('sp-id');
        $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv));

    });


//--------------------------------- NAVIGATION MENU --------------------------------------//



 });

