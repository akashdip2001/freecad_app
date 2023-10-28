
// Function to lock the screen orientation
function lockScreenOrientation() {
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait-primary')
            .then(function() {
                console.log('Screen orientation locked successfully');
            })
            .catch(function(error) {
                console.error('Failed to lock screen orientation: ' + error);
            });
    }
}

// Call the function to lock the screen orientation when the app loads
lockScreenOrientation();


// Load the current visit count from local storage or set it to 0 if it doesn't exist
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

// Increment the visit count
visitCount++;

// Update the visit count in the HTML
document.getElementById('visit-count').textContent = visitCount;

// Save the updated visit count in local storage
localStorage.setItem('visitCount', visitCount.toString());



function redirectToWebsite() {
    // Replace 'your-website-url' with your actual website URL
    window.location.href = 'https://akashdip2001.github.io/freecad_app/';
}


// Styles for the image slider 

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

goToSlide(currentIndex);
