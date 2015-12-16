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



// stage content:
(lib.wire = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAjLAAUIAAgmIEEAAIAAAmgAc+AUIAAgmIEEAAIAAAmgAWyAUIAAgmIEEAAIAAAmgAQlAUIAAgmIEEAAIAAAmgAKYAUIAAgmIEEAAIAAAmgAELAUIAAgmIEEAAIAAAmgAiAAUIAAgmIEBAAIAAAmgAoOAUIAAgmIEEAAIAAAmgAubAUIAAgmIEEAAIAAAmgA0oAUIAAgmIEEAAIAAAmgA61AUIAAgmIEFAAIAAAmgEghBAAUIAAgmIEEAAIAAAmgEgnOAAUIAAgmIEEAAIAAAmg");
	//this.shape.setTransform(268.2,178);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(292,376,502.4,4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
