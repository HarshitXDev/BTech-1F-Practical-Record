const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* ---------- RECTANGLE ---------- */
ctx.fillStyle = "skyblue";
ctx.fillRect(20, 20, 150, 80);   // x, y, width, height

/* ---------- STROKED RECTANGLE ---------- */
ctx.strokeStyle = "black";
ctx.strokeRect(20, 120, 150, 80);

/* ---------- CIRCLE ---------- */
ctx.beginPath();
ctx.arc(300, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = "tomato";
ctx.fill();

/* ---------- LINE ---------- */
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(400, 250);
ctx.strokeStyle = "green";
ctx.stroke();

/* ---------- TEXT ---------- */
ctx.font = "20px Arial";
ctx.fillStyle = "purple";
ctx.fillText("Hello Canvas", 200, 200);
