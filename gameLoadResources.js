var maingame; // The magic object that handles the full play cycle
var maze; // The maze array, with pills and walls
// First of all, let's load all the needed resources. Is done on the "onLoad" event of the window.


gbox.onLoad(function () {
	help.akihabaraInit({ 
	}); 

	gbox.addImage("logo","resources/graphics/logo.png"); // Images are loaded setting an alias and a file name. 
	gbox.addImage("cels","resources/graphics/cels.png"); // or sprites sheet, like this one...
	gbox.addImage("font","resources/graphics/font.png"); // ...or font set.
	
	gbox.addFont({id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0});
	
	gbox.addTiles({id:"hero",image:"cels",tileh:12,tilew:12,tilerow:11,gapx:0,gapy:0});
	gbox.addTiles({id:"blinky",image:"cels",tileh:9,tilew:12,tilerow:2,gapx:0,gapy:15});
	gbox.addTiles({id:"ghost1",image:"cels",tileh:12,tilew:12,tilerow:3,gapx:0,gapy:12});
	gbox.addTiles({id:"bonus",image:"cels",tileh:12,tilew:12,tilerow:8,gapx:0,gapy:24}); 
	gbox.addTiles({id:"maze",image:"cels",tileh:16,tilew:16,tilerow:10,gapx:0,gapy:36}); 
	
	var audioserver="resources/audio/"; 
	gbox.addAudio("eat",[audioserver+"eat.mp3",audioserver+"eat.ogg"],{channel:"sfx"}); 
	gbox.addAudio("eatghost",[audioserver+"laser.mp3",audioserver+"laser.ogg"],{channel:"sfx"});
	gbox.addAudio("powerpill",[audioserver+"powerup3.mp3",audioserver+"powerup3.ogg"],{channel:"sfx"});
	gbox.addAudio("die",[audioserver+"die.mp3",audioserver+"die.ogg"],{channel:"sfx"});
	gbox.addAudio("bonus",[audioserver+"coin.mp3",audioserver+"coin.ogg"],{channel:"sfx"});
	gbox.addAudio("default-menu-option",[audioserver+"select.mp3",audioserver+"select.ogg"],{channel:"sfx"});
	gbox.addAudio("default-menu-confirm",[audioserver+"start.mp3",audioserver+"start.ogg"],{channel:"sfx"});
	gbox.addAudio("ingame",[audioserver+"ingame.mp3",audioserver+"ingame.ogg"],{channel:"bgmusic",loop:true}); 
	gbox.addAudio("intro",[audioserver+"Intro.mp3",audioserver+"Intro.ogg"],{channel:"bgmusic",loop:true}); 
	gbox.loadAll(go); // When everything is ready, the "loadAll" downloads all the needed resources and runs the "go" function when it's done loading.
}, false);
