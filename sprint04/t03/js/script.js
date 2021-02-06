let block_1 = document.querySelector(".block_1");
let block_2 = document.querySelector(".block_2");
let block_3 = document.querySelector(".block_3");
let block_4 = document.querySelector(".block_4");
let block_5 = document.querySelector(".block_5");
let block_6 = document.querySelector(".block_6");

block_1.addEventListener("click", function (event) {
  block_1.classList.add("active");
  event.stopPropagation();
});

block_1.addEventListener("dragend", function (event) {
  if (block_1.classList.contains("active")) {
    block_1.style.top = event.pageY - 50 + "px";
    block_1.style.left = event.pageX - 50 + "px";
    block_1.classList.remove("active");
  }
});

block_2.addEventListener("click", function (event) {
  block_2.classList.add("active");
  event.stopPropagation();
});

block_2.addEventListener("dragend", function (event) {
  if (block_2.classList.contains("active")) {
    block_2.style.top = event.pageY - 50 + "px";
    block_2.style.left = event.pageX - 50 + "px";

    block_2.classList.remove("active");
  }
});

block_3.addEventListener("click", function (event) {
  block_3.classList.add("active");
  event.stopPropagation();
});

block_3.addEventListener("dragend", function (event) {
  if (block_3.classList.contains("active")) {
    block_3.style.top = event.pageY - 50 + "px";
    block_3.style.left = event.pageX - 50 + "px";

    block_3.classList.remove("active");
  }
});

block_4.addEventListener("click", function (event) {
  block_4.classList.add("active");
  event.stopPropagation();
});

block_4.addEventListener("dragend", function (event) {
  if (block_4.classList.contains("active")) {
    block_4.style.top = event.pageY - 50 + "px";
    block_4.style.left = event.pageX - 50 + "px";

    block_4.classList.remove("active");
  }
});
block_5.addEventListener("click", function (event) {
  block_5.classList.add("active");
  event.stopPropagation();
});

block_5.addEventListener("dragend", function (event) {
  if (block_5.classList.contains("active")) {
    block_5.style.top = event.pageY - 50 + "px";
    block_5.style.left = event.pageX - 50 + "px";

    block_5.classList.remove("active");
  }
});

block_6.addEventListener("click", function (event) {
  block_6.classList.add("active");
  event.stopPropagation();
});

block_6.addEventListener("dragend", function (event) {
  if (block_6.classList.contains("active")) {
    block_6.style.top = event.pageY - 50 + "px";
    block_6.style.left = event.pageX - 50 + "px";

    block_6.classList.remove("active");
  }
});
