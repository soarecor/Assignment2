// window.addEventListener('load', interactive);
//
// function interactive() {
  var scaling="fit";
  var width= 2000;
  var height=2000;
  var frame= new zim.Frame(scaling,width,height);

  frame.on("ready",function() {
    var stage=frame.stage;
    var stageW=frame.width;
    var stageH= frame.height;

  zog("____INTERACTIVE POWER GRID____");
  // var stage = new createjs.Stage("myCanvas"); //new createjs stage object

  stage.enableMouseOver(10); //10 times per second
  var cont = new createjs.Container(); //container for lego and cabinet
  stage.addChild(cont);
  // var w = cont.width;
  // var h = cont.height;
  // stage.canvas.width = w;
  // stage.canvas.height = h;



  var imagePath = "_images/";
  var manifest = [{
    id: "pow", //adding p to the manifest
    src: "p.png"
  },{
    id: "wire", //adding cabinet to the manifest
    src: "line1.png"
  },{
    id: "wire1", //adding cabinet to the manifest
    src: "line2.png"
  },{
    id: "button", //adding cabinet to the manifest
    src: "bttn.png"
  },{
    id: "dbutton", //adding cabinet to the manifest
    src: "dbttn.png"
  },{
    id: "button2", //adding cabinet to the manifest
    src: "bttn2.png"
  },{
    id: "back", //adding cabinet to the manifest
    src: "back.png"
  },{
    id: "o", //adding cabinet to the manifest
    src: "O.png"
  },{
    id: "w", //adding cabinet to the manifest
    src: "W.png"
  },{
    id: "e", //adding cabinet to the manifest
    src: "E.png"
  },{
    id: "towers", //adding cabinet to the manifest
    src: "towers.png"
  },{
    id: "R", //adding cabinet to the manifest
    src: "R.png"
  },{
    id: "i", //adding cabinet to the manifest
    src: "I.png"
  },{
    id: "dist", //adding cabinet to the manifest
    src: "dist.png"
  },{
    id: "wire3", //adding cabinet to the manifest
    src: "line3.png"
  },{
    id: "wire4", //adding cabinet to the manifest
    src: "line4.png"
  },{
    id: "clouds", //adding cabinet to the manifest
    src: "clouds.png"
  }
];

  var preload = new createjs.LoadQueue(false, imagePath); //preloading images and sound effects
  preload.installPlugin(createjs.Sound);
  preload.loadManifest(manifest);
  preload.on("complete", startApp);
  // createjs.Ticker.on("tick",stage);

  function startApp(e) {
    createjs.Ticker.on("tick",stage);

    var back = new createjs.Bitmap(preload.getResult("back"));
    cont.addChild(back);
    zim.scale(back, .25);

    var dist = new createjs.Bitmap(preload.getResult("dist"));
    cont.addChild(dist);
    zim.scale(dist, .25);
    dist.x = 650; //property
    dist.y = 1200; //property
    dist.regX = 10;
    dist.regY = 100;

    var i = new createjs.Bitmap(preload.getResult("i"));
    cont.addChild(i);
    zim.scale(i, .25);
    i.x = 1400; //property
    i.y = 1220; //property
    i.regX = 10;
    i.regY = 100;

    var r = new createjs.Bitmap(preload.getResult("R"));
    cont.addChild(r);
    zim.scale(r, .25);
    r.x = 850; //property
    r.y = 1150; //property
    r.regX = 10;
    r.regY = 100;

    var towers = new createjs.Bitmap(preload.getResult("towers"));
    cont.addChild(towers);
    zim.scale(towers, .25);
    towers.x = 330; //property
    towers.y = 700; //property
    towers.regX = 10;
    towers.regY = 100;

    var e = new createjs.Bitmap(preload.getResult("e"));
    cont.addChild(e);
    zim.scale(e, .25);
    e.x = 250; //property
    e.y = 1160; //property
    e.regX = 10;
    e.regY = 100;

    var w = new createjs.Bitmap(preload.getResult("w"));
    cont.addChild(w);
    zim.scale(w, .25);
    w.x = 1300; //property
    w.y = 420; //property
    w.regX = 10;
    w.regY = 100;

    var o = new createjs.Bitmap(preload.getResult("o"));
    cont.addChild(o);
    zim.scale(o, .25);
    o.x = 800; //property
    o.y = 420; //property
    o.regX = 10;
    o.regY = 100;

    var p = new createjs.Bitmap(preload.getResult("pow"));
    cont.addChild(p);
    zim.scale(p, .25);
    p.x = 100; //property
    p.y = 400; //property
    p.regX = 10;
    p.regY = 100;

    var button = new createjs.Bitmap(preload.getResult("button"));
    cont.addChild(button);
    zim.scale(button, .25);
    button.y=700;
    button.x=440;

    var button2 = new createjs.Bitmap(preload.getResult("button2"));
    cont.addChild(button2);
    zim.scale(button2, .25);
    button2.y=600;
    button2.x=1150;

    var x=0;
    var y=0;
          button.on("click",function(){
            button.alpha=0;
            switch (x)
                {
                            case 0:
                            createjs.Tween.get(wire,{loop:true})
                              .to({alpha:1},60)
                              .to({alpha:0},100);

                                            button2.on("click",function(){
                                              button2.alpha=0;
                                              switch(y)
                                              {
                                              case 0:
                                                createjs.Tween.get(wire1,{loop:true})
                                              .to({alpha:0},50)
                                              .to({alpha:1},200);

                                              createjs.Tween.get(wire3,{loop:true})
                                            .to({alpha:0},50)
                                            .to({alpha:1},200);

                                            createjs.Tween.get(wire4,{loop:true})
                                          .to({alpha:0},50)
                                          .to({alpha:1},200);

                                              zog("button 2 is on");
                                              y=1;
                                              break;

                                              case 1:
                                              createjs.Tween.removeTweens(wire1);
                                              zog("button 2 is off");
                                              y=0;
                                              break;
                                              }
                                            });
                            zog("button 1 is on");
                            x=1;
                            break;

                            case 1:
                            createjs.Tween.removeTweens(wire);
                            createjs.Tween.removeTweens(wire1);
                            createjs.Tween.removeTweens(wire3);
                            createjs.Tween.removeTweens(wire4);
                            zog("button 1 and 2 are off");
                            y=0;
                            x=0;
                            break;
                }
          stage.update();
        });

        button.on("mouseout",function(){
          button.alpha=1;
        });

        button2.on("mouseout",function(){
          button2.alpha=1;
        });

        var wire = new createjs.Bitmap(preload.getResult("wire"));
        cont.addChildAt(wire,1);
        zim.scale(wire, .35);
        wire.y=500;
        wire.x=480;

        var wire1 = new createjs.Bitmap(preload.getResult("wire1"));
        cont.addChildAt(wire1,2);
        zim.scale(wire1, .25);
        wire1.y=460;
        wire1.x=440;

        var wire3 = new createjs.Bitmap(preload.getResult("wire3"));
        cont.addChildAt(wire3,1);
        zim.scale(wire3, .35);
        wire3.y=1170;
        wire3.x=480;

        var wire4 = new createjs.Bitmap(preload.getResult("wire4"));
        cont.addChildAt(wire4,1);
        zim.scale(wire4, .35);
        wire4.y=1195;
        wire4.x=1100;

        var dbutton = new createjs.Bitmap(preload.getResult("dbutton"));
        cont.addChildAt(dbutton,3);
        zim.scale(dbutton, .25);
        dbutton.y=730;
        dbutton.x=510;

        var clouds = new createjs.Bitmap(preload.getResult("clouds"));
        cont.addChild(clouds);
        clouds.y=350;
        clouds.x=100;
        zim.scale(clouds, .25);

        var layers =[clouds,150,30];
        var parallax= new zim.Parallax(stage, 0.4, layers);

        stage.update();
  }


  stage.update();
});
// }
