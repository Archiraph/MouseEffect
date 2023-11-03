const mouse = document.createElement("span");
mouse.classList.add("mouse");
document.body.appendChild(mouse);

const littleCircle = document.createElement("span");
littleCircle.classList.add("littleCircle");
document.body.appendChild(littleCircle);

const bigCircle = document.createElement("span");
bigCircle.classList.add("bigCircle");
document.body.appendChild(bigCircle);

const delayInSeconds = 1;

window.addEventListener("mousemove", function (event) {
  mouse.style.top = event.clientY + "px";
  mouse.style.left = event.clientX + "px";

  setTimeout(function () {
    littleCircle.style.top = event.clientY + "px";
    littleCircle.style.left = event.clientX + "px";
  }, delayInSeconds * 50);

  setTimeout(function () {
    bigCircle.style.top = event.clientY + "px";
    bigCircle.style.left = event.clientX + "px";
  }, delayInSeconds * 70);
});
