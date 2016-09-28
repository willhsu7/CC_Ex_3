var rocx = 250;
var rocy = 80;
var x;
var y;
var rocxspeed = 8;
var rocyspeed = 5;

var m = 0;
var n = 0;
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  rocx = width / 1.6
  rocy = height - 320;
  frameRate(10);

}

function draw() {
  rocx = rocx + rocxspeed;
  rocy = rocy + rocyspeed;

  if ((rocx > width) || (rocx < 0)) {
    rocxspeed = rocxspeed * -1;
  }

  if ((rocy > width) || (rocy < 0)) {
    rocyspeed = rocyspeed * -1;
  }

  background(33, 42, 105); //Dark-Blue sky
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);


  fill(r, g, b);
  rectMode(CENTER);
  rect(m, n, 800, 30);

  n = n + 70;
  r = r + 50;

  if (m > width) {
    m = 0;
    n += 50;
    r = 0;
    g += 50;
    b = 0;
  }
  if (n > height) {
    m = 0;
    n = 0;
    g = 0;
    b = b + 50;
    if (b > 255) {
      b = 0;
    }
  }

  for (var angle = 0; angle < TWO_PI; angle += PI / 24.0) {
    var newValue = map(sin(angle), -1, 1, 0, 500);
    println(newValue);
  }

  noStroke();
  fill(255);
  for (var x = 0; x <= width; x += 5) {
    var y = 120 + (sin(angle) * 35.0);
    rect(x, y, 3, 4);
    angle += PI / 40.0;
  } //White Curve Line 

  noFill();
  stroke(245, 166, 35);
  for (var d = 150; d > 0; d -= 10) {
    ellipse(70, 70, d, d);
  }


  fill(245, 166, 35);
  ellipse(70, 70, 90, 90); //orange sun

  fill(248, 231, 28);
  ellipse(70, 70, 70, 70); //yellow sun

  noStroke();

  fill(189, 16, 224);
  triangle(rocx, rocy, rocx + 50, rocy + 70, rocx - 50, rocy + 70); //purple rocket head

  fill(216, 216, 216);
  rect(rocx, rocy + 145, 60, 150); //grey rocket body

  /*fill(155, 155, 155);*/
  fill(r, g, b, 70);
  rect(rocx, rocy + 100, 40, 40); // rocket window 

  fill(216, 216, 216);
  triangle(rocx + 30, rocy + 70, rocx + 50, rocy + 220, rocx, rocy + 220); //right wing

  fill(216, 216, 216);
  triangle(rocx - 30, rocy + 70, rocx, rocy + 220, rocx - 50, rocy + 220); //left wing 


  fill(245, 81, 35);
  ellipse(rocx - 40, rocy + 270, 20, 70);
  ellipse(rocx, rocy + 270, 20, 70);
  ellipse(rocx + 40, rocy + 270, 20, 70); // Fire!!!

  //body
  noStroke();
  fill(208, 2, 27);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 50, 50); //Fire Ball 
  stroke(0);
  fill(208, 2, 27);
  line(pmouseX, pmouseY, mouseX, mouseY);

  fill(155);
  stroke(121, 97, 77);
  rect(x, y, random(20), random(50));

  x = x + random(-25, 25);
  y = y + random(-25, 25);

  if (frameCount % 5 === 0);
  for (var i = 0; i < 20; i++) {
    fill(245, 76, 35, 70);
    noStroke();
    ellipse(mouseX + random(50), mouseY + random(50), 20, 20);
  } // little sparkle







}