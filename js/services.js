//+++++++++++++ I M A G E   L O A D I N G +++++++++++++//


var serviceImage = document.getElementsByClassName("services-img"); //handles the image inside the slide, for image loading and image positioning

var loadedImages = [ //array with high quality images for the services page images
    "url(images/services/loaded/services_09.jpg);",
    "images/services/loaded/services_03.jpg",
    "url(images/services/loaded/services_02.jpg);",
    "url(images/services/loaded/services_10.jpg);",
    "url(images/services/loaded/services_11.jpg);",
    "url(images/services/loaded/services_12.jpg);",
    "url(images/services/loaded/services_05.jpg);",
    "url(images/services/loaded/services_00.jpg);",
    "url(images/services/loaded/services_08.jpg);",
    "url(images/services/loaded/services_01.jpg);"
];

setTimeout(function () { //function for the loading of images when page is loaded
    for (var i = 0; i < serviceImage.length; i++) { //for every image
        if (i == 1) {
            serviceImage[i].src = loadedImages[i]; //set the url of the image in every image to the corresponding one on the array
        }
        serviceImage[i].style.backgroundImage = loadedImages[i];
        serviceImage[i].classList.remove("slide-img-blur"); //remove the blur class from the original image
        serviceImage[i].classList.add("slide-img-noblur");
    }
});