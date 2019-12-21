// ELEMENTS
const menuOptions = document.querySelectorAll(".content-menu-option");
const displaySlides = document.querySelectorAll(".content-slide");
const contentMenu = document.getElementById("content-menu");
const closeContentMenu = document.getElementById("content-close");

const iconMenuActive = '<i class="fas fa-bars" style="font-size: 0.5em"></i>';

menuOptions.forEach((option, optIndex) => {
  option.addEventListener("mouseover", function() {
    hideContentSlides();
    if (document.body.clientWidth < 1025) {
      toggleContent();
    }
    showContentSlide(option, displaySlides[optIndex]);
  });
});

function showContentSlide(opt, sld) {
  sld.classList.add("content-slide-active");

  if (document.body.clientWidth >= 1025) {
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
}

function hideContentSlides() {
  for (let i = 0; i < displaySlides.length; i++) {
    if (document.body.clientWidth >= 1025) {
      let prevTop = displaySlides[i].offsetTop;
      displaySlides[i].style.top = "" + prevTop / 2 + "px";
    }
    displaySlides[i].classList.remove("content-slide-active");
  }
}

function toggleContent() {
  while (closeContentMenu.firstChild) {
    closeContentMenu.removeChild(closeContentMenu.firstChild);
  }

  if (closeContentMenu.classList.contains("content-menu-active")) {
    contentMenu.style.left = "-35%";
    closeContentMenu.classList.remove("content-menu-active");
    closeContentMenu.style.transform = "rotate(0)";
    closeContentMenu.innerHTML = iconMenuActive;
  } else {
    contentMenu.style.left = "0%";
    closeContentMenu.classList.add("content-menu-active");
    closeContentMenu.style.transform = "rotate(45deg)";
    closeContentMenu.innerHTML = "+";
  }
}
