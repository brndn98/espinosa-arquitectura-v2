////////////////////////////////////////////////////////////////////
//////////////////////////// I N D E X /////////////////////////////
////////////////////////////////////////////////////////////////////


//+++++++++++++ S L I D E R +++++++++++++//


//HANDLERS
var sliderSlides = document.querySelector(".slider-slide"); //handles the entire slider, for the translating transition
var sliderImages = document.getElementsByClassName("slide"); //handles the slide div, to know the amount of slides in the slider
var slideImage = document.getElementsByClassName("slide-img"); //handles the image inside the slide, for image loading and image positioning
var sliderDots = document.querySelectorAll(".slider-dot"); //handles the slider dots, for styling and functionality
var slideInfo = document.getElementsByClassName("slide-info"); //handles the information dialog for each slide

var sliderPrev = document.getElementById("id-slider-prev"); //handles the next button on the slider
var sliderNext = document.getElementById("id-slider-next"); //handles the previous button on the slider

//VARIABLES
var sliderCounter = 1; //index for the slide active on the slider
var sliderSize = sliderImages[0].clientWidth; //size of each slide on the slider
var slideInfoFlag = false; //flag for the information dialog

//sets slider to start with slideCounter, hence slide 1
sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)";
//sets top padding for third image since relevant part from image is missing, here it affects both the actual image and the clone at the start
//slideImage[0].style.paddingTop = "15%";
//slideImage[3].style.paddingTop = "15%";
sliderDots[0].style.opacity = "0.50"; //sets the first dot as active


/////////////// S L I D E S ////////////////

function sliderNextSlide(){ //function for showing the next slide
    
    if(sliderCounter < (sliderImages.length - 1)){ //if there's slides to the right of the active slide, then enter 
        sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition to the slider
        sliderCounter++; //increment the index
        sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)"; //transform the slider to translate the left
    }
    
    slideInfoHide(); //enter the funcion to hide the information dialog

}
function sliderPrevSlide(){ //function for showing the previous slide
    
    if(sliderCounter > 0){ //if there's slides to the left of the active slide, then enter
        sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition
        sliderCounter--; //decrement the index
        sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)"; //translate the slides to the right
    }

    slideInfoHide(); //enter the funcion to hide the information dialog

}
sliderSlides.addEventListener('transitionend', () => { //function for cycling the slider

    if(sliderImages[sliderCounter].id === 'lastSlideClone'){ //if the slider active is the last clone at the start, then enter
        sliderSlides.style.transition = "none"; //apply no transition, so it will translate instantly
        sliderCounter = (sliderImages.length - 2); //set the index to the last valid slide
        sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)"; //translate the slides to the left
    } else if(sliderImages[sliderCounter].id === 'firstSlideClone'){ //if the slider active is the first clone at the end, then enter
        sliderSlides.style.transition = "none"; //apply no transition
        sliderCounter = (sliderImages.length - sliderCounter); //set the index to the first valid slide
        sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)"; //translate the slides to the right
    }

    sliderActualDot(); //enter the function to place the active dot

});

/////////////// D O T S ////////////////

function sliderActualDot(){ //function for placing the active slide corresponding dot

    for(var i = 0; i < sliderDots.length; i++){ //for every dot in the slider
        sliderDots[i].style.opacity = "0.25"; //turn the opacity down
    }
    sliderDots[sliderCounter-1].style.opacity = "0.50"; //turn opacity up to the active slide corresponding dot
    //it subtract 1 since the valid slides start at 1, and the dots start at 0

}
sliderDots.forEach((dot, dotIndex) => { //function for making dots clickable

    dot.addEventListener("click", function() { //add the onclick event to each dot in the slider

        sliderSlides.style.transition = "transform 0.4s ease-in-out"; //apply transition
        sliderCounter = dotIndex+1; //set index to the dot corresponding slide
        sliderSlides.style.transform = "translateX(" + (-sliderSize * sliderCounter) + "px)"; //translate the slides
    });

});

