var myData1;
var myData2;
var myData3;
var myData4;
var myData5;

var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;

function preload(){

 myData1 = loadJSON('assets/albatrosses.json');
 myData2 = loadJSON('assets/cormorants.json');
 myData3 = loadJSON('assets/cormorants.json');
 myData4 = loadJSON('assets/petrels.json');
 myData5 = loadJSON('assets/storm.json');

 myImage1 = loadImage('assets/albatrosses.jpg');
 myImage2 = loadImage('assets/cormorants.jpg');
 myImage3 = loadImage('assets/penguins.jpg');
 myImage4 = loadImage('assets/petrels.jpg');
 myImage5 = loadImage('assets/storm.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(151, 220, 222);
  textFont('Cambria');
}

function draw() {

push();
    fill('white');
    textSize(25);
    textAlign(CENTER);
    text('Birds of Antarctica, grouped by family', width/2, height/12);
    textSize(18);
    text('click to see members', width/2, height/8);
pop();

push();
    fill('white');
    textSize(21);
    text('ALBATROSSES', width/16, height/2 - 150);
    text('CORMORANTS', width/4 + 30, height/2 - 150);
    text('PENGUINS', width/2 - 50, height/2 - 150);
    text('PETRELS', width/2 + 210, height/2 - 150);
    text('STORM PETRELS', width/2 + 480, height/2 - 150);
 pop();

 imageMode(CENTER);
   image(myImage1, width/12 + 35, height/2 + 30, 300, 300);
   image(myImage2, width/4 + 80, height/2 + 30, 300, 300);
   image(myImage3, width/2 - 5, height/2 + 30, 300, 300);
   image(myImage4, width/2 + 285, height/2 + 30, 300, 300);
   image(myImage5, width/2 + 585, height/2 + 30, 300, 300);

}

function mouseClicked(){
  for(var i = 0; i < myData1.members.length; i++) {
    var name1 = myData1.members[i];
    fill(31, 88, 90);
    textSize(15);
    text(name1, 100, i*25 + 570);
  }

  for(var j = 0; j < myData2.members.length; j++) {
    var name2 = myData2.members[j];

    fill(31, 88, 90);
    textSize(15);
    text(name2, 430, j*25 + 570);
  }

  for(var k = 0; k < myData3.members.length; k++) {
    var name3 = myData3.members[k];

    fill(31, 88, 90);
    textSize(15);
    text(name3, 700, k*25 + 570);
  }

  for(var x = 0; x < myData3.members.length; x++) {
    var name4 = myData4.members[x];

    fill(31, 88, 90);
    textSize(15);
    text(name4, 990, x*15 + 570);
  }

  for(var h = 0; h < myData3.members.length; h++) {
    var name5 = myData5.members[h];

    fill(31, 88, 90);
    textSize(15);
    text(name5, 1280, h*15 + 570);
  }
}

