document.addEventListener("DOMContentLoaded", function() {
    // Check if elements exist
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.indicators');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;

    // Add indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const translateX = -currentIndex * 100 + '%';
        slider.style.transform = `translateX(${translateX})`;
        updateIndicators();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            goToSlide(currentIndex + 1);
        }
    });

    // Initialize the slider
    goToSlide(currentIndex);
});
