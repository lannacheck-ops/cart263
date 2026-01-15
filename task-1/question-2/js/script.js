/**
 * TASK 1
 * Lanna Check
 */

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
    // Draws an ellipse
    drawEllipse(20, 15, 15, 15, 225, 100, 100);
    drawEllipse(50, 50, 40, 40, 225, 150, 100);
    drawEllipse(90, 120, 60, 60, 225, 200, 100);
}

/**
 *  Draws an ellipse
 */
function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}