// Section Canvas Particles
let canvas;

let rate = 4;
let particles = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('rgb(23, 23, 102 )');
  initParticles();
}

function renderCanvas() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('#Hope');
  tParticles();
}

function initParticles() {
  let particlesCount = Math.floor(window.innerWidth / 12);
  particles = [];

  for (let i = 0; i < particlesCount; i++) {
    particles.push(new Particle());
  }
  //
}

function setup() {
  renderCanvas();
  background('rgb(23, 23, 102 )');
  frameRate(28);
}

function draw() {
  background('rgb(23, 23, 102 )');
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    //Position
    this.position = createVector(random(width), random(height));
    //Velocity
    this.velocity = createVector(random(-rate, rate), random(-rate, rate));
    //Size
    this.size = 10;
  }
  update() {
    this.position.add(this.velocity);
    this.edges();
  }

  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.45)');
    circle(this.position.x, this.position.y, this.size);
  }

  edges() {
    if (this.position.x < 0 || this.position.x > windowWidth) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > windowHeight) {
      this.velocity.y *= -1;
    }
  }

  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(
        this.position.x,
        this.position.y,
        particle.position.x,
        particle.position.y,
      );
      if (d < 120) {
        stroke('rgba(255,255,255, 0.1)');
        line(
          this.position.x,
          this.position.y,
          particle.position.x,
          particle.position.y,
        );
      }
    });
  }
}
