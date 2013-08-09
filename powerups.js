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
								falling:{ speed:1, frames:[6] },
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
			handleBonusObject(this, "sword");
		},
		blit:function() {
			blitBonusObject(this);
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
								falling:{ speed:1, frames:[4] },
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
			handleBonusObject(this, "bluekey");
		},
		blit:function() {
			blitBonusObject(this);
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
								falling:{ speed:1, frames:[2] },
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
			handleBonusObject(this, "shoe");
		},
		blit:function() {
			blitBonusObject(this);
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
								falling:{ speed:1, frames:[1] },
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
			handleBonusObject(this, "gun");
		},
		blit:function() {
			blitBonusObject(this);
		}
	 });
}

function handleBonusObject(theBonusObject, theBonusObjectName){
	if (gbox.objectIsVisible(theBonusObject)){
		toys.platformer.applyGravity(theBonusObject,maze,"map"); 
		toys.platformer.handleAccellerations(theBonusObject); 
		toys.platformer.setFrame(theBonusObject); 
		var hero=gbox.getObject("player","hero"); 
		if (gbox.collides(theBonusObject,hero)) { 
			gbox.hitAudio("bonus");
			maingame.hud.pushValue("bonus","value",theBonusObject.frame); 
			if (theBonusObjectName == "gun"){
				toys.generate.sparks.popupText(theBonusObject,"sparks",null,{font:"small",jump:5,text:"Shoot with x",keep:150});
				hero.weapon = "gun";
			}else if (theBonusObjectName == "shoe"){
				toys.generate.sparks.popupText(theBonusObject,"sparks",null,{font:"small",jump:5,text:"Higher jumps",keep:20});
				hero.jumpaccy = 8;
			}else if(theBonusObjectName == "bluekey"){
				toys.generate.sparks.popupText(theBonusObject,"sparks",null,{font:"small",jump:5,text:"Open blue doors",keep:20}); 
			}else if(theBonusObjectName == "sword"){
				hero.weapon = "sword";
				toys.generate.sparks.popupText(theBonusObject,"sparks",null,{font:"small",jump:5,text:"Swing sword with x",keep:150});
			}
			gbox.trashObject(theBonusObject);
		} 
	}
}

function blitBonusObject(theBonusObject){
	if (gbox.objectIsVisible(theBonusObject)){
			gbox.blitTile(gbox.getBufferContext(),{tileset:theBonusObject.tileset,tile:theBonusObject.frame,dx:theBonusObject.xcam,dy:theBonusObject.ycam,fliph:theBonusObject.side,flipv:theBonusObject.flipv,alpha:1});
	}		
	theBonusObject.xcam = theBonusObject.x - gbox.getCamera().x;
	theBonusObject.ycam = theBonusObject.y - gbox.getCamera().y;
}