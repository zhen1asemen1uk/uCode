let conteiner = document.querySelector("#conteiner"),
  track = document.querySelector(".track"),
  next = document.querySelector(".next"),
  prev = document.querySelector(".prev"),
  first = document.getElementById("#first"),
  last = document.getElementById("#last"),
  time = setInterval(nextItem, 3000),
  left = 0;

function nextItem() {
  left = left - 500;
  if (left < -3000) {
    left = 0;
  }
  track.style.transform = "translateX" + "(" + left + "px)";
}

next.addEventListener("click", function () {
  left = left - 500;
  if (left < -3000) {
    left = 0;
  }

  track.style.transform = "translateX" + "(" + left + "px)";

  clearInterval(time);
});
prev.addEventListener("click", function () {
  left = left + 500;
  if (left > 0) {
    left = -3000;
  }
  track.style.transform = "translateX" + "(" + left + "px)";
  clearInterval(time);
});
