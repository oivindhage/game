function swingSword(){
	gbox.addObject({
		id:"weapon",
		group:"weapon",
		tileset:"swing",
		frame:0, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								jumping:{ speed:1, frames:[0,0,1,1,1,1,1,1] },
							},
							x:tileXPos(21) + 6,
							y:tileYPos(22) + 6
						});
		},
		first:function() {
			this.counter=(this.counter+1)%10;
			if (gbox.objectIsVisible(this)){
				toys.platformer.setFrame(this);
			}
			if (this.counter==8){
				gbox.trashObject(this);
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
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x- gbox.getCamera().x,dy:this.y - gbox.getCamera().y,fliph:pl.fliph,flipv:this.flipv,alpha:1});
				}
		}
	 });
}