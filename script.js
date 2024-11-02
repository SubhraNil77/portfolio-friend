let slideIndex = 0; // Initialize the slide index
let autoSlideInterval;

// Function to show the current slide
function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Display the current slide
    slides[slideIndex].style.display = 'block';
}

// Function to change the slide index
function plusSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    // Update the slide index
    slideIndex += n;

    // Loop back to the first slide if at the end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if going backward
    }

    showSlides(); // Show the updated slide
    resetAutoSlide(); // Reset the auto slide timer
}

// Function to reset the auto slide timer
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear previous interval
    autoSlideInterval = setInterval(() => plusSlides(1), 7000); // Change slide every 7 seconds (adjust as needed)
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(); // Show slides on page load
    resetAutoSlide(); // Start auto sliding
});

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));
