background(0, 212, 219);


fill(255, 221, 0);
ellipse(274,125,150,150);

fill(89, 47, 5);
noStroke();

var y = 100;



draw = function() {
    rect(135,y - 51,123,302); //chocolate

stroke(0, 0, 0);
rect(135,y - 51,47,50);  //chocolate squares 
rect(168,y - 51,47,50);
rect(210, y - 51,47,50);

rect(136,y,47,50);
rect(168,y,47,50);
rect(210,y,47,50);

rect(136,y + 49,47,50);
rect(168,y + 49,47,50);
rect(210, y + 49,47,50);

rect(136,y + 100,47,50);
rect(168,y + 100,47,50);
rect(210, y + 100,47,50);

rect(136,y + 151,47,50);
rect(168,y + 151,47,50);
rect(210,y + 151,47,50);

rect(136,y + 202,47,50);
rect(168,y + 202,47,50);
rect(210,y + 202,47,50);

y = y + 1;

};
