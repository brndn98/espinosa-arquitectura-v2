const navbar = document.getElementById("navbar-id");
const navbarLogo = document.getElementById("navbar-logo-img");

function scrollNavbar() {
  /*console.log(navbar.offsetTop);
    console.log(window.scrollY);*/

  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("navbar-scroll");
    navbar.classList.remove("navbar-top");
    navbarLogo.setAttribute("src", "images/logo/logo_w_720x720.png");
  } else {
    navbar.classList.add("navbar-top");
    navbar.classList.remove("navbar-scroll");
    navbarLogo.setAttribute("src", "images/logo/logo_720x720.png");
  }
}

window.addEventListener("scroll", scrollNavbar);
