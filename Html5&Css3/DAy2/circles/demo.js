var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var colorInput = document.getElementById("colorInput");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lastColor = colorInput.value;

function drawCircles() {
  var newColor = colorInput.value;

  if (newColor !== lastColor) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lastColor = newColor;
  }

  for (var i = 0; i < 300; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var radius = 10 + Math.random() * 20;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.strokeStyle = newColor;
    context.stroke();
  }
}
