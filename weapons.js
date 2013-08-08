function swingSword(){
	gbox.addObject({
		id:"weapon",
		group:"weapon",
		tileset:"swing",
		frame:0, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[0,0,1,1,1,1,1,1] },
								walking:{ speed:1, frames:[0,0,1,1,1,1,1,1] },
								jumping:{ speed:1, frames:[0,0,1,1,1,1,1,1] },
								falling:{ speed:1, frames:[0,0,1,1,1,1,1,1] },
								die: { speed:1, frames:[0,0,1,1,1,1,1,1] },
							},
							x:tileXPos(21) + 6,
							y:tileYPos(22) + 6,
							xcam:tileXPos(21) + 6,
							ycam:tileYPos(22) + 6,
							jumpaccy:10
						});
		},
		first:function() {
			this.counter=(this.counter+1)%10;
			if (gbox.objectIsVisible(this)){
				toys.platformer.setFrame(this); // set the right animation frame
			}
			if (this.counter==8){
				gbox.trashObject(this); // ...and self-destroy.
			}
		},

		blit:function() {
			var pl=gbox.getObject("player","hero");
			var diff = -10;
			if (pl.fliph == 0){
				diff = 10;
			}
			this.y = pl.y;
			this.x = pl.x + diff;
			
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.xcam,dy:this.ycam,fliph:pl.fliph,flipv:this.flipv,alpha:1});
				}
		}
	 });
}