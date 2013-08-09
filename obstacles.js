function addObstacles(){
	gbox.addObject({
		id:"bluedoor"
		group:"obstacle",
		tileset:"obstacle",
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
			handleObstacleObject(this, "bluedoor");
		},
		blit:function() {
			blitObstacleObject(this);
		}
    });	
}

function handleObstacleObject(theObstacleObject, theObstacleObjectName){
	if (gbox.objectIsVisible(theObstacleObject)){
//		toys.platformer.applyGravity(theObstacleObject,maze,"map"); 
//		toys.platformer.handleAccellerations(theObstacleObject); 
		toys.platformer.setFrame(theObstacleObject); 
		var hero=gbox.getObject("player","hero"); 
		if (gbox.collides(theBonusObject,hero)) { 
//			gbox.hitAudio("bonus");
//			maingame.hud.pushValue("bonus","value",theBonusObject.frame);
//			if (theBonusObjectName == "bluedoor" && hero.hasItem("bluekey")){
//                gbox.trashObject(theBonusObject);
//            }
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