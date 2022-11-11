let width = 800
let height = 600

function setup() {
  createCanvas(width, height);
  background("green");
}

function draw() {
  let x = random(0, width)
  let y = random(0, height)
  let diameter = random(30, 90)

  let red = random(0, 255)
  let green = random(0, 255)
  let black = random(0,255)
  let alpha = random(0,255)


  circle(x, y, diameter)
  strokeWeight(2)
  fill(red, green, black,alpha)
  }
