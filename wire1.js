(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Path = function() {
	this.spriteSheet = ss["wire1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path_1 = function() {
	this.spriteSheet = ss["wire1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Path_2 = function() {
	this.spriteSheet = ss["wire1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.wire1 = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.Path();
	this.instance.setTransform(138.5,213.5);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(138.5,200.5);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(138.5,186.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(413.5,386.5,273,28);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;