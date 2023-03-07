const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const downloadBtn = document.querySelector(".download");

let counter = 0;

// Set first image opacity to 1
images[counter].classList.add("active");

// Previous button functionality
prevBtn.addEventListener("click", () => {
  images[counter].classList.remove("active");
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  images[counter].classList.add("active");
});

// Next button functionality
nextBtn.addEventListener("click", () => {
  images[counter].classList.remove("active");
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  images[counter].classList.add("active");
});


