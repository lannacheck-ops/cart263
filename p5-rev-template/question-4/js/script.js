/**
 * TASK 1
 * Lanna Check
 */

// Rectangle 1 position and fill
let rect1X = 0
let rect1Y = 0;
let rect1Fill = "#b5e7ff";

// Rectangle 2 position and fill
let rect2X = 0;
let rect2Y = 0;
let rect2Fill = "#246aba";

// Rectangle 3 position and fill
let rect3X = 0;
let rect3Y = 0;
let rect3Fill = "#153394";

// White fill hex code
let whiteFill = "#ffffff";

// Global rectangle height and size
let rectHeight = undefined;
let rectSize = undefined;


"use strict";
/**
 * Creates the canvas
 */
function setup() {
    console.log("go");
    createCanvas(500, 500);
    // Sets the rectangle size to 1/3 of the canvas width
    rectSize = width * (1 / 3);

    // Calculates the position of each rectangle
    for (let i = 0; i < 3; i++) {
        if (i = 0) {
            rect1X = i * rectSize;
        }
        if (i = 1) {
            rect2X = i * rectSize;
        }
        if (i = 2) {
            rect3X = i * rectSize;
        }
    }
    // Sets the rectangle height to the height of the canvas
    rectHeight = height;
}
/**
 * Draws three rectangles
 */
function draw() {
    background(255);
    // Draws 3 rectangles
    drawRect(rect1X, rect1Y, rectSize, rectHeight, rect1Fill);
    drawRect(rect2X, rect2Y, rectSize, rectHeight, rect2Fill);
    drawRect(rect3X, rect3Y, rectSize, rectHeight, rect3Fill);
}


/**
 *  Draws a rectangle
 */
function drawRect(x, y, w, h, colors) {
    push();
    noStroke();
    // Checks if the mouse overlaps a specific rectanlge
    const overlapX = mouseX > x && mouseX < x + rectSize;
    const overlapY = mouseY < height && mouseY > 0
    if (overlapX && overlapY) {
        // Turn the rectangle white if it is overlapped
        fill(whiteFill);
    }
    else {
        // Turn the rectangle back to its original color otherwise
        fill(colors);
    }
    rect(x, y, w, h);
    pop();
}