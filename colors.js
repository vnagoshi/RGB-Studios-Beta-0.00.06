var colors = ["#c66", "#6c6", "#66c"];
var lightColors = ["#e6b3b3", "#b3e6b3", "#b3b3e6"];
var randColor = random(0, 2);
var styles = ["red", "green", "blue"];

document.getElementById("theme").href = "http://localhost:63342/RGB-Studios-Beta-0.00.06/assets/stylesheets/" + styles[randColor] + ".css";//TODO static href
document.getElementById("meta1").content = colors[randColor];
document.getElementById("meta2").content = colors[randColor];
document.getElementById("meta3").content = colors[randColor];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}