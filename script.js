// Hadith Data Store
const hadiths = {
    1: {
        title: "Wisdom of the Wise",
        content: [
            {
                arabic: "رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَآلِهِ",
                english: "The Messenger of Allah, peace be upon him and his family, said:"
            },
            {
                arabic: "صِفَةُ الْعَاقِلِ",
                english: "The characteristics of the wise person are:"
            },
            {
                arabic: "أَنْ يَحْلُمَ عَمَّنْ جَهِلَ عَلَيْهِ",
                english: "That he shows forbearance towards those who act ignorantly towards him,"
            },
            {
                arabic: "وَيَتَجَاوَزَ عَمَّنْ ظَلَمَهُ",
                english: "And he forgives those who wrong him,"
            },
            {
                arabic: "وَيَتَوَاضَعَ لِمَنْ هُوَ دُونَهُ",
                english: "And he shows humility to those below him in status,"
            },
            {
                arabic: "وَيُسَابِقَ مَنْ فَوْقَهُ فِي طَلَبِ الْبِرِّ",
                english: "And he competes with those above him in seeking righteousness,"
            },
            {
                arabic: "وَإِذَا أَرَادَ أَنْ يَتَكَلَّمَ تَدَبَّرَ فَإِنْ كَانَ خَيْرًا تَكَلَّمَ فَغَنِمَ",
                english: "And when he wishes to speak, he reflects—if it is good, he speaks and gains reward,"
            },
            {
                arabic: "وَإِنْ كَانَ شَرًّا سَكَتَ فَسَلِمَ",
                english: "And if it is evil, he remains silent and stays safe,"
            },
            {
                arabic: "وَإِذَا عَرَضَتْ لَهُ فِتْنَةٌ اسْتَعْصَمَ بِاللهِ وَأَمْسَكَ يَدَهُ وَلِسَانَهُ",
                english: "And when temptation presents itself to him, he seeks protection in Allah and restrains his hand and his tongue,"
            },
            {
                arabic: "وَإِذَا رَأَى فَضِيلَةً انْتَهَزَ بِهَا",
                english: "And when he sees virtue, he hastens towards it,"
            },
            {
                arabic: "لَا يُفَارِقُهُ الْحَيَاءُ ، وَلَا يَبْدُو مِنْهُ الْحِرْصُ",
                english: "Modesty never leaves him, and greed never appears from him,"
            },
            {
                arabic: "فَتِلْكَ عَشْرُ خِصَالٍ يُعْرَفُ بِهَا الْعَاقِلُ",
                english: "These are ten characteristics by which the wise person is known."
            }
        ]
    },
    2: {
        title: "Knowledge & Speech",
        content: [
            {
                arabic: "عَنْ أَبِي عَبْدِ الله (عليه السلام) قَالَ",
                english: "From Abī ‘Abd Allāh (peace be upon him), who said:"
            },
            {
                arabic: "إِنَّ الله خَصَّ عِبَادَهُ بِآيَتَيْنِ مِنْ كِتَابِهِ",
                english: "Allāh has endowed His servants with two verses from His Book:"
            },
            {
                arabic: "أَنْ لا يَقُولُوا حَتَّى يَعْلَمُوا",
                english: "‘That they should not speak until they know [the truth],"
            },
            {
                arabic: "وَلا يَرُدُّوا مَا لَمْ يَعْلَمُوا",
                english: "and they should not reject what they do not know.’"
            },
            {
                arabic: "وَقَالَ عَزَّ وَجَلَّ",
                english: "And He, the Almighty and Majestic, said:"
            },
            {
                arabic: "أَ لَمْ يُؤْخَذْ عَلَيْهِمْ مِيثَاقُ الْكِتَابِ",
                english: "‘Was not the covenant of the Book taken from them (referring to Quran 7:169)"
            },
            {
                arabic: "أَنْ لا يَقُولُوا عَلَى الله إِلا الْحَقَّ",
                english: "that they would not say about Allāh except the truth?’"
            },
            {
                arabic: "وَقَالَ",
                english: "And He said:"
            },
            {
                arabic: "بَلْ كَذَّبُوا بِمَا لَمْ يُحِيطُوا بِعِلْمِهِ",
                english: "‘Rather, they denied what they could not comprehend in knowledge (referring to Quran 10:39)"
            },
            {
                arabic: "وَلَمَّا يَأْتِهِمْ تَأْوِيلُهُ",
                english: "even before its interpretation had come to them.’"
            }
        ]
    },
    3: {
        title: "Brotherhood",
        content: [
            {
                arabic: "عَنْ أَبِي عَبْدِ الله (عَلَيهِ السَّلام) قَالَ",
                english: "From Abī ‘Abd Allāh (peace be upon him), who said:"
            },
            {
                arabic: "إِذَا أَحْبَبْتَ رَجُلاً فَأَخْبِرْهُ بِذَلِكَ",
                english: "If you love someone, inform them of it,"
            },
            {
                arabic: "فَإِنَّهُ أَثْبَتُ لِلْمَوَدَّةِ بَيْنَكُمَا",
                english: "for this strengthens the affection between you."
            }
        ]
    }
};

