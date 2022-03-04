function jsRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener('DOMContentLoaded', () => {
    img = document.getElementById('img-entry');
    img.src = `./images/clifford-${jsRandom(1, 49)}-resized.png`;
    img.style.opacity = 1;
});


// class Particle {
//     constructor(){
//         this.x = random(0,width);
//         this.y = random(0,height);
//         this.r = random(1,5);
//         this.xSpeed = random(-1,1);
//         this.ySpeed = random(-1,1);
//     }

//     createParticle() {
//         noStroke();
//         circle(this.x,this.y,this.r);
//     }

//     moveParticle() {
//         if(this.x < 0 || this.x > width)
//             this.xSpeed*=-1;
//         if(this.y < 0 || this.y > height)
//             this.ySpeed*=-1;
//         this.x+=this.xSpeed;
//         this.y+=this.ySpeed;
//     }

//     joinParticles(particles) {
//         particles.forEach(element =>{
//             let dis = dist(this.x,this.y,element.x,element.y);
//             if(dis < 100) {
//                 stroke('rgba(155,155,155,0.2)');
//                 line(this.x,this.y,element.x,element.y);
//             }
//         });
//     }
// }

// let particles = [];

// function setup() {
//     var canvas = createCanvas(windowWidth, windowHeight);
//     canvas.parent('canvasForHTML');

//     for(let i = 0;i<width/7;i++){
//         particles.push(new Particle());
//     }
//     frameRate(30);
//     fill(random(255), random(255), random(255), 88);
//     // stroke(random(255), random(255), random(255), 128);
// }

// function draw() {
//     background("#fffff");
//     for(let i = 0; i < particles.length; i++) {
//         particles[i].createParticle();
//         particles[i].moveParticle();
//         particles[i].joinParticles(particles.slice(i));
//     }
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
