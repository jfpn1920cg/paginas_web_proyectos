// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Función para cambiar diapositiva
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para establecer la diapositiva actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función para mostrar diapositivas
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Funciones para controles prev y next
function prevSlide() {
    plusSlides(-1);
}

function nextSlide() {
    plusSlides(1);
}
