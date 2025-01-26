const backgroundWrapper = document.querySelector('.background-wrapper');
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        backgroundWrapper.appendChild(particle);
    }
}

createParticles();

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mouse-x', `${x}%`);
    document.body.style.setProperty('--mouse-y', `${y}%`);
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

totalSlidesSpan.textContent = slides.length;
updateNavButtons();

// Create indicators for each slide
function createIndicators() {
    slides.forEach((slide) => {
        const indicatorContainer = document.createElement('div');
        indicatorContainer.className = 'hadith-indicators';
        
        // Create two indicators for Arabic and English text
        const arabicIndicator = document.createElement('div');
        arabicIndicator.className = 'line-indicator';
        const englishIndicator = document.createElement('div');
        englishIndicator.className = 'line-indicator';
        
        indicatorContainer.appendChild(arabicIndicator);
        indicatorContainer.appendChild(englishIndicator);
        
        slide.appendChild(indicatorContainer);
    });
}

function updateSliderPosition(offset = 0) {
    slider.style.transform = `translateX(${-currentIndex * 100 + offset}%)`;
    
    slides.forEach((slide, index) => {
        const isActive = index === currentIndex;
        slide.classList.toggle('active', isActive);
        
        // Update indicators
        if (isActive) {
            const indicators = slide.querySelectorAll('.line-indicator');
            indicators.forEach((indicator, i) => {
                indicator.classList.add('active');
                // Add slight delay to second indicator for visual effect
                if (i === 1) {
                    setTimeout(() => {
                        indicator.classList.add('active');
                    }, 200);
                }
            });
        } else {
            const indicators = slide.querySelectorAll('.line-indicator');
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            });
        }
    });
    
    // Background color transition
    const progress = currentIndex / (slides.length - 1);
    const hue1 = 220 + (progress * 240);
    const hue2 = (280 + (progress * 200)) % 360;
    const hue3 = (340 + (progress * 180)) % 360;
    const hue4 = (40 + (progress * 220)) % 360;
    
    document.body.style.background = `
        linear-gradient(45deg, 
            hsl(${hue1}, 85%, ${20 + progress * 10}%),
            hsl(${hue2}, 80%, ${25 + progress * 8}%),
            hsl(${hue3}, 75%, ${30 + progress * 6}%),
            hsl(${hue4}, 70%, ${35 + progress * 5}%)
        )
    `;
    
    document.body.style.backgroundSize = `${300 + progress * 100}% ${300 + progress * 100}%`;
    document.body.style.backgroundPosition = `${progress * 100}% ${progress * 100}%`;
}

function updateNavButtons() {
    prevBtn.disabled = currentIndex === 0;
    currentSlideSpan.textContent = currentIndex + 1;

    if (currentIndex === slides.length - 1) {
        nextBtn.style.display = 'none';
        restartBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        restartBtn.style.display = 'none';
    }
}

function handleTouchStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    slider.style.transition = 'none';
}

function handleTouchMove(e) {
    if (!isDragging) return;
    
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const offset = (diff / window.innerWidth) * 100;
    
    if ((currentIndex === 0 && diff > 0) || 
        (currentIndex === slides.length - 1 && diff < 0)) {
        return;
    }
    
    updateSliderPosition(offset);
}

function handleTouchEnd() {
    if (!isDragging) return;
    
    isDragging = false;
    slider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const diff = currentX - startX;
    const threshold = window.innerWidth * 0.2;
    
    if (Math.abs(diff) > threshold) {
        currentIndex += diff > 0 ? -1 : 1;
        currentIndex = Math.max(0, Math.min(currentIndex, slides.length - 1));
    }
    
    updateSliderPosition();
    updateNavButtons();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
        updateNavButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
        updateNavButtons();
    }
});

restartBtn.addEventListener('click', () => {
    currentIndex = 0;
    updateSliderPosition();
    updateNavButtons();
});

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);

// Initialize the first slide as active and create indicators
slides[0].classList.add('active');
createIndicators();