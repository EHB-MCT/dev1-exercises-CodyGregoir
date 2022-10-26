"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawlines();

function drawLines() {
    for (let 1 = 0; 1 < 100; i++) {
        Utils.drawLine(0 + (10 * 1), 0, width - (10 * 1), height);
    }
}