/////////////// I N F O   D I A L O G ////////////////

function slideInfoShow(infoSlide){ //function for showing the information dialog when on handheld devices

    if(document.body.clientWidth < 1000){ //when the screen width is less than 1000px
    
        if(slideInfoFlag){ //if the flag is set to true, hence the dialog is active, then enter
            infoSlide.style.opacity = "0"; //the dialog disappears
            slideInfoFlag = false; //the flag is set to false, hence the dialog is not active
        } else {
            infoSlide.style.opacity = "1"; //the dialog appears
            slideInfoFlag = true; //the flag is set to true, hence the dialog is active
        }

    }

}
function slideInfoHide(){ //function for hiding the information dialog when on handheld devices

    if(document.body.clientWidth < 1000){ //when the screen width is less than 1000px

        for(var i = 0; i < slideInfo.length; i++){ //for every information dialog on the slider
            slideInfo[i].style.opacity = "0"; //set the opacity to 0, hence all dialogs disappear
            slideInfoFlag = false; //set the flag to false, hence no dialog is active
        }

    }

}


//+++++++++++++ I M A G E   L O A D I N G +++++++++++++//


var loadedImages = [ //array with high quality images for the slides
    "images/slider/loaded/slider_loaded_3.jpg",
    "images/slider/loaded/slider_loaded_1.jpg",
    "images/slider/loaded/slider_loaded_2.jpg",
    "images/slider/loaded/slider_loaded_3.jpg",
    "images/slider/loaded/slider_loaded_1.jpg"
];

setTimeout(function(){ //function for the loading of images when page is loaded
    for(var i = 0; i < slideImage.length; i++){ //for every image
        slideImage[i].src = loadedImages[i]; //set the source of the image in every slide to the corresponding one on the array
        slideImage[i].classList.remove("slide-img-blur"); //remove the blur class from the original image
        slideImage[i].classList.add("slide-img-noblur");
    }
});


/*
function sliderLazyLoad(){

    for(var i = 0; i < slideImage.length; i++){
        if(elementInViewport(slideImage[i])){
            slideImage[i].setAttribute('src', slideImage[i].getAttribute('data-src'));
        }
    }

}
function elementInViewport(elementVP){
    var rect = elementVP.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

setTimeout(function(){
    sliderLazyLoad();
});
*/


//+++++++++++++ C O N T A C T   F O R M +++++++++++++//


//HANDLERS
var navContact = document.getElementById("nav-contact"); //handles the contact button on the navigation bar
var contactContainer = document.getElementById("contact-container"); //handles the contact dialog container, for displaying
var contactContent = document.getElementById("contact-content"); //handles the contact dialog content, for dynamic styling

var inputName = document.getElementById("contact-name"); //handles the input field for the name on the contact dialog
var inputMail = document.getElementById("contact-email"); //handles the input field for the e-mail on the contact dialog
var inputSubject = document.getElementById("contact-subject"); //handles the input field for the subject on the contact dialog
var inputMessage = document.getElementById("contact-message"); //handles the input field for the message on the contact dialog
var inputSubmit = document.getElementById("contact-submit"); //handles the submit button on the contact dialog

var searchAnswer = document.getElementsByTagName("h2"); //handles the text for the answer after submitting the form

//VARIABLES
var emailValidation = /^(.+){1,}@[\w\.\-_]{2,}[.][\w]{2,}/; //contains the RegEx for the e-mail validation
// /^[\w\.\-_]{1,}@[\w\.\-]{6,}/; 
// /^(?=.*[@])(?=.*[.])/;
var contactChecked = false; //flag for the form validation when every field is filled

inputSubmit.disabled = true; //disables the submit button when the page loaded
disableInputs(); //enter the function to disable all the input fields


/////////////// C O N T A C T   D I A L O G ////////////////

