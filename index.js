let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval = setInterval(autoSlide, 5000); // Automatically slide every 5 seconds

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
    resetAutoSlide(); // Reset the interval if manually changed
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
    resetAutoSlide(); // Reset the interval if manually changed
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function autoSlide() {
    changeSlide(1);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000); // Restart the automatic sliding
}
