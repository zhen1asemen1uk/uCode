const images = document.querySelectorAll("img");
let deleted = document.querySelector("#deleted");
let counter = document.querySelector(".counter");

let count = 1;

const options = {
   root: null,
   rootMargin: "0px",
   threshold: 0.3
}

function handleImg(myImg, obs) {
   myImg.forEach(myImgSingle => {
      myImgSingle.intersectionRatio
      if (myImgSingle.intersectionRatio > 0.3) {
         loadImage(myImgSingle.target);
      }
   })
}

function loadImage(image) {
   image.src = image.getAttribute("data-src");
   counter.innerHTML = `${count++} images loaded from 20`;
   if (count == 21) {
      count = 20;
      counter.style.backgroundColor = "#3add3a"
      setTimeout(() => {
         counter.style.display = "none"
      }, 3000);
   }

}

const obs = new IntersectionObserver(handleImg, options);

images.forEach(img => {
   obs.observe(img);
})

