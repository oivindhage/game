
//Returns the x-position of the left side of a tile column
function tileXPos(x){
	return (x-1) * 16;
}

//Returns the y-position of the top of a tile row
function tileYPos(y){
	return (y-1) * 16;
}
 

  
function followCamera(obj,viewdata) {
	xbuf = 96;
	ybuf = 96;
	xcam = gbox.getCamera().x;
	ycam = gbox.getCamera().y;
	if ((obj.x - xcam) > (gbox._screenw - xbuf)) gbox.setCameraX(xcam + (obj.x - xcam) - (gbox._screenw - xbuf), viewdata);
	if ((obj.x - xcam) < (xbuf))                 gbox.setCameraX(xcam + (obj.x - xcam) - xbuf,                   viewdata);
	if ((obj.y - ycam) > (gbox._screenh - ybuf)) gbox.setCameraY(ycam + (obj.y - ycam) - (gbox._screenh - ybuf), viewdata);
	if ((obj.y - ycam) < (ybuf))                 gbox.setCameraY(ycam + (obj.y - ycam) - ybuf,                   viewdata);
}
