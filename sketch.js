function setup() {
  createCanvas(600, 600);
  background("blue" );
}

function draw() {
  
  fill(" black")
  stroke("silver")
  
  
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,80,60);
  }
}