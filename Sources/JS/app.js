/* Home Page */
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.getElementsByClassName('slide');

let slideIndex = 0;
showSlides(slideIndex);

// next/prev control

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

prev.onclick = function() { plusSlides(-1) };
next.onclick = function() { plusSlides(1) };

//automatic slide

function autoSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block"
    setTimeout(autoSlides, 8000)
}
autoSlides();


