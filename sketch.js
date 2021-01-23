var canvas;
var music;
var Movingrect;
var Fixedrect1;
var Fixedrect2;
var Fixedrect3;
var Fixedrect4;


function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);

   Movingrect =  createSprite(random(20,750));
   Movingrect.shapeColor = "green";

   Fixedrect1 = createSprite(700,600,150,50);
   Fixedrect1.shapeColor = "blue";

   Fixedrect2 = createSprite(500,600,150,50);
   Fixedrect2.shapeColor = "orange";

   Fixedrect3 = createSprite(300,600,150,50);
   Fixedrect3.shapeColor = "brown";

   Fixedrect4 = createSprite(100,600,150,50);
   Fixedrect4.shapeColor = "green";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(12);

    //Movingrect.X = World.mouse.X;
   // Movingrect.Y = World.mouse.Y;
    
    //if ( Movingrect.X-Fixedrect1.X<Fixedrect1.width/2+Movingrect.width/2
     //   &&Fixedrect1.X-Movingrect.X<Fixedrect1.width/2+Movingrect.width/2
     //   &&Movingrect.Y-Fixedrect1.Y<Fixedrect1.height/2+Movingrect.height/2
      //  &&Fixedrect1.Y-Movingrect.Y<Fixedrect1.height/2+Movingrect.height2)
        //Movingrect.shapeColor = "blue";
       // fixedrect1.shapeColor = "blue";
   // }
     //{
      //  Movingrect.shapeColor = "green";
      //  Fixedrect1.shapeColor = "green";
   // }



    //add condition to check if box touching surface and make it box

    drawSprites();
}
