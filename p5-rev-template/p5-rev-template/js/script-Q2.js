/**
 * TASK 1
 * Lanna Check
 */

"use strict";

function setup() {
    console.log("go");
    createCanvas(500, 500);

}

function draw() {
    background(0);
}

function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(225, 100, 100)
    ellipse(20, 15, 15);
    pop();
}