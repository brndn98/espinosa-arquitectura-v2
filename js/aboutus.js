var profileImages = document.getElementsByClassName("aboutus-content-img");

function setImage(id) {
    if (document.body.clientWidth > 1025) {
        if (id === "hector-profile") {
            profileImages[0].style.opacity = "1";
        } else {
            profileImages[1].style.opacity = "1";
        }
    }
}
function removeImage() {
    if (document.body.clientWidth > 1025) {
        profileImages[0].style.opacity = "0";
        profileImages[1].style.opacity = "0";
    }
}