let canvas = document.getElementById("field");
let field = canvas.getContext("2d");

let cell = 20;
let count = 0;

let snake = {
  x: 300,
  y: 300,
  dx: cell,
  dy: 0,
  tail: [],
  startTail: 4,
};

let point = {
  x: 500,
  y: 500,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("keydown", function (elem) {
  if (elem.keyCode == 37) {
    dy = 0;
    dx = -cell;
  } else if (elem.keyCode == 38) {
    dy = -cell;
    dx = 0;
  } else if (elem.keyCode == 39) {
    dy = 0;
    dx = cell;
  } else if (elem.keyCode == 40) {
    dy = cell;
    dx = 0;
  }
});
