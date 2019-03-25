//MMP310 Class Particles
//var particle;

var particles = new Array();

function setup() {
	createCanvas(800,500);
	//particle = new Particle();
	//particles.push(particle);
}

function draw() {
  background(50);

  //particles emitted from our mouse position
  var p = new Particle(mouseX, mouseY);
  particles.push(p);

  //LOOP BACKWARD THROUGH OUR PARTICLE ARRAY
  for (var i=particles.length-1; i>=0; 	i--){
  	particles[i].update();
  	particles[i].display();
  	if ( particles[i].checkDead() ){
  		particles.splice(particles[i],1);
  	}
  }
}

function mousePressed(){
	var p = new Particle();
	particles.push(p);
}