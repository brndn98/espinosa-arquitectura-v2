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

navContact.onclick = function () { //function for showing the contact dialog

    //enable every input field
    inputName.disabled = false;
    inputMail.disabled = false;
    inputSubject.disabled = false;
    inputMessage.disabled = false;

    //change dynamically the styling for the contact dialog container, showing the contact dialog
    contactContainer.classList.remove("contact-container-hidden");
    contactContainer.classList.add("contact-container-active");

}
function closeContact() { //function for closing the contact dialog

    eraseAnswer(); //enter the function to erase the answer text

    //change dynamically the styling for the contact dialog container, hiding the contact dialog
    contactContainer.classList.remove("contact-container-active");
    contactContainer.classList.add("contact-container-hidden");

    disableInputs(); //enter the function to disable every input

}
function eraseAnswer() { //function for erasing the answer text from the contact dialog

    if (searchAnswer.length != 0) { //if there's an element, hence an answer already, then enter
        contactContent.removeChild(searchAnswer[0]); //remove the first child from the contact dialog content, hence removing the answer text
    }

}


/////////////// I N P U T   F I E L D S ////////////////

function validateInput() { //function for validating every input field

    if (inputName.value != "" && inputMail.value != "" && inputSubject.value != "" && inputMessage.value != "") { //if every field is filled, then enter
        if (validateEmail()) { //if the e-mail is valid, then enter
            inputSubmit.classList.remove("contact-submit-hidden"); //the submit button appears
            contactChecked = true; //the contact form is filled, hence being valid
            inputSubmit.disabled = false; //enable the submit button
        } else { //if the e-mail is not valid
            if (contactChecked) { //if the contact form is valid
                inputSubmit.classList.add("contact-submit-hidden"); //the submit button hides
                contactChecked = false; //the contact form is not filled, hence not being valid
                inputSubmit.disabled = true; //disable the submit button
            }
        }
    }

}
function validateEmail() { //function for validating the e-mail address entered

    var emailValue = inputMail.value; //stores the value from the e-mail input field

    if (emailValue.match(emailValidation)) { //if the value matches the validation string, hence a valid address, then enter
        inputMail.classList.remove("email-wrong"); //remove the wrong class
        return true; //the email is valid
    } else { //else not matching, hence an invalid address
        inputMail.classList.add("email-wrong"); //apply the wrong class
        return false; //the email is not valid
    }

}

inputName.oninput = function () { //function for validating the name input field on typing
    validateInput();
}
inputMail.oninput = function () { //function for validating the email input field on typing
    validateEmail();
    validateInput();
}
inputSubject.oninput = function () { //function for validating the subject input field on typing
    validateInput();
}
inputMessage.oninput = function () { //function for validating the message input field on typing
    validateInput();
}

function disableInputs() { //function for disabling the inputs

    //empty every input field
    inputName.value = "";
    inputMail.value = "";
    inputSubject.value = "";
    inputMessage.value = "";

    if (contactContainer.className == "contact-container-hidden") { //if the contact dialog is hidden, then enter
        //disable every input field
        inputName.disabled = true;
        inputMail.disabled = true;
        inputSubject.disabled = true;
        inputMessage.disabled = true;
    }

    if (contactChecked) { //if the the contact form is all filled, then enter
        inputSubmit.classList.add("contact-submit-hidden"); //apply the hidden class to the submit button
        contactChecked = false; //make the contact form invalid
        inputSubmit.disabled = true; //disable the submit button
    }

    inputMail.classList.remove("email-wrong"); //remove the wrong class from the e-mail field to make it normal again

}