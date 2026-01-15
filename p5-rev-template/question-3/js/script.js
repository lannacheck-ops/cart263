/**
 * TASK 1
 * Lanna Check
 */
let rectSize = 50;

let rect1X = 40;
let rect1Y = 40;

let rect2X = 100;
let rect2Y = 50;

let rect3X = 220;
let rect3Y = 100;
"use strict";
/**
 * Creates the canvas
 */
function setup() {
    console.log("go");
    createCanvas(500, 500);

}
/**
 * Draws three circles and in a black background
 */
function draw() {
    background(0);

    moveRect3();
    // Draws an ellipse
    drawRect(rect1X, rect1Y, rectSize);
    drawRect(rect2X, rect2Y, rectSize);
    drawRect(rect3X, rect3Y, rectSize);


}

// Updates the y position of rectangle 3 every frame 
function moveRect3() {
    rect3Y += 1;
    // Resets the y position when it falls out of the canvas
    if (rect3Y >= height + rectSize) {
        rect3Y = 0;
    }
}

/**
 *  Draws a rectangle
 */
function drawRect(x, y, s) {
    push();
    noStroke();
    fill(100, 150, 200);
    rect(x, y, s);
    pop();
}

// Moves rectangle 1 to a random position each time the mouse is pressed
function mousePressed() {
    rect1X = random(rectSize, width - rectSize);
    rect1Y = random(rectSize, height - rectSize);
}

// Moves rectangle 2 each time the spacebar is pressed
function keyPressed(event) {
    // When Spacebar is pressed
    if (event.keyCode === 32) {
        rect2X += 3;
        rect2Y += 3;
    }
}