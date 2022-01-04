canvas =
 document.getElementById("myCanvas");
ctx=canvas.getContext("2D");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.rect(250, 210, 40, 0, 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.rect(330, 210, 40, 0, 2*Math.PI);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.strokeStyle();