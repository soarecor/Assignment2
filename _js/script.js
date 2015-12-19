
  var scaling="fit";
  var width= 2000;
  var height=1800;
  var frame= new zim.Frame(scaling,width,height);

  frame.on("ready",function() {
    var stage=frame.stage;
    var stageW=frame.width;
    var stageH= frame.height;

  zog("____INTERACTIVE POWER GRID____");
  var cont = new createjs.Container(); //container for lego and cabinet
  stage.addChild(cont);
  // var w = cont.width;
  // var h = cont.height;
  // stage.canvas.width = w;
  // stage.canvas.height = h;

  var imagePath = "_images/";
  var manifest = [{
    id: "back", //adding cabinet to the manifest
    src: "back.png"
  },{
   id: "pow", //adding p to the manifest
   src: "pow.png"
 },{
   id: "wire", //adding cabinet to the manifest
   src: "line1.png"
 },{
   id: "wire1", //adding cabinet to the manifest
   src: "line21.png"
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
   id: "o", //adding cabinet to the manifest
   src: "O1.png"
 },{
   id: "w", //adding cabinet to the manifest
   src: "W1.png"
 },{
   id: "e", //adding cabinet to the manifest
   src: "E1.png"
 },{
   id: "towers", //adding cabinet to the manifest
   src: "towers1.png"
 },{
   id: "R", //adding cabinet to the manifest
   src: "R1.png"
 },{
   id: "ion", //adding cabinet to the manifest
   src: "ion.png"
 },{
   id: "ioff", //adding cabinet to the manifest
   src: "ioff.png"
 },{
   id: "wire3", //adding cabinet to the manifest
   src: "line3.png"
 },{
   id: "wire4", //adding cabinet to the manifest
   src: "line4.png"
 },{
   id: "windtop", //adding p to the manifest
   src: "windtop.png"
 },{
   id: "windbot", //adding p to the manifest
   src: "windbot.png"
 },{
   id: "bion", //adding p to the manifest
   src: "bion.png"
 },{
   id: "bioff", //adding p to the manifest
   src: "bioff.png"
 },{
   id: "dist", //adding cabinet to the manifest
   src: "dist2.png"
 },{
   id: "clouds1", //adding cabinet to the manifest
   src: "clouds1.png"
 },{
   id: "clouds2", //adding cabinet to the manifest
   src: "clouds2.png"
 },{
   id: "clouds3", //adding cabinet to the manifest
   src: "clouds3.png"
 }
];

  var preload = new createjs.LoadQueue(false, imagePath); //preloading images and sound effects
  preload.installPlugin(createjs.Sound);
  preload.loadManifest(manifest);
  preload.on("complete", startApp);


  function startApp(e) {
    createjs.Ticker.on("tick",stage);

    var back = new createjs.Bitmap(preload.getResult("back"));
    cont.addChildAt(back,0);
    zim.scale(back, 1.1);

    var dist = new createjs.Bitmap(preload.getResult("dist"));
    cont.addChild(dist);
    zim.scale(dist, 1.1);
    dist.x = 650; //property
    dist.y = 1320; //property
    dist.regX = 10;
    dist.regY = 100;

       function  makeWindmill(){
         var cont1 = new createjs.Container(); //container for lego and cabinet
         stage.addChild(cont1);

         var wbot = new createjs.Bitmap(preload.getResult("windbot"));
         cont1.addChild(wbot);
         wbot.x=160;
         wbot.y=207;

         var wtop = new createjs.Bitmap(preload.getResult("windtop"));
         cont1.addChild(wtop);
           wtop.x=460;
         wtop.y=207;
         wtop.regX= 336;
         wtop.regY= 260;

         var tween = createjs.Tween.get(wtop, {loop: true})
          .to({rotation: 0}, 0)
          .to({rotation: 360}, Math.random()*4000+2000);
          return(cont1);
       }



       var windmill = new makeWindmill();
       zim.scale(windmill,.5);

       var windmill9 = new makeWindmill();
       zim.scale(windmill9,.3);
        windmill9.x=300;

        var windmill3=new makeWindmill();
         windmill3.x=700;
         zim.scale(windmill3,.1);

         var windmill1=new makeWindmill();
          windmill1.x=800;
          zim.scale(windmill1,.3);

          var windmill5=new makeWindmill();
           windmill5.x=900;
           zim.scale(windmill5,.4);


           var windmill6=new makeWindmill();
            windmill6.x=1200;
            zim.scale(windmill6,.25);


         var windmill7=new makeWindmill();
          windmill7.x=1600;
          zim.scale(windmill7,.55);

          var windmill8=new makeWindmill();
           windmill8.x=1450;
           zim.scale(windmill8,.35);

           var windmill2=new makeWindmill();
            windmill2.x=500;
            zim.scale(windmill2,.4);

    //
    // var tween = createjs.Tween.get(wtop, {loop: true})
    //  .to({rotation: 0}, 0)
    //  .to({rotation: 360}, 2000);

    var i = new createjs.Bitmap(preload.getResult("ion"));
    cont.addChild(i);
    i.x = 1460; //property
    i.y = 1300; //property
    i.regX = 10;
    i.regY = 100;

    var bioff = new createjs.Bitmap(preload.getResult("bioff"));
    cont.addChild(bioff);
    zim.scale(bioff,.25);
    bioff.x = 1580; //property
    bioff.y = 1520;

    var bion = new createjs.Bitmap(preload.getResult("bion"));
    cont.addChild(bion);
    zim.scale(bion,.25);
    bion.x = 1520; //property
    bion.y = 1500; //property
    bion.regX = 10;
    bion.regY = 100;

  //property

    var r = new createjs.Bitmap(preload.getResult("R"));
    cont.addChild(r);
    // zim.scale(r, .25);
    r.x = 900; //property
    r.y = 1250; //property
    r.regX = 10;
    r.regY = 100;

    var towers = new createjs.Bitmap(preload.getResult("towers"));
    cont.addChild(towers);
    zim.scale(towers, 1.1);
    towers.x = 310; //property
    towers.y = 810; //property
    towers.regX = 10;
    towers.regY = 100;

    var e = new createjs.Bitmap(preload.getResult("e"));
    cont.addChild(e);
    // zim.scale(e, .25);
    e.x = 260; //property
    e.y = 1280; //property
    e.regX = 10;
    e.regY = 100;

    var w = new createjs.Bitmap(preload.getResult("w"));
    cont.addChild(w);
    // zim.scale(w, .25);
    w.x = 1300; //property
    w.y = 510; //property
    w.regX = 10;
    w.regY = 100;

    var o = new createjs.Bitmap(preload.getResult("o"));
    cont.addChild(o);
    // zim.scale(o, .25);
    o.x = 770; //property
    o.y = 530; //property
    o.regX = 10;
    o.regY = 100;

    var p = new createjs.Bitmap(preload.getResult("pow"));
    cont.addChild(p);
    // zim.scale(p, .25);
    p.x = 100; //property
    p.y = 480; //property
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

    var wire = new createjs.Bitmap(preload.getResult("wire"));
    cont.addChildAt(wire,1);
    zim.scale(wire, .35);
    wire.y=520;
    wire.x=440;

    var wire1 = new createjs.Bitmap(preload.getResult("wire1"));
    cont.addChildAt(wire1,2);
    zim.scale(wire1, 1.11);
    wire1.y=460;
    wire1.x=360;

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

    var dbutton2 = new createjs.Bitmap(preload.getResult("dbutton"));
    cont.addChildAt(dbutton2,4);
    zim.scale(dbutton2,.25);
    dbutton2.y=640;
    dbutton2.x=1215;

    var clouds1 = new createjs.Bitmap(preload.getResult("clouds1"));
    cont.addChild(clouds1);
    clouds1.y=350;
    clouds1.x=100;
    // zim.scale(clouds, .25);

    var clouds2 = new createjs.Bitmap(preload.getResult("clouds2"));
    cont.addChild(clouds2);
    clouds2.y=750;
    clouds2.x=100;
    // zim.scale(clouds, .25);

    var clouds3 = new createjs.Bitmap(preload.getResult("clouds3"));
    cont.addChild(clouds3);
    clouds3.y=1050;
    clouds3.x=100;
    // zim.scale(clouds, .25);

    bion.on("mouseout",function(){
      bion.alpha=1;
      stage.update();
    });

    button.on("mouseout",function(){
      button.alpha=1;
      stage.update();
    });

    button2.on("mouseout",function(){
      button2.alpha=1;
      stage.update();
    });

    var layers =[];
    layers.push([clouds1,25,50]);
    var parallax= new zim.Parallax(stage, 0.2, layers);

    var layers1 =[];
    layers1.push([clouds2,75,90]);
    var parallax= new zim.Parallax(stage, 0.2, layers1);

    var layers2 =[];
    layers2.push([clouds3,150,130]);
    var parallax= new zim.Parallax(stage, 0.2, layers2);


    var x=0;
    var y=1;

    button.on("click",function(){
      button.alpha=0;
      switch (x)
          {
                      case 0:
                      x=1;
                      createjs.Tween.get(wire,{loop:true})
                        .to({alpha:1},60)
                        .to({alpha:0},100);

                                      button2.on("click",function(){
                                        if ((y==1) && (x==1)){
                                        button2.alpha=0;
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
                                        y=0;
                                        console.log(y);
                                        }
                                        else {
                                        createjs.Tween.removeTweens(wire1);
                                        createjs.Tween.removeTweens(wire3);
                                        createjs.Tween.removeTweens(wire4);
                                        y=1;
                                        console.log(y);
                                        zog("button 2 is off");
                                        }
                                      });

                      zog("button 1 is on");
                      break;

                      case 1:
                      createjs.Tween.removeTweens(wire);
                      createjs.Tween.removeTweens(wire1);
                      createjs.Tween.removeTweens(wire3);
                      createjs.Tween.removeTweens(wire4);
                      zog("button 1 and 2 are off");
                      x=0;
                      y=1;
                      break;
          }
          stage.update();
        });

        var b=0;
        bion.on("click",function(){
        bion.alpha=0;
        cont.removeChild(i);
            switch (b)
          {
                      case 0:
                      i = new createjs.Bitmap(preload.getResult("ioff"));
                      cont.addChild(i);
                      i.x = 1460; //property
                      i.y = 1300; //property
                      i.regX = 10;
                      i.regY = 100;
                      b=1;
                      zog("ion");
                      break;

                      case 1:
                      i = new createjs.Bitmap(preload.getResult("ion"));
                      cont.addChild(i);
                      i.x = 1460; //property
                      i.y = 1300; //property
                      i.regX = 10;
                      i.regY = 100;
                      b=0;
                      zog("ioff");
                      break;
          }
        });

        stage.update();
  }
  stage.update();
});
