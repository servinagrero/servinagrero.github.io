// // initialize config variables here
// let canvas, ctx

// // setup config variables and start the program
// function init () {
//   canvas = document.getElementById('mainCanvas')
//   ctx = canvas.getContext('2d')

//   var width = ctx.canvas.width;
//   var height = ctx.canvas.height;

//   // outlined square X: 50, Y: 35, width/height 50
//   // ctx.beginPath()
//   // ctx.strokeRect(50, 35, 50, 50)

//   // filled square X: 125, Y: 35, width/height 50
//   // ctx.beginPath()
//   // ctx.fillRect(125, 35, 50, 50)

//   console.log(width, height);
//   for(var i=0; i< 500; ++i) {
//     ctx.beginPath();
//     ctx.fillRect(Math.random() * width, Math.random() * height, 5, 5);
//   }
// }

// // wait for the HTML to load
// document.addEventListener('DOMContentLoaded', init)
//
// this class describes the properties of a single particle.
class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(2,12);
    this.xSpeed = random(-1,1);
    this.ySpeed = random(-1,1);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    // fill('rgba(200,169,169,0.8)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<70) {
        stroke('rgba(155,155,155,0.2)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

let particles = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvasForHTML');

  for(let i = 0;i<width/7;i++){
    particles.push(new Particle());
  }
  frameRate(30);
  fill(random(255), random(255), random(255), 88);
  // stroke(random(255), random(255), random(255), 128);
}

function draw() {
  background("#fffff");
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