navContact.onclick = function(){ //function for showing the contact dialog

    //enable every input field
    inputName.disabled = false;
    inputMail.disabled = false;
    inputSubject.disabled = false;
    inputMessage.disabled = false;

    //change dynamically the styling for the contact dialog container, showing the contact dialog
    contactContainer.classList.remove("contact-container-hidden"); 
    contactContainer.classList.add("contact-container-active");

}
function closeContact(){ //function for closing the contact dialog

    eraseAnswer(); //enter the function to erase the answer text

    //change dynamically the styling for the contact dialog container, hiding the contact dialog
    contactContainer.classList.remove("contact-container-active");
    contactContainer.classList.add("contact-container-hidden");

    disableInputs(); //enter the function to disable every input

}
function eraseAnswer(){ //function for erasing the answer text from the contact dialog

    if(searchAnswer.length != 0){ //if there's an element, hence an answer already, then enter
        contactContent.removeChild(searchAnswer[0]); //remove the first child from the contact dialog content, hence removing the answer text
    }

}


/////////////// I N P U T   F I E L D S ////////////////

function validateInput(){ //function for validating every input field

    if(inputName.value != "" && inputMail.value != "" && inputSubject.value != "" && inputMessage.value != ""){ //if every field is filled, then enter
        if(validateEmail()){ //if the e-mail is valid, then enter
            inputSubmit.classList.remove("contact-submit-hidden"); //the submit button appears
            contactChecked = true; //the contact form is filled, hence being valid
            inputSubmit.disabled = false; //enable the submit button
        } else { //if the e-mail is not valid
            if(contactChecked){ //if the contact form is valid
                inputSubmit.classList.add("contact-submit-hidden"); //the submit button hides
                contactChecked = false; //the contact form is not filled, hence not being valid
                inputSubmit.disabled = true; //disable the submit button
            }
        }
    }
        
}
function validateEmail(){ //function for validating the e-mail address entered

    var emailValue = inputMail.value; //stores the value from the e-mail input field

    if(emailValue.match(emailValidation)){ //if the value matches the validation string, hence a valid address, then enter
        inputMail.classList.remove("email-wrong"); //remove the wrong class
        return true; //the email is valid
    } else { //else not matching, hence an invalid address
        inputMail.classList.add("email-wrong"); //apply the wrong class
        return false; //the email is not valid
    }

}

inputName.oninput = function(){ //function for validating the name input field on typing
    validateInput();
}
inputMail.oninput = function(){ //function for validating the email input field on typing
    validateEmail();
    validateInput();
}
inputSubject.oninput = function(){ //function for validating the subject input field on typing
    validateInput();
}
inputMessage.oninput = function(){ //function for validating the message input field on typing
    validateInput();
}

function disableInputs(){ //function for disabling the inputs

    //empty every input field
    inputName.value = ""; 
    inputMail.value = "";
    inputSubject.value = "";
    inputMessage.value = "";
    
    if(contactContainer.className == "contact-container-hidden"){ //if the contact dialog is hidden, then enter
        //disable every input field
        inputName.disabled = true;
        inputMail.disabled = true;
        inputSubject.disabled = true;
        inputMessage.disabled = true;
    }

    if(contactChecked){ //if the the contact form is all filled, then enter
        inputSubmit.classList.add("contact-submit-hidden"); //apply the hidden class to the submit button
        contactChecked = false; //make the contact form invalid
        inputSubmit.disabled = true; //disable the submit button
    }

    inputMail.classList.remove("email-wrong"); //remove the wrong class from the e-mail field to make it normal again

}

/*if(inputName.value != "" && inputMail.value != "" && inputSubject.value != "" && inputMessage.value != ""){
    //alert("every field is fill");
    if(emailValue.match(emailValidation)){
        //alert("everything is right");
        inputSubmit.classList.remove("contact-submit-hidden");
        inputMail.classList.remove("email-wrong");
        contactChecked = true;
    } else {
        //alert("it does not match");
        inputMail.classList.add("email-wrong");
        if(contactChecked){
            inputSubmit.classList.add("contact-submit-hidden");
            contactChecked = false;
        }
    }
}*/