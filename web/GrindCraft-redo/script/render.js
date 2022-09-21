"use strict";
var render = {
    //get canvas element
    canvas: document.getElementById("game"),
    //draw function for images
    draw: function (img, width, height, x, y, sx, sy, swidth, sheight) {
        //size of canvas should be:
        //1000px
        //600px
        render.ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    },
};
// Get canvas context
render.ctx = render.canvas.getContext("2d");
