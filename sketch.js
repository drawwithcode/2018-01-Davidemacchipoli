function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(0);
	stroke(170);

}

function draw() {
strokeWeight(0);
	background(234,245,245);

	//divisione schermo
	//fill(240,240,220);
	fill(228,153,153,70);
		rect(0, 380, 500, 120);
fill(194,194,214);



	strokeWeight(2);
//gambe
	strokeWeight(0);
	rect(221, 425, 8, 40);
		rect(271, 425, 8, 40);

	strokeWeight(2);


	//Neck
	line(250, 285, 250, 345);
	//hands and arms
	strokeWeight(2);
		line(150, 285, 250, 400);
		//line(mouseX, mouseY, 250, 400);
			line(350, 285, 250, 400);
			//mani
			fill(228,153,153);
			strokeWeight(0);
			ellipse(160, 295, 40, 40);
				//ellipse(mouseX, mouseY, 40, 40);
				ellipse(340, 295, 40, 40);

					fill(194,194,214);
strokeWeight(0);
	//Wheel
	ellipse(275, 472, 45, 45);
		ellipse(225, 472, 45, 45);
//ruota interna
		//fill(0,0,0,40);
			fill(228,153,153,130);
		ellipse(275, 472, 35, 35);
			ellipse(225, 472, 35, 35);

fill(194,194,214);
	//Body
	rect(205, 295, 90, 140);
strokeWeight(0);

//pulsanti
strokeWeight(0);
	fill(255,0,0);
rect(270, 325, 10, 10);
rect(270, 345, 10, 10);



strokeWeight(0);
fill(194,194,214);
	//Head
	ellipse(250, 240, 90, 90);
	fill(205,255,250);
	//ellipse(265, 230, 20, 30);
		//ellipse(235, 230, 20, 30);

		//eyes
	strokeWeight(0);
	fill(255,255,255);
		ellipse(265, 235, 40, 40);
		ellipse(235, 235, 40, 40);

						//pupille
						fill(0,0,0);
						ellipse(265, 235, 20, 20);
								ellipse(235, 235, 20, 20);

								//luce negli occhi
								fill(255,255,255);
								ellipse(268, 230, 6, 6);
										ellipse(238, 230, 6, 6);

								//antenne
									//line(250, 165, 250, 245);
									strokeWeight(2);
									line(mouseX, mouseY, 250, 195);

				//pallini antenne
				strokeWeight(0);
						fill(0,0,0);
						//ellipse(250, 165, 15, 15);
						ellipse(mouseX, mouseY, 15, 15);
					//luce antenna
						fill(0,0,0,30);
						//ellipse(250, 165, 35, 35);
						ellipse(mouseX, mouseY, 35, 35);





							//bocca
							strokeWeight(0);
							fill(230,0,0);
								rect(237, 260, 4, 12);
								rect(244, 260, 4, 12);
									rect(251, 260, 4, 12);
										rect(258, 260, 4, 12);

//schermo
strokeWeight(7);
stroke(0,0,0,35);
fill(255,153,153);
	rect(215, 365, 70, 32);

//linee schermo
stroke(255);
strokeWeight(2);
	line(220, 370, 230, 385);
	line(230, 385, 236, 385);
		line(236, 385, 242, 374);
		line(242, 374, 247, 388);
		line(247, 388, 254, 372);
		line(254, 372, 257, 386);
			line(257, 386, 265, 386);
			line(265, 386, 270, 376);
				line(270, 376, 277, 386);
				line(277, 386, 284, 372);

//riflesso
strokeWeight(0);
		fill(225,225,234,130);
			rect(275, 296, 9, 138);

stroke(170);
strokeWeight(0);



}
