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


// stastitics section 
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let current = start;
    const increment = (end > start) ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Trigger the animations on page load
window.onload = function() {
    animateValue("destinations", 0, 623, 2000);    // Destinations count
    animateValue("travellers", 0, 1323, 3000);    // Travellers count
    animateValue("awards", 0, 34, 1500);           // Awards count
    animateValue("recognitions", 0, 120, 2000);    // Recognitions count
}





document.getElementById("play-button").addEventListener("click", function() {
    var video = document.getElementById("safari-video");
    video.play(); // Play the video
    });


