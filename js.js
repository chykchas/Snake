let canvas = document.getElementById("field");
let field = canvas.getContext("2d");

let cell = 20;
let count = 0;
let score = 0;

let snake = {
  x: 300,
  y: 300,
  dx: cell,
  dy: 0,
  tail: [],
  maxTail: 4,
};

let food = {
  x: 500,
  y: 500,
};

function loop() {
  requestAnimationFrame(loop);
  if (++count < 4) {
    return;
  }
  count = 0;

  field.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0 || snake.x > canvas.width) return YouLose();
  else if (snake.y < 0 || snake.y > canvas.height) return YouLose();
  snake.tail.unshift({ x: snake.x, y: snake.y });
  if (snake.tail.length > snake.maxTail) snake.tail.pop();

  field.fillStyle = "red";
  field.fillRect(food.x, food.y, cell, cell);

  field.fillStyle = "yellow";
  field.fillRect(snake.x, snake.y, cell, cell);
  if (snake.x == food.x && snake.y == food.y) {
    snake.maxTail++;
    score++;
    food.x = getRandomInt(0, 30) * cell;
    food.y = getRandomInt(0, 30) * cell;
  }

  field.fillStyle = "green";
  for (let i = 1; i < snake.maxTail; i++) {
    field.fillRect(snake.tail[i].x, snake.tail[i].y, cell - 1, cell - 1);

    if (snake.x == snake.tail[i].x && snake.y == snake.tail[i].y)
      return YouLose();
  }
}

document.addEventListener("keydown", function (elem) {
  if (elem.keyCode == 37) {
    snake.dy = 0;
    snake.dx = -cell;
  } else if (elem.keyCode == 38) {
    snake.dy = -cell;
    snake.dx = 0;
  } else if (elem.keyCode == 39) {
    snake.dy = 0;
    snake.dx = cell;
  } else if (elem.keyCode == 40) {
    snake.dy = cell;
    snake.dx = 0;
  }
});

function YouLose() {
  alert(`Your score ${score}`);
  snake = {
    x: 300,
    y: 300,
    dx: cell,
    dy: 0,
    tail: [],
    maxTail: 4,
  };

  food = {
    x: 500,
    y: 500,
  };
  score = 0;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
requestAnimationFrame(loop);
