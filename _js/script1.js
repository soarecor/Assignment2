var scaling="fit";
var width= 2000;
var height=2000;
var frame= new zim.Frame(scaling,width,height);

frame.on("ready",function() {
  var stage=frame.stage;
  var stageW=frame.width;
  var stageH= frame.height;

zog("____INTERACTIVE POWER GRID____");
stage.enableMouseOver(10); //10 times per second
var cont = new createjs.Container(); //container for lego and cabinet
stage.addChild(cont);

var imagePath = "_images/";
var manifest = [{
  id: "back", //adding p to the manifest
  src: "back.png"
},{
  id: "windtop", //adding p to the manifest
  src: "windtop.png"
},{
  id: "windbot", //adding p to the manifest
  src: "windbot.png"
},{
  id: "dist", //adding cabinet to the manifest
  src: "dist2.png"
}
];

var preload = new createjs.LoadQueue(false, imagePath); //preloading images and sound effects
preload.installPlugin(createjs.Sound);
preload.loadManifest(manifest);
preload.on("complete", startApp);



function startApp(e) {
  createjs.Ticker.on("tick",stage);

  var back = new createjs.Bitmap(preload.getResult("back"));
  cont.addChild(back);
  // zim.scale(back, .25);

  var clouds = new createjs.Bitmap(preload.getResult("dist"));
  cont.addChild(clouds);
  clouds.y=350;
  clouds.x=100;
  zim.scale(clouds, 2);

   function  makeWindmill(){
     var wbot = new createjs.Bitmap(preload.getResult("windbot"));
     cont.addChild(wbot);
     // zim.scale(wbot, .50);
     wbot.x=160;
     wbot.y=207;

     var wtop = new createjs.Bitmap(preload.getResult("windtop"));
     cont.addChild(wtop);
     // stage.addChild(new zim.Grid());
     // zim.outline(wtop);
     // zim.scale(wtop, .50);
     wtop.x=460;
     wtop.y=207;
     wtop.regX= 336;
     wtop.regY= 260;

     var tween = createjs.Tween.get(wtop, {loop: true})
      .to({rotation: 0}, 0)
      .to({rotation: 360}, 2000);

      return([wtop,wbot]);

   }

   var windmill = new makeWindmill();





  stage.on("click",function(){
  stage.mouseX;
  stage.mouseY;
  zog(stage.mouseX);
  zog(stage.mouseY);
});
  //


  //   var layers =[];
  // layers.push([clouds,150,50]);
  //
  //
  // var parallax= new zim.Parallax(stage, 0.1, layers);

  stage.update();
}
stage.update();
});
