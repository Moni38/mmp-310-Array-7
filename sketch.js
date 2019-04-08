/* 
week 7 MMP 310 Sun
*/
var sun = []; //circles

function setup() {
    createCanvas(windowWidth, windowHeight);
  
}

function draw() {
    background(75);

    for (let i = 0; i < sun.length; i++) {
		drawSun(sun[i][0], sun[i][1],sun[i][2]);
		sun[i][1] += 3;
    }
    
}

    
function mousePressed() {
    let c = "#f55890";
    if (mouseX > width/2){
        c = "yellow";
    }
	sun.push([mouseX, mouseY, c]);
   
}



function drawSun(x, y, color) {

    fill(color);
    ellipse(x, y, 100); // circle
    stroke(10);
    fill(random(50,100));
    
}



function drawText(text) {
  text(text, storyX, storyY);
}
    