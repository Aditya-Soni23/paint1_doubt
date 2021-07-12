canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 3;
//radius = 4;


var mouseEvent = "empty";

//current_position_of_mouse_x = 0;
//current_position_of_mouse_y = 0;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove" , my_mousemove);


function my_mousemove(e){

    current_position_of_mouse_x = e.clintX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clintY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = width_of_line;

        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 ,2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", mouseup);


function mouseup(e){
    mouseEvent = "mouseUP";

}

canvas.addEventListener("mouseleave", mouseleave);


function mouseleave(e){
    mouseEvent = "mouseLeave";

}