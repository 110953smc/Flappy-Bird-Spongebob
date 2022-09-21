function setup() {
	createCanvas(300, 600);
}

var [xpos, ypos, xspeed, yspeed] = [150, 300, 0, 0];

function draw() {
  background(225);
 fill(0, 150, 0);
	ellipse(xpos, ypos, 50, 50);

	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
}

function keyPressed() {
	switch(keyCode) {
	case 38:
	case 87:
	speed = -2;
	}
}

function keyReleased() {
	switch(keyCode) {
	case 38:
	case 87:
	yspeed = 0;
	}
}