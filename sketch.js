function setup() {
  createCanvas(800,400);
   butterfly = new ButterflyRaindrops(10,10);
   line = new LineRaindrops(5,40);
   A = new ARaindrops(18,18);
}

function draw() {
  background(0); 
  butterfly.display();
  line.display();
  A.display(); 
  drawSprites();
}