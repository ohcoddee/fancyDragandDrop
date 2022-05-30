const box = document.querySelector(".box");
const body = document.querySelector("body");

let mouseclicked = false;
let leftValue = 0;
let rightValue = 0;

box.style.left = `${leftValue}px`;
box.style.top = `${rightValue}px`;

box.addEventListener("mousedown", mousedown);
function mousedown(event) {
  mouseclicked = true;
}

box.addEventListener("mousemove", mousemove);
function mousemove(event) {
  if (mouseclicked) {
    leftValue = leftValue + event.movementX;
    rightValue = rightValue + event.movementY;

    box.style.left = `${leftValue}px`;
    box.style.top = `${rightValue}px`;
  }
}

box.addEventListener("mouseup", mouseup);
function mouseup(event) {
  mouseclicked = false;
}

body.addEventListener("mouseleave", mouseleave);
function mouseleave(event) {
  mouseclicked = false;
}
