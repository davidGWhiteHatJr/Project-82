var canvas = document.getElementById("myCanvas");


var ctx = canvas.getContext("2d");

var color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value
    mouse_event = "mouseDown";
   
    
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    currentX = e.clientX- canvas.offsetLeft;
    currentY = e.clientY- canvas.offsetTop;

    if (mouse_event == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.arc(currentX, currentY, radius ,0, 2*Math.PI);

        ctx.stroke();
    }
   
    startX = currentX;
    startY = currentY;

}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup()
{
   mouse_event = "mouseup"
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}