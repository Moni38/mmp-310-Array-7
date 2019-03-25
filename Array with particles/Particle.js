//PARTICLE OBJECT CONSTRUCTOR
var Particle = function(_xPos,_yPos){
	//keep track of some properties
	this.xPosition = _xPos;
	this.yPosition = _yPos;
	this.xSpeed = random(-2,2);
	this.ySpeed = random(-2,2);
	this.lifeSpan = 100;

	this.update = function(){
		//MAKE CHANGES TO OUR PARTICLES
		this.xPosition += this.xSpeed;
		this.yPosition += this.ySpeed;
		this.lifeSpan --;
	}
	this.display = function(){		
		//DRAW THE PARTICLE TO THE SCREEN
		push();
			noStroke();
			colorMode(HSB);
			//hue goes from 0-360
			var hue = map(this.lifeSpan,300,0,360,0);
			fill(hue,100,100);

			translate(this.xPosition,this.yPosition);
			rotate(this.lifeSpan/25);
			var scaleFactor = map(this.lifeSpan,200,0,2,0);
			scale(scaleFactor);
			triangle(
				0, 0,
				30, 0,
				15, 30
			);
		pop();
	}
	this.checkDead = function(){
		if (this.lifeSpan < 1){
			return true;
		} else {
			return false;
		}
	}
}