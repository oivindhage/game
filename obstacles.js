function addObstacles(){
	gbox.addObject({
		id:"bluedoor",
		group:"obstacles",
		tileset:"obstacles",
		frame:1, 
		initialize:function() {
			toys.platformer.initialize(this,{
							frames:{
								still:{ speed:1, frames:[1] },
								falling:{ speed:1, frames:[1] },
							},
							x:tileXPos(22),
							y:tileYPos(13),
							xcam:tileXPos(22),
							ycam:tileYPos(13),
                            
                            // x:tileXPos(20),
							// y:tileYPos(21),
							// xcam:tileXPos(20),
							// ycam:tileYPos(21),
                            
							jumpaccy:0,
							side:1
						});
		},
		first:function() {
			handleObstacleObject(this, "bluedoor");
		},
		blit:function() {
			blitObstacleObject(this);
		}
    });	
}

function handleObstacleObject(theObstacleObject, theObstacleObjectName){
	if (gbox.objectIsVisible(theObstacleObject)){
		toys.platformer.applyGravity(theObstacleObject,maze,"map"); 
		toys.platformer.handleAccellerations(theObstacleObject); 
		toys.platformer.setFrame(theObstacleObject); 
		var hero=gbox.getObject("player","hero"); 
		if (gbox.collides(theObstacleObject,hero)) { 
//			gbox.hitAudio("bonus");
//			maingame.hud.pushValue("bonus","value",theBonusObject.frame);
//			if (theBonusObjectName == "bluedoor" && hero.hasItem("bluekey")){
//                gbox.trashObject(theObstacleObject);
//            }
            key_ix = maingame.hud.w.bonus.value.indexOf(4);
            if (key_ix != -1) {
                maingame.hud.w.bonus.value.splice(key_ix, 1);
                maingame.hud.redraw();
                gbox.trashObject(theObstacleObject);
            } else {
                hero.x = tileXPos(23);
            }
		}
	}
}

function blitObstacleObject(theObstacleObject){
	if (gbox.objectIsVisible(theObstacleObject)){
			gbox.blitTile(gbox.getBufferContext(),{
                tileset:theObstacleObject.tileset,
                tile:theObstacleObject.frame,
                dx:theObstacleObject.xcam,
                dy:theObstacleObject.ycam,
                fliph:theObstacleObject.side,
                flipv:theObstacleObject.flipv,
                alpha:1
            });
	}		
	theObstacleObject.xcam = theObstacleObject.x - gbox.getCamera().x;
	theObstacleObject.ycam = theObstacleObject.y - gbox.getCamera().y;
}