<!DOCTYPE HTML>
<?php
require_once( "php/controller/create-db.php");
?>
<html>
    <head>
        <title>Mario Kart</title>
        <link rel="stylesheet" type="text/css" media="screen" href="index.css">
        <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <link rel="apple-touch-icon" href="icons/touch-icon-iphone-60x60.png">
        <link rel="apple-touch-icon" sizes="76x76" href="icons/touch-icon-ipad-76x76.png">
        <link rel="apple-touch-icon" sizes="120x120" href="icons/touch-icon-iphone-retina-120x120.png">
        <link rel="apple-touch-icon" sizes="152x152" href="icons/touch-icon-ipad-retina-152x152.png">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <head>
    <body>
        <!-- Canvas placeholder -->
        
        <div id="screen"></div>

       
        <form id="input" method="post">
            
                
            
            <button type='button' id ='mainmenu'>Main Menu</button>
            <button type='button' id ='player1'>Player 1</button>
            <button type='button' id ='player2'>Player 2</button>
            <button type='button' id ='player3'>Player 3</button>
            <button type='button' id ='player4'>Player 4</button>
        
               <!-- melonJS Library -->
        <!-- build:js js/app.min.js -->
        <script type="text/javascript" src="lib/melonJS-1.1.0-min.js"></script>

        <!-- Plugin(s) -->
        <script type="text/javascript" src="lib/plugins/debugPanel.js"></script>

        <!-- Game Scripts -->

        <script type="text/javascript" src="js/game.js"></script>
        <script type="text/javascript" src="js/resources.js"></script>
	<script type="text/javascript" src="js/HUD.js"></script>
        <script type="text/javascript" src="js/entities.js"></script>

		<script type="text/javascript" src="js/screens/main menu.js"></script>
		<script type="text/javascript" src="js/screens/play.js"></script>
                <script type="text/javascript" src="js/screens/loadscreen.js"></script>
                <script type="text/javascript" src="js/screens/character selection screen.js"></script>
                <script type="text/javascript" src="js/screens/kartscreen.js"></script>
              
		<!-- /build -->
                 <!-- Bootstrap & Mobile optimization tricks -->
        <script type="text/javascript">
                    window.onReady(function onReady() {
                    game.onload();
                            // Mobile browser hacks
                            if (me.device.isMobile && !navigator.isCocoonJS) {
                    // Prevent the webview from moving on a swipe
                    window.document.addEventListener("touchmove", function (e) {
                    e.preventDefault();
                            window.scroll(0, 0);
                            return false;
                    }, false);
                            // Scroll away mobile GUI
                                    (function () {
                                    window.scrollTo(0, 1);
                                            me.video.onresize(null);
                                    }).defer();
                                    me.event.subscribe(me.event.WINDOW_ONRESIZE, function (e) {
                                    window.scrollTo(0, 1);
                                    });
                            }
                            });        </script>

        <script>
            
                $("#mainmenu").bind("click", function(){
                    me.state.change(me.state.MENU);
                    });
                    
                     $("#player 1").bind("click", function(){
                    me.state.change(me.state.PLAY);
                    });
                    
                     $("#player 2").bind("click", function(){
                    me.state.change(me.state.PLAY);
                    });
                    
                     $("#player 3").bind("click", function(){
                    me.state.change(me.state.PLAY);
                    });
                    
                     $("#player 4").bind("click", function(){
                    me.state.change(me.state.PLAY);
                    });
                    
                    
                   
                    
        </script>
    </body>
</html>


