game.mainmenu = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0,me.loader.getImage('main menu')), -10);
                
                game.data.option1 = (new(me.Renderable.extend({
                   init: function(){
                       this._super(me.Renderable, 'init', [270, 240, 300, 50]); 
                       this.font = new me.Font("Lucida Handwriting", 46, "red");
                       me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
                   },
                   
                   draw: function(renderer){
                    this.font.draw(renderer.getContext(), "START A NEW GAME", this.pos.x, this.pos.y);
                    },
                    
                    update: function(dt){
                         return true;
                    },
                    
                    newGame: function(){
                       me.input.releasePointerEvent('pointerdown', this);
                       me.input.releasePointerEvent('pointerdown', game.data.option2);
                       me.state.change(me.state.PLAY);
                    }
                    
                 })));
                 
                 me.game.world.addChild(game.data.option1);
                 
                   game.data.option2 = (new(me.Renderable.extend({
                   init: function(){
                       this._super(me.Renderable, 'init', [380, 340, 250, 50]); 
                       this.font = new me.Font("Lucida Handwriting", 46, "orange");
                       me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
                   },
                   
                   draw: function(renderer){
                    this.font.draw(renderer.getContext(), "CONTINUE YOUR GAME", this.pos.x, this.pos.y);
                    },
                    
                    update: function(dt){
                         return true;
                    },
                    
                    newGame: function(){
                           
                       me.input.releasePointerEvent('pointerdown', game.data.option1);
                       me.input.releasePointerEvent('pointerdown', this);
                       me.state.change(me.state.LOAD);
                    }
                    
               })));
               
                me.game.world.addChild(game.data.option2);
                 
        },
                     
       
           
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
           
	}
        
    });
    
    
    