window.addEventListener('load', interactive);

function interactive() {
  zog("____INTERACTIVE POWER GRID____");
  var stage = new createjs.Stage("myCanvas"); //new createjs stage object
stage.enableMouseOver(10); //10 times per second
  var cont = new createjs.Container(); //container for lego and cabinet
  stage.addChild(cont);

  var imagePath = "_images/";
  var manifest = [{
    id: "pow", //adding p to the manifest
    src: "p.png"
  },{
    id: "wire", //adding cabinet to the manifest
    src: "wire.png"
  },{
    id: "wire1", //adding cabinet to the manifest
    src: "wire1.png"
  },{
    id: "button", //adding cabinet to the manifest
    src: "button.png"
  },{
    id: "dbutton", //adding cabinet to the manifest
    src: "dbutton.png"
  },{
    id: "button2", //adding cabinet to the manifest
    src: "button2.png"
  }
];

  var preload = new createjs.LoadQueue(false, imagePath); //preloading images and sound effects
  preload.installPlugin(createjs.Sound);
  preload.loadManifest(manifest);
  preload.on("complete", startApp);
  // createjs.Ticker.on("tick",stage);

  function startApp(e) {
    createjs.Ticker.on("tick",stage);

    var p = new createjs.Bitmap(preload.getResult("pow"));
    cont.addChild(p);
    p.alpha = 1; //property
    zim.scale(p, .25);
    p.x = 100; //property
    p.y = 100; //property
    p.regX = 10;
    p.regY = 100;

    var button = new createjs.Bitmap(preload.getResult("button"));
    cont.addChild(button);
    zim.scale(button, .3);
    button.y=350;
    button.x=640;

    var button2 = new createjs.Bitmap(preload.getResult("button2"));
    cont.addChild(button2);
    zim.scale(button2, .3);
    button2.y=350;
    button2.x=840;

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
                                              .to({alpha:1},1000);
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
        cont.addChildAt(wire,0);
        zim.scale(wire, .7);
        wire.y=150;
        wire.x=240;

        var wire1 = new createjs.Bitmap(preload.getResult("wire1"));
        cont.addChildAt(wire1,0);
        zim.scale(wire1, .7);
        wire1.y=150;
        wire1.x=440;

        var dbutton = new createjs.Bitmap(preload.getResult("dbutton"));
        cont.addChildAt(dbutton,1);
        zim.scale(dbutton, .3);
        dbutton.y=390;
        dbutton.x=650;

        stage.update();
  }


  stage.update();
}
