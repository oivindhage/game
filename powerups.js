function addPowerups(){
	gbox.addObject({
		id:"sword",
		group:"bonus",
		tileset:"bonus",
		frame:6, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[6] },
								walking:{ speed:4, frames:[6] },
								jumping:{ speed:1, frames:[6] },
								falling:{ speed:1, frames:[6] },
								die: { speed:1,frames:[6] }
							},
							x:tileXPos(21) + 6,
							y:tileYPos(22) + 6,
							xcam:tileXPos(21) + 6,
							ycam:tileYPos(22) + 6,
							jumpaccy:10,
							side:1
						});
		},
		first:function() {
			if (gbox.objectIsVisible(this)){
				toys.platformer.applyGravity(this,maze,"map"); // Apply gravity
				toys.platformer.handleAccellerations(this); // gravity/attrito
				toys.platformer.setFrame(this); // set the right animation frame
				var hero=gbox.getObject("player","hero"); // ... checking where hero is.
				if (gbox.collides(this,hero)) { // If is colliding with the bonus...
					gbox.hitAudio("bonus"); // Play the bonus sound...
					hero.weapon = "sword";
					maingame.hud.pushValue("bonus","value",this.frame); // Add the bonus image to the bonus queue (the pile on the bottom of the screen)
					toys.generate.sparks.popupText(this,"sparks",null,{font:"small",jump:5,text:"Swing sword with x",keep:150}); // Our nice "text spark" with the earned score...
					gbox.trashObject(this); // ...and self-destroy.
				} 
			}
		},

		blit:function() {
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.xcam,dy:this.ycam,fliph:this.side,flipv:this.flipv,alpha:1});
				}
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
		}
	 });

gbox.addObject({
		id:"bluekey",
		group:"bonus",
		tileset:"bonus",
		frame:4, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[4] },
								walking:{ speed:4, frames:[4] },
								jumping:{ speed:1, frames:[4] },
								falling:{ speed:1, frames:[4] },
								die: { speed:1,frames:[4] }
							},
							x:tileXPos(134),
							y:tileYPos(58),
							xcam:tileXPos(134),
							ycam:tileYPos(58),
							jumpaccy:0,
							side:1
						});
		},
		first:function() {
			if (gbox.objectIsVisible(this)){
				toys.platformer.applyGravity(this,maze,"map");
				toys.platformer.handleAccellerations(this);
				toys.platformer.setFrame(this); 
				var hero=gbox.getObject("player","hero");
				if (gbox.collides(this,hero)) { 
					gbox.hitAudio("bonus"); 
					maingame.hud.pushValue("bonus","value",this.frame);
					toys.generate.sparks.popupText(this,"sparks",null,{font:"small",jump:5,text:"open blue doors",keep:20}); 
					gbox.trashObject(this); 
					hero.jumpaccy = 8;
				} 
			}
		},

		blit:function() {
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.xcam,dy:this.ycam,fliph:this.side,flipv:this.flipv,alpha:1});
				}
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
		}
	 });


gbox.addObject({
		id:"shoe",
		group:"bonus",
		tileset:"bonus",
		frame:3, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[2] },
								walking:{ speed:4, frames:[2] },
								jumping:{ speed:1, frames:[2] },
								falling:{ speed:1, frames:[2] },
								die: { speed:1,frames:[2] }
							},
							x:tileXPos(124),
							y:tileYPos(36),
							xcam:tileXPos(124),
							ycam:tileYPos(36),
							jumpaccy:0,
							side:1
						});
		},
		first:function() {
			if (gbox.objectIsVisible(this)){
				toys.platformer.applyGravity(this,maze,"map");
				toys.platformer.handleAccellerations(this);
				toys.platformer.setFrame(this);
				var hero=gbox.getObject("player","hero");
				if (gbox.collides(this,hero)) {
					gbox.hitAudio("bonus");
					maingame.hud.pushValue("bonus","value",this.frame);
					toys.generate.sparks.popupText(this,"sparks",null,{font:"small",jump:5,text:"Higher jumps",keep:20});
					gbox.trashObject(this);
					hero.jumpaccy = 8;
				} 
			}
		},

		blit:function() {
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.xcam,dy:this.ycam,fliph:this.side,flipv:this.flipv,alpha:1});
				}
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
		}
	 });

	gbox.addObject({
		id:"gun",
		group:"bonus",
		tileset:"bonus",
		frame:1, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[1] },
								walking:{ speed:4, frames:[1] },
								jumping:{ speed:1, frames:[1] },
								falling:{ speed:1, frames:[1] },
								die: { speed:1,frames:[1] }
							},
							x:tileXPos(8),
							y:tileYPos(10),
							xcam:tileXPos(8),
							ycam:tileYPos(10),
							jumpaccy:10,
							side:1
						});
		},
		first:function() {
			if (gbox.objectIsVisible(this)){


				toys.platformer.applyGravity(this,maze,"map"); // Apply gravity
				toys.platformer.handleAccellerations(this); // gravity/attrito
				toys.platformer.setFrame(this); // set the right animation frame
				var hero=gbox.getObject("player","hero"); // ... checking where hero is.
				if (gbox.collides(this,hero)) { // If is colliding with the bonus...
					gbox.hitAudio("bonus"); // Play the bonus sound...
					hero.weapon = "gun";
					maingame.hud.pushValue("bonus","value",this.frame); // Add the bonus image to the bonus queue (the pile on the bottom of the screen)
					toys.generate.sparks.popupText(this,"sparks",null,{font:"small",jump:5,text:"Shoot with x",keep:150}); // Our nice "text spark" with the earned score...
					gbox.trashObject(this); // ...and self-destroy.
				} 
			}
		},

		blit:function() {
			if (gbox.objectIsVisible(this)){
					gbox.blitTile(gbox.getBufferContext(),{tileset:this.tileset,tile:this.frame,dx:this.xcam,dy:this.ycam,fliph:this.side,flipv:this.flipv,alpha:1});
				}
			this.xcam = this.x - gbox.getCamera().x;
			this.ycam = this.y - gbox.getCamera().y;
		}
	 });
}