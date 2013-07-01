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
});
 //-------------------------------- INCLUDE PARTIALS ---------------------------------------//
$(function(){
    $('#header').load('includes/header.html #hdr');
    console.log(this);

});
//  ------------------------------- NESTED TABS AJAX LOAD ---------------------------------//
$(function(){
    $('.bottom-tab').on('click','a', function(){
        var that = $(this),
            loadDiv = that.data('sp-file'),
            changeDiv = that.data('sp-id');
        $('div#' + changeDiv).replaceWith($('#' + changeDiv).load('includes/load.html #' + loadDiv));

    });
});