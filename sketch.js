function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
strokeWeight(2);
	background(204,245,245);
fill(255,255,50);

//antenne
	line(210, 165, 250, 245);
		line(280, 165, 250, 245);
	//Neck
	line(250, 285, 250, 345);
	//hands and arms
	strokeWeight(2);
		line(150, 285, 250, 440);
			line(350, 285, 250, 440);
strokeWeight(2);
	//Wheel
	ellipse(285, 472, 55, 55);
		ellipse(215, 472, 55, 55);

		fill(5,255,50);
		ellipse(285, 472, 40, 40);
			ellipse(215, 472, 40, 40);




fill(255,255,50);
	//Body
	rect(195, 295, 110, 150);

	//Head
	ellipse(250, 240, 90, 90);

	fill(205,255,250);
	ellipse(265, 235, 20, 30);
		ellipse(235, 235, 20, 30);
		//eyes
	strokeWeight(0);
			fill(5,5,250);
		ellipse(265, 240, 10, 10);
				ellipse(235, 240, 10, 10);

}
