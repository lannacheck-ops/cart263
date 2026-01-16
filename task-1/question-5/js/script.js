/**
 * TASK 1
 * Lanna Check
 */

"use strict";

let counter = 0;

// Orange square object
let box = {
    size: 40,
    x: 100,
    y: 80,
    color: "#ff8b06",
    overlapColor: "#ffc278",
    overlap: false
}

let radius = 30;
let ellipseAlpha = 50;
let ellipseNum = 0;
/**
 * Creates the canvas
 */
function setup() {
    console.log("go");
    createCanvas(500, 500);
    background(0);

}
/**
 * Draws three circles and in a black background
 */
function draw() {
    displaySquare();
    checkCollisionWithSquare();


    if (counter > 0 && counter < 11) {
        while (ellipseNum < counter) {
            fill(255, ellipseAlpha);
            ellipse(width / 2, height / 2, radius);
            ellipseAlpha += 1;
            radius += 30;
            ellipseNum += 1;
        }
    }
}

/**
 * Draw an orange square
 */
function displaySquare() {
    push();
    noStroke();
    // Square changes color when overlapped
    if (box.overlap) {
        fill(box.overlapColor);
    }
    else {
        fill(box.color);
    }
    rect(box.x, box.y, box.size);
    pop();
}

/**
 * Check mouse collision with the square
 */
function checkCollisionWithSquare() {
    const overlapX = mouseX > box.x && mouseX < box.x + box.size;
    const overlapY = mouseY > box.y && mouseY < box.y + box.size;
    // Sets box overlap to true or false based on if the mouse is overlapping the square
    if (overlapX && overlapY) {
        box.overlap = true;
    }
    else {
        box.overlap = false;
    }
}

/**
 * Increases the counter each time the mouse is pressed
 */
function mousePressed() {
    console.log(counter);
    //console.log(ellipseNum);
    if (box.overlap) {
        counter++;
    }

}