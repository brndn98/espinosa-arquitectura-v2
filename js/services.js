//+++++++++++++ I M A G E   L O A D I N G +++++++++++++//


var serviceImage = document.querySelectorAll(".services-img");

var loadedImages = [ //array with high quality images for the services page images
    "images/services/loaded/services_09.jpg",
    "images/services/loaded/services_03.jpg",
    "images/services/loaded/services_07.jpg",
    "images/services/loaded/services_02.jpg",
    "images/services/loaded/services_10.jpg",
    "images/services/loaded/services_11.jpg",
    "images/services/loaded/services_12.jpg",
    "images/services/loaded/services_05.jpg",
    "images/services/loaded/services_00.jpg",
    "images/services/loaded/services_08.jpg",
    "images/services/loaded/services_01.jpg",
    "images/services/loaded/services_04.jpg"
];

setTimeout(function () {

    serviceImage.forEach((img, imgIndex) => { //function for each image

        var loadImg = document.createElement("img");
        loadImg.src = loadedImages[imgIndex];

        if (imgIndex == 1) {
            img.src = loadImg.src;
        } else if (imgIndex == 2) {
            serviceImage[imgIndex].style.background = "linear-gradient(to top, rgba(233, 233, 233, 1) 1%, rgba(0, 0, 0, 0)), url(" + loadImg.src + ")";
            serviceImage[imgIndex].style.backgroundRepeat = "no-repeat";
            serviceImage[imgIndex].style.backgroundPosition = "center";
            serviceImage[imgIndex].style.backgroundSize = "cover";
        } else if (imgIndex == 11) {
            serviceImage[imgIndex].style.background = "linear-gradient(to top, rgba(28, 28, 28, 1) 5%, rgba(0, 0, 0, 0)), url(" + loadImg.src + ")";
            serviceImage[imgIndex].style.backgroundRepeat = "no-repeat";
            serviceImage[imgIndex].style.backgroundPosition = "center";
            serviceImage[imgIndex].style.backgroundSize = "cover";
        } else {
            serviceImage[imgIndex].style.backgroundImage = "url(" + loadImg.src + ")";
        }
        serviceImage[imgIndex].classList.remove("slide-img-blur"); //remove the blur class from the original image
        serviceImage[imgIndex].classList.add("slide-img-noblur");

    });

});