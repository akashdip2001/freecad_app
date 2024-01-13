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


    
     // Function to check if the user is on a desktop device
        function isDesktop() {
            return window.innerWidth > 768; // Adjust the width based on your design
        }

        // Function to redirect to another page
        function redirectToAnotherPage() {
            window.location.href = '404.html';
        }

        // Check if the user is on a desktop and redirect if true
        window.addEventListener('DOMContentLoaded', function () {
            if (isDesktop()) {
                redirectToAnotherPage();
            }
        });
     

      // Function to disable right-click context menu
        function disableRightClick(event) {
            event.preventDefault();
        }

        // Attach the disableRightClick function to the contextmenu event
        window.addEventListener('contextmenu', disableRightClick);
});




// Glowing 🌟 effect for Subscribe button
  // Function to add glowing effect to the subscribe button
  function glowSubscribeButton() {
    const subscribeButton = document.querySelector('.bg-red-600');

    // Add glowing effect by toggling the 'glow' class
    subscribeButton.classList.add('glow');
    setTimeout(() => {
      subscribeButton.classList.remove('glow');
    }, 2000);
  }

  // Trigger the glowing effect every 10 seconds
  setInterval(glowSubscribeButton, 6000);
