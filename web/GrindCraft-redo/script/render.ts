var render:any = {
    //get canvas element
    canvas: document.getElementById("game"),
    
    //draw function for images
    draw: function(img:any, width:number, height:number, x:number, y:number, sx:number, sy:number, swidth:number, sheight:number){
        //size of canvas should be:
        //1000px
        //600px
        
        render.ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    },
};

// Get canvas context
render.ctx = render.canvas.getContext("2d");