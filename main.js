canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty"

color="black";
line_width=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

    mouseEvent="mouseDown";


}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseUP";
    

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

    mouseEvent="mouseleave";
    

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    current_mousex=e.clientX-canvas.offsetLeft;
    current_mousey=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        

        console.log("the current positon of x and y coordinates are");
        console.log("x="+ current_mousex + " , y=" + current_mousey);
        ctx.arc(current_mousex,current_mousey,20,0,2*Math.PI);
        ctx.stroke();

    }

}