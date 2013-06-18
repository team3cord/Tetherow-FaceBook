<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="js/css/first/jquery-ui-1.10.3.custom.css" rel="stylesheet">
        <script src="js/vendor/jquery-1.9.1.min.js"></script>
        <script src="js/vendor/jquery-ui-1.10.3.custom.js"></script>  
        <script>
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
        </script>
         
        
        





    </head>
    <body>
        <div class="fb-menu"></div>
        <div class="fb-wrap">
            <div id="golf-pg" class="content-wrap">
                <div class="social">
                    <ul>
                        <li id="tweet"><a href="#"></a></li>
                        <li id="like"><a href="#"></a></li>
                        <li id="share"><a href="#"></a></li>
                        
                    </ul>
                </div>
        
        <nav>
            <a id="nv-t" href="#"><span id="none">TETHEROW</span></a>
            <a id="nv-l" href="http://localhost:8888/tetherow-fb-tabs/fb/live.php"><span>LIVE</span></a>
            <a id="nv-g" href="http://localhost:8888/tetherow-fb-tabs/fb/golf.php"><span>GOLF</span></a>
            <a class="test" id="nv-d" href="http://localhost:8888/tetherow-fb-tabs/fb/dine.php"><span>DINE</span></a>
            <a id="nv-e" href="http://localhost:8888/tetherow-fb-tabs/fb/events.php"><span>EVENTS</span></a>
            <a id="nv-s" href="http://localhost:8888/tetherow-fb-tabs/fb/stay.php"><span>STAY</span></a>
        </nav>
        <div id="tabs" class="tabbed-content">
            <ul class="top-tab">
                <li><a href="#tabs-1">GOLF One</a></li>
                <li><a href="#tabs-2">GOLF Two</a></li>
                <li><a href="#tabs-3">GOLF Three</a></li>
            </ul>
            <div id="tabs-1" class="white"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            <div id="tabs-2" class="white"><p>Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</p>
                <ul class="bottom-tab-four">
                    <li><a class="btm" href="#">tab1</a></li>
                    <li><a class="btm" href="#">tab2</a></li>
                    <li><a class="btm" href="#">tab3</a></li>
                    <li><a class="btm" href="#">tab4</a></li>
                </ul>
            </div>
            <div id="tabs-3" class="white"><p>Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</p></div>
        </div>


        <div class="real-link">
            <a href="#">VIEW REAL ESTATE</a>
        </div>

        <div class="agent"><span class="bold">CALL AN AGENT: </span><span>DEBBIE DEBBIE (541) 999-9999</span></div>
        
        <div class="learn"><a class="bold" href="#">Learn More at Tetherow.com ></a></div>

        </div> 





        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            
            
        </script>
    </body>
</html>
