// ELEMENTS
const menuOptions = document.querySelectorAll(".content-menu-option");
const displaySlides = document.querySelectorAll(".content-slide");

menuOptions.forEach((option, optIndex) => {
  option.addEventListener("mouseover", function() {
    hideContentSlides();
    displaySlides[optIndex].classList.add("content-slide-active");
  });
});

function hideContentSlides() {
  for (let i = 0; i < displaySlides.length; i++) {
    displaySlides[i].classList.remove("content-slide-active");
  }
}
