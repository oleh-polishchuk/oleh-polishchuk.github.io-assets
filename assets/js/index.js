"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animatedHeading = require("./animated-headline.js");
var wow = require("./wow.js");
function InitAssets() {
    animatedHeading.init();
    wow.init();
}
exports.InitAssets = InitAssets;
