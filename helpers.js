
//Returns the x-position of the left side of a tile column
function tileXPos(x){
	return (x-1) * 16;
}

//Returns the y-position of the top of a tile row
function tileYPos(y){
	return (y-1) * 16;
}
 

  
function followCamera(obj,viewdata) {
	var buf = {x:96, y:96};
	var cam = gbox.getCamera();
	
    var playerViewDistanceToEdge;
    var flip;
    
	if ((obj.x - cam.x) > (gbox._screenw - buf.x)) gbox.setCameraX(cam.x + (obj.x - cam.x) - (gbox._screenw - buf.x), viewdata);
	if ((obj.x - cam.x) < (buf.x))                 gbox.setCameraX(cam.x + (obj.x - cam.x) - buf.x,                   viewdata);
	if ((obj.y - cam.y) > (gbox._screenh - buf.y)) gbox.setCameraY(cam.y + (obj.y - cam.y) - (gbox._screenh - buf.y), viewdata);
	if ((obj.y - cam.y) < (buf.y))                 gbox.setCameraY(cam.y + (obj.y - cam.y) - buf.y,                   viewdata);
    
    try {
        if (obj.fliph === 1) {
            // looking left
            playerViewDistanceToEdge = obj.x - cam.x;
            flip = 1;
        } else {
            // looking right
            playerViewDistanceToEdge = gbox._screenw - (obj.x - cam.x);
            flip = -1;
        }
        if (playerViewDistanceToEdge < (gbox._screenw / 3) * 2) {
        
            gbox.setCameraX(cam.x - (flip * 2), viewdata);
        
        }
    } catch(err) {
        alert(err);
    }
}
