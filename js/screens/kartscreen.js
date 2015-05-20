game.Kartscreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
            me.game.world.addChild(new me.Sprite(0, 0,me.loader.getImage('kartscreen')), -10);
            
            document.getElementById("input").style.visibility = "visible";
            document.getElementById("input").style.visibility = "visible";
            document.getElementById("input").style.visibility = "visible";
            document.getElementById("input").style.visibility = "visible";
            document.getElementById("input").style.visibility = "visible";
          
            me.game.world.addChild( new (me.Renderable.extend ({
                        init: function(){
                            this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                            this.font = new me.Font("Lucida Handwriting", 30, "white");
                           
                        },

                        draw: function(renderer){    
                            this.font.draw(renderer.getContext(),"PRESS F1-F7 TO CHOOSE YOUR KART", 10, 10);
                        }

                    }))); 
                me.game.world.addChild(new me.Sprite (1, 250, me.loader.getImage('yoshi kart')));
                me.game.world.addChild(new me.Sprite (147, 250, me.loader.getImage('bowser kart')));
                me.game.world.addChild(new me.Sprite (268, 250, me.loader.getImage('peach kart')));
                me.game.world.addChild(new me.Sprite (392, 250, me.loader.getImage('mario kart')));
                me.game.world.addChild(new me.Sprite (582, 250, me.loader.getImage('baby mario kart')));
                me.game.world.addChild(new me.Sprite (726, 250, me.loader.getImage('toad kart')));
                me.game.world.addChild(new me.Sprite (885, 250, me.loader.getImage('luigi kart')));
               
              

                me.input.bindKey(me.input.KEY.F1, "F1", true);
                me.input.bindKey(me.input.KEY.F2, "F2", true);
                me.input.bindKey(me.input.KEY.F3, "F3", true);
                me.input.bindKey(me.input.KEY.F4, "F4", true);
                me.input.bindKey(me.input.KEY.F5, "F5", true);
                me.input.bindKey(me.input.KEY.F6, "F6", true);
                me.input.bindKey(me.input.KEY.F7, "F7", true);

                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
                if (action === "F1") {
                    game.data.kart = 1;
                    me.state.change(me.state.PLAY);
                }
                else if(action === "F2"){
                    game.data.kart = 2;
                    me.state.change(me.state.PLAY);
                }
                else if(action === "F3"){
                    game.data.kart = 3;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F4"){
                    game.data.kart = 4;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F5"){
                    game.data.kart = 5;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F6"){
                    game.data.kart = 5;
                    me.state.change(me.state.PLAY);
                }  
                else if(action === "F7"){
                    game.data.kart = 7;
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
                
                 document.getElementById("input").style.visibility = "hidden";
                
                    
	}
});



