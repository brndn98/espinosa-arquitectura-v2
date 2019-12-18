//+++++++++++++ S L I D E R +++++++++++++//

//HANDLERS
const sliderSlides = document.querySelector(".slider-slide"); //handles the entire slider, for the translating transition
const sliderImages = document.getElementsByClassName("slide"); //handles the slide div, to know the amount of slides in the slider
const slideImage = document.getElementsByClassName("slide-img"); //handles the image inside the slide, for image loading and image positioning
const sliderDots = document.querySelectorAll(".slider-dot"); //handles the slider dots, for styling and functionality
const slideInfo = document.getElementsByClassName("slide-info"); //handles the information dialog for each slide

const sliderPrev = document.getElementById("id-slider-prev"); //handles the next button on the slider
const sliderNext = document.getElementById("id-slider-next"); //handles the previous button on the slider

//VARIABLES
let sliderCounter = 1; //index for the slide active on the slider
let sliderSize = sliderImages[0].clientWidth; //size of each slide on the slider
let slideInfoFlag = false; //flag for the information dialog

//sets slider to start with slideCounter, hence slide 1
sliderSlides.style.transform =
  "translateX(" + -sliderSize * sliderCounter + "px)";
//sets top padding for third image since relevant part from image is missing, here it affects both the actual image and the clone at the start
//slideImage[0].style.paddingTop = "15%";
//slideImage[3].style.paddingTop = "15%";
sliderDots[0].style.opacity = "0.75"; //sets the first dot as active

// S L I D E S //

function sliderNextSlide() {
  //function for showing the next slide

  if (sliderCounter < sliderImages.length - 1) {
    //if there's slides to the right of the active slide, then enter
    sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition to the slider
    sliderCounter++; //increment the index
    sliderSlides.style.transform =
      "translateX(" + -sliderSize * sliderCounter + "px)"; //transform the slider to translate the left
  }

  slideInfoHide(); //enter the funcion to hide the information dialog
}
function sliderPrevSlide() {
  //function for showing the previous slide

  if (sliderCounter > 0) {
    //if there's slides to the left of the active slide, then enter
    sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition
    sliderCounter--; //decrement the index
    sliderSlides.style.transform =
      "translateX(" + -sliderSize * sliderCounter + "px)"; //translate the slides to the right
  }

  slideInfoHide(); //enter the funcion to hide the information dialog
}
sliderSlides.addEventListener("transitionend", () => {
  //function for cycling the slider

  if (sliderImages[sliderCounter].id === "lastSlideClone") {
    //if the slider active is the last clone at the start, then enter
    sliderSlides.style.transition = "none"; //apply no transition, so it will translate instantly
    sliderCounter = sliderImages.length - 2; //set the index to the last valid slide
    sliderSlides.style.transform =
      "translateX(" + -sliderSize * sliderCounter + "px)"; //translate the slides to the left
  } else if (sliderImages[sliderCounter].id === "firstSlideClone") {
    //if the slider active is the first clone at the end, then enter
    sliderSlides.style.transition = "none"; //apply no transition
    sliderCounter = sliderImages.length - sliderCounter; //set the index to the first valid slide
    sliderSlides.style.transform =
      "translateX(" + -sliderSize * sliderCounter + "px)"; //translate the slides to the right
  }

  sliderActualDot(); //enter the function to place the active dot
});

// D O T S //

function sliderActualDot() {
  //function for placing the active slide corresponding dot

  for (var i = 0; i < sliderDots.length; i++) {
    //for every dot in the slider
    sliderDots[i].style.opacity = "0.50"; //turn the opacity down
  }
  sliderDots[sliderCounter - 1].style.opacity = "0.75"; //turn opacity up to the active slide corresponding dot
  //it subtract 1 since the valid slides start at 1, and the dots start at 0
}
sliderDots.forEach((dot, dotIndex) => {
  //function for making dots clickable

  dot.addEventListener("click", function() {
    //add the onclick event to each dot in the slider

    sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition
    sliderCounter = dotIndex + 1; //set index to the dot corresponding slide
    sliderSlides.style.transform =
      "translateX(" + -sliderSize * sliderCounter + "px)"; //translate the slides
  });
});

// I N F O   D I A L O G //

function slideInfoShow(infoSlide) {
  //function for showing the information dialog when on handheld devices

  if (document.body.clientWidth < 1025) {
    //when the screen width is less than 1000px

    if (slideInfoFlag) {
      //if the flag is set to true, hence the dialog is active, then enter
      infoSlide.style.opacity = "0"; //the dialog disappears
      slideInfoFlag = false; //the flag is set to false, hence the dialog is not active
    } else {
      infoSlide.style.opacity = "1"; //the dialog appears
      slideInfoFlag = true; //the flag is set to true, hence the dialog is active
    }
  }
}
function slideInfoHide() {
  //function for hiding the information dialog when on handheld devices

  if (document.body.clientWidth < 1000) {
    //when the screen width is less than 1000px

    for (var i = 0; i < slideInfo.length; i++) {
      //for every information dialog on the slider
      slideInfo[i].style.opacity = "0"; //set the opacity to 0, hence all dialogs disappear
      slideInfoFlag = false; //set the flag to false, hence no dialog is active
    }
  }
}

//+++++++++++++ I M A G E   L O A D I N G +++++++++++++//

/*
var loadedImages = [ //array with high quality images for the slides
    "images/slider/loaded/closeup_2019-04-14.jpg",
    "images/slider/loaded/casa_rios.jpg",
    "images/slider/loaded/casa_elizondo.jpg",
    "images/slider/loaded/closeup_2019-04-14.jpg",
    "images/slider/loaded/casa_rios.jpg"
];

setTimeout(function () { //function for the loading of images when page is loaded
    for (var i = 0; i < slideImage.length; i++) { //for every image
        slideImage[i].src = loadedImages[i]; //set the source of the image in every slide to the corresponding one on the array
        //slideImage[i].classList.remove("slide-img-blur"); //remove the blur class from the original image
        slideImage[i].classList.add("slide-img-noblur");
    }
});

if (document.body.clientWidth < 1025) {
    slideImage[1].style.transform = "translateY(0)";
    slideImage[2].style.transform = "translateY(0)";
    slideImage[4].style.transform = "translateY(0)";
}
*/

if (document.body.clientWidth >= 1025) {
  slideImage[1].style.transform = "translateY(-18%)";
  slideImage[2].style.transform = "translateY(-15%)";
  slideImage[4].style.transform = "translateY(-18%)";
}
