"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

function drawName() {

}
context.beginPath();
context.strokeStyle = "black";
context.rect(20, 300, 150, 20);
context.rect(20, 300, 20, 150)
context.rect(20, 450, 150, 20)
context.rect(200, 300, 150, 20)
context.rect(200, 300, 20, 150)
context.rect(200, 450, 150, 20)
context.rect(350, 300, 20, 170)
context.rect(400, 300, 150, 20)
context.rect(400, 300, 20, 150)
context.rect(400, 450, 150, 20)
context.rect(550, 150, 20, 320)
context.rect(600, 300, 20, 150)
context.rect(600, 450, 150, 20)
context.rect(750, 300, 20, 300)
context.rect(600, 600, 170, 20)

context.rect
context.fill();
context.stroke();