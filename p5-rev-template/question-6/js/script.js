/**
 * TASK 1
 * Lanna Check
 */

"use strict";

let test = {
    fill: "#ffff",
    size: 28,
    x: undefined,
    y: undefined,
    name: "test"
};

let numX = 60;
let numY = 40;
let numSpace = 28;
/**
 * Creates the canvas and draws text and numbers
 */
function setup() {
    console.log("go");
    createCanvas(500, 500);
    background(0);
    test.x = width / 2;
    test.y = height / 2;
    // Numbers from 0-9
    for (let i = 0; i < 10; i++) {
        push();
        fill(test.fill);
        textSize(test.size);
        textAlign(CENTER, CENTER);
        text(i, i * numSpace + numX, numY);
        pop();
    }

    // Numbers from 0-15
    for (let i = 1; i <= 15; i++) {
        push();
        fill(test.fill);
        textSize(test.size);
        textAlign(CENTER, CENTER);
        text(i, numX, i * numSpace + numY);
        pop();
    }
    // Draw the test text
    push();
    fill(test.fill);
    textSize(test.size);
    textAlign(CENTER, CENTER);
    text(test.name, test.x, test.y);
    pop();
}

function draw() {

}

function mousePressed() {
    console.log(frameRate());
}
