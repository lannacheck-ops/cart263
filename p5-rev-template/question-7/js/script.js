/**
 * TASK 1
 * Lanna Check
 */

"use strict";

let shape = {
    fill: {
        r: 225,
        g: 100,
        b: 180
    },
    size: 50,
    x: undefined,
    y: undefined,
    name: "circle"
}

/**
 * Creates the canvas sets a random color for the shape at the start
 */
function setup() {
    console.log("go");
    createCanvas(500, 500);
    shape.x = shape.size / 2;
    shape.y = shape.size / 2;
    shape.fill.r = random(255);
    shape.fill.g = random(255);
    shape.fill.b = random(255);
    rectMode(CENTER);
    //frameRate(50);
}

/**
 * Draws a grid of shapes in a black background
 */
function draw() {
    background(0);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            //push();
            noStroke();
            fill(shape.fill.r, shape.fill.g, shape.fill.b);
            if (shape.name === "circle") {
                ellipse(x * shape.size + shape.x, y * shape.size + shape.y, shape.size)
            }
            else if (shape.name === "square") {
                rect(x * (shape.size) + shape.x, y * (shape.size) + shape.y, shape.size / 1.2)
            }
            //pop();
        }
    }
    return;
}

/**
 * Changes the shape when the mouse is pressed
 */
function mousePressed() {
    console.log(frameRate());
    if (shape.name === "circle") {
        shape.name = "square"
    }
    else if (shape.name === "square") {
        shape.name = "circle"
    }
}

/**
 * Changes the color of the shapes when the space bar is pressed
 */
function keyPressed(event) {
    if (event.keyCode === 32) {
        shape.fill.r = random(255);
        shape.fill.g = random(255);
        shape.fill.b = random(255);
    }
}
