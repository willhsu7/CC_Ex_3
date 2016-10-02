var rocx = 250;
var rocy = 80;
var rocxspeed = 5;
var rocyspeed = 8;
var x;
var y;


var step = 0
var stepY;
var vel = 1;
var acc = 2;
var rand = 0;

var m = 0;
var n = 0;
var r = 0;
var g = 0;
var b = 0;

var PlanetE = {
    x: 300,
    y: 200,
    display: function() {
      stroke(6, 66, 17);
      strokeWeight(4);
      fill(46, 232, 184);
      ellipse(this.x, this.y, 45, 45);
    },
    move: function() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
    }
  } // declare shaking and going to explode planet : PlanetE 

function setup() {
  createCanvas(600, 600);
  background(33, 42, 105);
  rocx = width / 1.6
  rocy = height - 320;
  frameRate(10);

  stepY = 0; // MrAlien Move

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
  //rocket movement 

  background(33, 42, 105);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Dark-Blue sky

  fill(r, g, b);
  rectMode(CENTER);
  rect(m, n, 2000, 30);

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
  // changing ligtening 


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

  WhiteCurveLine(100);
  WhiteCurveLine(200);
  WhiteCurveLine(300);
  WhiteCurveLine(400);
  WhiteCurveLine(500);
  //White Curve Lines 


  // Rocket

  fill(189, 16, 224);
  triangle(rocx, rocy, rocx + 50, rocy + 70, rocx - 50, rocy + 70);
  //purple rocket head

  fill(216, 216, 216);
  rect(rocx, rocy + 145, 60, 150);
  //grey rocket body

  //fill(155, 155, 155);
  fill(r, g, b, 70);
  rect(rocx, rocy + 100, 40, 40);
  // rocket window 

  fill(216, 216, 216);
  triangle(rocx + 30, rocy + 70, rocx + 50, rocy + 220, rocx, rocy + 220);
  //right wing

  fill(216, 216, 216);
  triangle(rocx - 30, rocy + 70, rocx, rocy + 220, rocx - 50, rocy + 220);
  //left wing 


  fill(245, 81, 35);
  ellipse(rocx - 40, rocy + 270, 20, 70);
  ellipse(rocx, rocy + 270, 20, 70);
  ellipse(rocx + 40, rocy + 270, 20, 70);
  // Fire!!!

  noStroke();
  fill(208, 2, 27);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 50, 50);
  stroke(0);
  fill(208, 2, 27);
  line(pmouseX, pmouseY, mouseX, mouseY);

  //Fire Ball 
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
  }

  // little sparkle

  PlanetE.move();
  PlanetE.display(); // action shaking and going to explode planet : PlanetE 

  //MrAlien Moving !!!

  /*MrAlien(200, 300, 50);
  MrAlien(400, 350, 50);
  MrAlien(500, 390, 50); */


  MrAlien(150 + step, 400 + stepY, 50, 1);
  MrAlien(330 + step, 300, 25, 0.75);
  MrAlien(500, 390 + stepY, 70, 0.5);
  // call MrAlien out~~~


  if (mouseIsPressed) {
    step += 5;

    if (step > width) {

      step = -100;
    }
  } // MrAlien moves right


  if (keyIsPressed) {
    if ((key == 'f') || (keyCode === RIGHT_ARROW)) {
      vel += acc;
      step += vel;
      if (step > 600) {
        step = -150;
      }
    } // MrAlien moves right fast

    if ((keyCode === LEFT_ARROW)) {


      step -= 25;
      if (step < -280) {
        step = 600;
      }
    }

    if ((key == 'j') || (keyCode === UP_ARROW)) {
      stepY -= 20;

      if (stepY < -450) {
        stepY = 150;
      }
    } // MrAlien moves up

    if ((keyCode === DOWN_ARROW)) {
      stepY += 25;
      if (stepY > 280) {
        stepY = -450;
      }
    } // MrAlien moves down

  }

}

function MrAlien(xx, yy, diameter, s) {

  scale(s);

  noStroke();
  fill(6, 254, 17);
  rect(xx - 25, yy + 125, 20, 60);
  rect(xx + 23, yy + 125, 20, 60);

  //MrAlien's Legs

  noStroke();
  fill(27, 110, 4);
  ellipse(xx, yy + 70, diameter + 60);
  // MrAlien's body

  noStroke();
  fill(6, 254, 17);
  rect(xx, yy + 30, 50, 55);
  //mouth

  fill(6, 254, 17);
  rect(xx - 1, yy - 25, 5, 30);
  //little line on head


  fill(6, 254, 17);
  ellipse(xx - 1, yy - 45, diameter - 35, diameter - 35);
  //little tiny ball on head

  fill(6, 254, 17);
  ellipse(xx, yy, diameter + 30, diameter);
  //head

  fill(255, 13, 255);
  arc(xx - 10, yy, diameter - 35, diameter - 15, 0, radians(225), CHORD);
  arc(xx + 10, yy + 1, diameter - 35, diameter - 15, radians(310), radians(175), CHORD);
  //eyes


} // Function MrAlien!!!!!!!


function WhiteCurveLine(L) {

  for (var angle = 0; angle < TWO_PI; angle += PI / 24.0) {
    var newValue = map(sin(angle), -1, 1, 0, 500);
    //println(newValue);
  }

  noStroke();
  fill(255);
  for (x = 0; x <= width; x += 5) {
    y = L + (sin(angle) * 35.0);
    rect(x, y, 3, 4);
    angle += PI / 40.0;
  }
  // Function WhiteCureLine


}


/*function Rocket(rocx, rocy) {

  fill(189, 16, 224);
  triangle(rocx, rocy, rocx + 50, rocy + 70, rocx - 50, rocy + 70);
  //purple rocket head

  fill(216, 216, 216);
  rect(rocx, rocy + 145, 60, 150);
  //grey rocket body

  //fill(155, 155, 155);
  fill(r, g, b, 70);
  rect(rocx, rocy + 100, 40, 40);
  // rocket window 

  fill(216, 216, 216);
  triangle(rocx + 30, rocy + 70, rocx + 50, rocy + 220, rocx, rocy + 220);
  //right wing

  fill(216, 216, 216);
  triangle(rocx - 30, rocy + 70, rocx, rocy + 220, rocx - 50, rocy + 220);
  //left wing 


  fill(245, 81, 35);
  ellipse(rocx - 40, rocy + 270, 20, 70);
  ellipse(rocx, rocy + 270, 20, 70);
  ellipse(rocx + 40, rocy + 270, 20, 70);
  // Fire!!!


}*/