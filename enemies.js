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
					attacked: { speed:1,frames:[2,3] }
				},
				x:550,
				y:320,
				xcam:550,
				ycam:320,
				side:0,
				life:2,
				attackedTimer:0
			});
		},
		first:function() {
			if (gbox.objectIsVisible(this)) {
				this.counter=(this.counter+1)%10;
				toys.platformer.applyGravity(this,maze,"map");
				toys.platformer.auto.horizontalBounce(this,maze,"map"); 
				if (this.touchedfloor){
					toys.platformer.auto.goomba(this,{moveWhileFalling:true,speed:2});
				}
				else {
					this.accx=0;
				}
				toys.platformer.auto.dontFall(this,maze,"map");
				toys.platformer.verticalTileCollision(this,maze,"map");
				toys.platformer.horizontalTileCollision(this,maze,"map"); 
				toys.platformer.handleAccellerations(this);
				toys.platformer.setFrame(this);
				var pl=gbox.getObject("player","hero");
				if (gbox.collides(this,pl,2)){
					pl.kill();
				}
				if (this.attackedTimer > 0){
					this.frames.walking.frames = [2,3];
					--this.attackedTimer;
				}else{
					this.frames.walking.frames = [0,1];
					var weapon = gbox.getObject("weapon", "swordswing");
					if (weapon != undefined && gbox.collides(this, weapon, 2)){
						--this.life;
						this.attackedTimer = 30;
						if (this.life<=0){
							gbox.hitAudio("bonus");
							gbox.trashObject(this);
						}
					}
					var shot = gbox.getObject("weapon", "shot");
					if (shot != undefined && gbox.collides(this, shot, 2)){
						--this.life;
						this.attackedTimer = 30;
						if (this.life<=0){
							gbox.hitAudio("bonus");
							gbox.trashObject(this);
						}
					}
				}
			}
		},
		blit:function() {
			if (gbox.objectIsVisible(this)){
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x,dy:this.y,camera:this.camera,fliph:this.side,flipv:this.flipv});
			}
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
		}
	});
}