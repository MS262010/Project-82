var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x_position = e.clientX - canvas.offsetLeft;
    current_y_position = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth =5;
        ctx.arc(current_x_position, current_y_position,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_x_position;
    last_position_of_y = current_y_position;

}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}