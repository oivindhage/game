function addHero(){
	gbox.addObject({
		id:"hero",
		group:"player",
		tileset:"hero",
		killed:false, 
		
		initialize:function() { // The "initialize" method is called the first frame the object spawns and never more.
			toys.platformer.initialize(this, {
					frames:{
						still:{ speed:1, frames:[0] },
						walking:{ speed:2, frames:[1,2,3] },
						jumping:{ speed:1, frames:[4] },
						falling:{ speed:1, frames:[5] },
						die:{speed:1,frames:[6] }
					},
					responsive:14,
					accx:0,
					fliph:toys.FACE_LEFT,
					weapon:"none"

			});
		},
		
		first:function() { // Usually everyting involving interacton is into the "first" method.
			this.counter=(this.counter+1)%10; // This line must be used in every object that uses animation. Is needed for getting the right frame (the "frames" block few lines up)
			
			if (!this.killed&&!maingame.gameIsHold()&&!maingame.bullettimer) {
				var olddata=help.createModel(this,["x","y","accx","accy","xpushing","ypushing","facing"]); 
		  		this.counter=(this.counter+1)%10;
				if (!this.killed) {
					
					toys.platformer.horizontalKeys(this,{left:"left",right:"right"}); // Moves horizontally
					toys.platformer.jumpKeys(this,{jump:"a",audiojump:"jump"}); // handle jumping
					toys.platformer.attackKeys(this, {attack:"b"});
					toys.platformer.setSide(this); 
					toys.platformer.setFrame(this); 
					toys.platformer.applyGravity(this,maze,"map"); 
					toys.platformer.handleAccellerations(this); 
					toys.platformer.verticalTileCollision(this,maze,"map"); // vertical tile collision (i.e. floor)
					toys.platformer.horizontalTileCollision(this,maze,"map"); // horizontal tile collision (i.e. walls)
					this.checkDangerousFloorOrCeiling(maze, "map");
					if (this.accx>0){
						this.fliph=0;
					}else if(this.accx<0){
						this.fliph=1;
					}
					
					followCamera(this, {w:maze.w,h:maze.h});
				}
				toys.platformer.setFrame(this); // setFrame sets the right frame checking the facing and the defined animations in "initialize"
			}
		},

		checkDangerousFloorOrCeiling:function(map,tilemap) {
			var bottom1=help.getTileInMap(this.x+(this.w/2),this.y+this.h,map,0,tilemap);
			var top=help.getTileInMap(this.x+(this.w/2),this.y,map,0,tilemap);
			
			if (map.tileIsDangerousCeil(top)) {
				this.kill();
			}
			if (map.tileIsDangerousFloor(bottom1)) {
				this.kill();
			}
		},
		// The blit phase is the very last method called every frame. It should only draw the object on the bufferContext (i.e. the screen)
		blit:function() {
			if (!this.killed) 
				gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.x,dy:this.y,fliph:this.fliph,flipv:this.flipv,camera:this.camera,alpha:1});
		},
		
		kill:function() {
			if (!this.killed) { // If we're alive...
				this.killed=true; // First of all, hero is killed. As you've seen, that makes hero invisible and on hold.
				gbox.hitAudio("die"); // Play the die sound
				maingame.hud.addValue("lives","value",-1); // Then decrease the lives count.
				maingame.playerDied({wait:130}); // Telling the main game cycle that the player died. The arguments sets a short delay after the last fadeout, for making visible the dead animation
				this.fliph=0;
				toys.generate.sparks.simple(this,"sparks",null,{tileset:this.tileset,frames:{speed:12,frames:[5,6,7,8,9,10,10,10,10,10]}});
				// And here comes a common trick: the player is still where was killed and a "spark" (i.e. unuseful animation) starts in the same place.
				// This method allows many nice tricks, since avoid destruction/recreation of the player object, allow a respawn the player in the place it was killed very easily (switching
				// the killed attribute. The "spark.simple" method spawns a spark in the same position of the object in the first argument.
			}
		}
	});
	
}