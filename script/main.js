// Navabar
const buttonNav = document.querySelector(".button-nav");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("li");

buttonNav.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    buttonNav.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    buttonNav.classList.remove("active");
    navMenu.classList.remove("active");
}
// Navbar

let carouselIndex = 1;
showCarousel(carouselIndex);

function currentCarousel(n) {
    showCarousel(carouselIndex = n);
}

function showCarousel(n) {
    let slides = document.getElementsByClassName("imageCarousel");
    // let i;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    carouselIndex++

    if (carouselIndex > slides.length) {carouselIndex = 1}
    slides[carouselIndex-1].style.display = "block";
    setTimeout(showCarousel, 5000);
}