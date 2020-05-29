var sun;
var venus;
var earth;
var jupiter;
var neptune;
var moon;

function setup() {
  createCanvas(700, 600);
  sun = new Padre(0,0);
  venus = new Venus(-2500,600);
  earth = new Earth(-1500,-3500);
  jupiter = new Jupiter(-2500, 1000);
  neptune = new Neptune(-1500, 2000);
  moon = new Moon(-9500,0);
}

function draw() {
  background(0);
  angleMode(DEGREES);
  
  moon.show();
  moon.rotate();
  
  sun.show();
  sun.rotate();
  venus.show();
  earth.show();
  jupiter.show();
  neptune.show();
  
}