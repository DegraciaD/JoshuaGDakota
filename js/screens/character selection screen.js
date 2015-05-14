game.CharSelect = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            me.game.world.addChild(new me.Sprite(0, 0,me.loader.getImage('char_select')), -10);
          
            me.game.world.addChild( new (me.Renderable.extend ({
                        init: function(){
                            this.font = new me.Font("Lucida Handwriting", 46, "red");
                            this.updateWhenPaused = true;
                            this.alwaysUpdate = true;
                        },

                        draw: function(context){    
                            this.font.draw(context, "PRESS F1-F7 TO CHOOSE YOUR CHRACTER", 70, 10);
                        }

                    }))); 
                me.game.world.addChild(new me.Sprite (.100, 250, me.loader.getImage('mario')));
                me.game.world.addChild(new me.Sprite (131, 250, me.loader.getImage('peach')));
                me.game.world.addChild(new me.Sprite (274, 250, me.loader.getImage('toad')));
                me.game.world.addChild(new me.Sprite (448, 250, me.loader.getImage('baby mario')));
                me.game.world.addChild(new me.Sprite (615, 250, me.loader.getImage('yoshi')));
                me.game.world.addChild(new me.Sprite (769, 250, me.loader.getImage('luigi')));
                me.game.world.addChild(new me.Sprite (900, 250, me.loader.getImage('bowser')));
               
              

                me.input.bindKey(me.input.KEY.F1, "F1", true);
                me.input.bindKey(me.input.KEY.F2, "F2", true);
                me.input.bindKey(me.input.KEY.F3, "F3", true);
                me.input.bindKey(me.input.KEY.F4, "F4", true);
                me.input.bindKey(me.input.KEY.F5, "F5", true);
                me.input.bindKey(me.input.KEY.F5, "F6", true);
                me.input.bindKey(me.input.KEY.F5, "F7", true);

                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
                if (action === "F1") {
                    game.data.character = 1;
                    me.state.change(me.state.PLAY);
                }
                else if(action === "F2"){
                    game.data.character = 2;
                    me.state.change(me.state.PLAY);
                }
                else if(action === "F3"){
                    game.data.character = 3;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F4"){
                    game.data.character = 4;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F5"){
                    game.data.character = 5;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F6"){
                    game.data.character = 5;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F7"){
                    game.data.character = 7;
                    me.state.change(me.state.PLAY);
                }  
                });
           
            
            
            
	},
                
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.F1);
                me.input.unbindKey(me.input.KEY.F2);
                me.input.unbindKey(me.input.KEY.F3);
                me.input.unbindKey(me.input.KEY.F4);
                me.input.unbindKey(me.input.KEY.F5);
                me.input.unbindKey(me.input.KEY.F6);
                me.input.unbindKey(me.input.KEY.F7);
                me.event.unsubscribe(this.handler);
	}
});

