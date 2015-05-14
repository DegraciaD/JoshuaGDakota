game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
 
       // reset the score
        game.data.score = 0;
                //load the level you want
             
                
  
                
               
                
                //add the following imput and set them to whatever key you are going to press
              ;

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            //stops the current track
            me.audio.stopTrack();
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},
       
});