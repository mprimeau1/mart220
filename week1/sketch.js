function setup() {
    createCanvas(600, 700);
}

function draw() {
    push();
    background(50, 55, 100);
    pop();

    push();
    stroke('black');
    strokeWeight(4);
    fill(0,9,71);
    rect(2, 2, 596, 696);
    pop();

    // ** Arms **

    push();
    strokeWeight(15);
    stroke(211,172,124);
    line(280, 400, 225, 500);
    line(325, 400, 375, 500);
    pop();

    push();
    noStroke();
    fill(211,172,124);
    ellipse(225, 500, 30, 30);
    ellipse(375, 500, 30, 30);
    pop();


    // ** Dress **

        push();
        stroke('black');
        strokeWeight(1);
        fill('black');
        triangle(300, 300, 210, 650, 400, 650);
        pop();

        push();
        noStroke();
        fill(160,126,204);
        ellipse(300, 350, 10, 10);
        ellipse(305, 375, 10, 10);
        ellipse(310, 400, 10, 10);
        ellipse(315, 450, 10, 10);
        ellipse(320, 500, 10, 10);
        ellipse(330, 550, 10, 10);
        ellipse(350, 600, 10, 10);
        ellipse(375, 640, 10, 10);
        ellipse(300, 425, 10, 10);
        ellipse(285, 590, 10, 10);
        ellipse(275, 570, 10, 10);
        ellipse(275, 450, 10, 10);
        ellipse(265, 500, 10, 10);
        ellipse(250, 550, 10, 10);
        ellipse(230, 600, 10, 10);
        ellipse(225, 630, 10, 10);
        pop();

        // ** Face **

        push();
        noStroke();
        fill(211,172,124);
        ellipse(300, 300, 115, 115);
        pop();

        // ** Eyes **
        push();
        stroke('black');
        strokeWeight(1);
        fill('white');
        ellipse(280, 300, 20, 20);
        ellipse(320, 300, 20, 20);
        pop();

        push();
        stroke(80,21,21);
        strokeWeight(2);
        fill('black');
        ellipse(280, 300, 10, 10);
        ellipse(320, 300, 10, 10);
        pop();

        // ** Mouth **
        push();
        noStroke();
        fill('red');
        triangle(310, 340, 300, 350, 290, 340);
        pop();

        // ** Hair **

        push();
        noStroke();
        fill(84,19,131);
        rect(255,255,90,30);
        pop();

        push();
        strokeWeight(30);
        stroke(84,19,131);
        line(240, 260, 240, 400);
        line(355, 260, 355, 400);
        pop();



        // ** Hat **

        push();
        noStroke();
        fill('black');
        ellipse(300, 255, 200, 30);
        triangle(300, 125, 240, 250, 350, 250);

        pop();



        // ** Feet **
        push();

        noStroke();
        fill('gray');
        ellipse(275, 650, 25, 10);
        ellipse(325, 650, 25, 10);
        pop();

        //** Text **

        push();
        textSize(16);
        fill('yellow');
        text('Mary Primeau', 490, 680);
        pop();

        push();
        textSize(16);
        fill('yellow');
        text('A Witchy Self Portrait', 10, 25);
        pop();
}
