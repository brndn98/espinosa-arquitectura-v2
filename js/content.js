// ELEMENTS
const menuOptions = document.querySelectorAll(".content-menu-option");
const displaySlides = document.querySelectorAll(".content-slide");

menuOptions.forEach((option, optIndex) => {
  option.addEventListener("mouseover", function() {
    hideContentSlides();
    showContentSlide(option, displaySlides[optIndex]);
  });
});

function showContentSlide(opt, sld) {
  sld.classList.add("content-slide-active");

  let isText = sld.classList.contains("content-slide-text");
  let newTop;
  let slideHeight = sld.offsetHeight / 2;

  if (isText) {
    let optHeight = opt.offsetHeight / 2;
    let optTop = opt.offsetTop + optHeight;
    newTop = optTop - slideHeight + "px";
  } else {
    newTop = "calc(50% - " + slideHeight + "px)";
  }

  sld.style.top = newTop;
}

function hideContentSlides() {
  for (let i = 0; i < displaySlides.length; i++) {
    let prevTop = displaySlides[i].offsetTop;
    displaySlides[i].style.top = "" + prevTop / 2 + "px";
    displaySlides[i].classList.remove("content-slide-active");
  }
}
