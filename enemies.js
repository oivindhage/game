function addEnemies(){
	gbox.addObject({
		group:"ghosts",
		tileset:"blinky",
		initialize:function() {
			toys.platformer.initialize(this,{
				frames:{
					still:{ speed:1, frames:[0] },
					walking:{ speed:4, frames:[0,1] },
					jumping:{ speed:1, frames:[0] },
					falling:{ speed:1, frames:[0] },
					die: { speed:1,frames:[0] }
				},
				x:550,
				y:320,
				side:0
				
			});
		},
		first:function() {
			if (gbox.objectIsVisible(this)) {
				// Counter
				this.counter=(this.counter+1)%10;

				toys.platformer.applyGravity(this,maze,"map"); // Apply gravity
				toys.platformer.auto.horizontalBounce(this,maze,"map"); // Bounces horizontally if hit the sideways walls
				if (this.touchedfloor) // If touching the floor...
					toys.platformer.auto.goomba(this,{moveWhileFalling:true,speed:2}); // goomba movement
				else // Else...
					this.accx=0; // Stay still (i.e. jump only vertically)
				toys.platformer.auto.dontFall(this,maze,"map"); // prevent from falling from current platform
				toys.platformer.verticalTileCollision(this,maze,"map"); // vertical tile collision (i.e. floor)
				toys.platformer.horizontalTileCollision(this,maze,"map"); // horizontal tile collision (i.e. walls)
				toys.platformer.handleAccellerations(this); // gravity/attrito
				toys.platformer.setFrame(this); // set the right animation frame
				var pl=gbox.getObject("player","hero");
				if (gbox.collides(this,pl,2)){
					pl.kill();
				}
			}
			
		},
		blit:function() {
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
			if (gbox.objectIsVisible(this)){
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x,dy:this.y,camera:this.camera,fliph:this.side,flipv:this.flipv});
			}
		}
	});
}