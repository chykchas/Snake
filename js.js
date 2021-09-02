let field = document.getElementById("field");

document.addEventListener("keydown", function (elem) {
  if (elem.keyCode == 37) {
    dy = 0;
    dx = -move;
  } else if (elem.keyCode == 38) {
    dy = -move;
    dx = 0;
  } else if (elem.keyCode == 39) {
    dy = 0;
    dx = move;
  } else if (elem.keyCode == 40) {
    dy = move;
    dx = 0;
  }
});
