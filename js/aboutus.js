var profileContainer = document.getElementById("aboutus-content-id");

function setContainerImage(img) {
    //profileContainer.style.backgroundImage = "url(" + img + ")";
    profileContainer.style.background = "linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(" + img + ")";
    profileContainer.style.backgroundRepeat = "no-repeat";
    profileContainer.style.backgroundPosition = "center";
    profileContainer.style.backgroundSize = "cover";
    //profileContainer.style.opacity = "0.5";
}

function quitContainerImage() {
    profileContainer.style.backgroundImage = "none";
    profileContainer.style.background = "#1c1c1c";
}