// DOM Elements
const elements = {
    landingPage: document.querySelector('.landing-page'),
    hadithViewer: document.querySelector('.hadith-viewer'),
    slider: document.querySelector('.slider'),
    hadithOptions: document.querySelectorAll('.hadith-option'),
    backBtn: document.getElementById('backBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    currentSlide: document.getElementById('currentSlide'),
    totalSlides: document.getElementById('totalSlides')
};

// State Management
let state = {
    currentHadith: null,
    currentIndex: 0,
    startX: 0,
    currentX: 0,
    isDragging: false
};

// Event Listeners
function initEventListeners() {
    elements.hadithOptions.forEach(option => {
        option.addEventListener('click', () => loadHadith(option.dataset.hadith));
    });

    elements.backBtn.addEventListener('click', () => {
        elements.landingPage.classList.add('active');
        elements.hadithViewer.classList.remove('active');
    });

    elements.prevBtn.addEventListener('click', prevSlide);
    elements.nextBtn.addEventListener('click', nextSlide);

    elements.slider.addEventListener('touchstart', handleTouchStart);
    elements.slider.addEventListener('touchmove', handleTouchMove);
    elements.slider.addEventListener('touchend', handleTouchEnd);
}

// Core Functions
function loadHadith(hadithId) {
    const hadith = hadiths[hadithId];
    if (!hadith) return;

    state.currentHadith = hadith;
    state.currentIndex = 0;
    elements.slider.innerHTML = '';

    hadith.content.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
        slideDiv.innerHTML = `
            <div class="arabic">${slide.arabic}</div>
            <div class="english">${slide.english}</div>
        `;
        elements.slider.appendChild(slideDiv);
    });

    elements.landingPage.classList.remove('active');
    elements.hadithViewer.classList.add('active');
    elements.totalSlides.textContent = hadith.content.length;
    updateSliderPosition();
    updateNavButtons();
}

function updateSliderPosition(offset = 0) {
    elements.slider.style.transform = `translateX(${-state.currentIndex * 100 + offset}%)`;
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === state.currentIndex);
    });
}

function updateNavButtons() {
    elements.prevBtn.disabled = state.currentIndex === 0;
    elements.nextBtn.disabled = state.currentIndex === state.currentHadith.content.length - 1;
    elements.currentSlide.textContent = state.currentIndex + 1;
}

function prevSlide() {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        updateSliderPosition();
        updateNavButtons();
    }
}

function nextSlide() {
    if (state.currentIndex < state.currentHadith.content.length - 1) {
        state.currentIndex++;
        updateSliderPosition();
        updateNavButtons();
    }
}

// Touch Handlers
function handleTouchStart(e) {
    state.isDragging = true;
    state.startX = e.touches[0].clientX;
    elements.slider.style.transition = 'none';
}

function handleTouchMove(e) {
    if (!state.isDragging) return;
    state.currentX = e.touches[0].clientX;
    const diff = state.currentX - state.startX;
    const offset = (diff / window.innerWidth) * 100;
    
    if ((state.currentIndex === 0 && diff > 0) || 
        (state.currentIndex === state.currentHadith.content.length - 1 && diff < 0)) return;
    
    updateSliderPosition(offset);
}

function handleTouchEnd() {
    if (!state.isDragging) return;
    state.isDragging = false;
    elements.slider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    
    const diff = state.currentX - state.startX;
    const threshold = window.innerWidth * 0.2;
    
    if (Math.abs(diff) > threshold) {
        state.currentIndex += diff > 0 ? -1 : 1;
        state.currentIndex = Math.max(0, Math.min(state.currentIndex, state.currentHadith.content.length - 1));
    }
    
    updateSliderPosition();
    updateNavButtons();
}

// Initialize App
function init() {
    initEventListeners();
    elements.slider.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
}

// Start Application
init();