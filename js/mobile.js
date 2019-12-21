setTimeout(fixHeight, 3000);

function fixHeight() {
  let vh = window.innerHeight * 0.01;
  let vhValue = vh + "px";

  document.documentElement.style.setProperty("--vh", vhValue);
}
