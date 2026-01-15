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
    noStroke();
    // First Circle
    push();
    fill(225, 100, 100);
    ellipse(20, 15, 15);
    pop();
    // Second Circle
    push();
    fill(225, 150, 100);
    ellipse(50, 50, 40);
    pop();
    // Third Circle
    push();
    fill(225, 200, 100);
    ellipse(90, 120, 60);
    pop();
}
