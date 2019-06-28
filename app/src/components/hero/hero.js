//--------------------------------------------------------------
// Hero Slider
//--------------------------------------------------------------

// Set variables
let slidesContainer = $('.hero-slides');
let slidesNumber = $('.hero-slide').length;
let slideIndex = 1;
let sliderControls = $('.hero-slider-controls');
let sliderControlsItem = $('.hero-slider-controls-item');
let sliderControlsNext = $('.hero-slider-controls-next');

// Add Slider Controls
for (let index = 1; index <= slidesNumber; index++) {
    sliderControls.prepend('<span class="hero-slider-controls-item"></span>');
}
for (let index = 1; index <= slidesNumber; index++) {
    $('.hero-slider-controls-item:nth-child(' + index + ')').on('click', function() {
        changeSlide(index);
    });
}


// Display fisrt slide
$('.hero-slide:nth-child(' + slideIndex + ')').fadeIn();
$('.hero-slider-controls-item:nth-child(' + slideIndex + ')').addClass('active');

// Change slides
function changeSlide(n) {
    // Get next slide
    slideIndex++;
    if (n) {
        slideIndex = n;
    }

    // Hide all other slides
    $('.hero-slide:not(:nth-child(' + slideIndex + '))').hide();

    // Chack if is the last slide
    if (slideIndex > slidesNumber) {
        slideIndex = 1;
    }
    // Active indicator
    $('.hero-slider-controls-item').removeClass('active');
    $('.hero-slider-controls-item:nth-child(' + slideIndex + ')').addClass('active');

    // Display current slide
    $('.hero-slide:nth-child(' + slideIndex + ')').fadeIn();
};

// Actions
sliderControlsNext.click(function () {
    changeSlide();
});
