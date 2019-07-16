//--------------------------------------------------------------
// Characters Scroll controls
//--------------------------------------------------------------

let parent = $('.characters-list');
let container = $('.characters-list__items');
let containerWidth = container.outerWidth();
let header = $('.characters-header').offset();
let containerInitialPosition = header.left + 16;
let items = $('.characters-list__item').length;
let item = $('.characters-list__item');
let itemWidth = item.outerWidth() + 16;
let itemsVisible = Math.floor(containerWidth / itemWidth);
let controls = $('.characters-list-controls');
let btn = $('.characters-list-controls__item');
let prev = $('.characters-list-controls__item--prev');
let next = $('.characters-list-controls__item--next');
let all = $('.characters-list-controls__item--all');
let modal = $('.characters-list-modal');
let modalClose = $('.characters-list-modal__close');
let currentSlide = 1;
let maxScroll = Math.ceil(items / itemsVisible)
let slideOffset = itemWidth * itemsVisible;

// Initial states
$(document).ready(function () {
    container.css({
        'transform': 'translate(' + containerInitialPosition + 'px)',
        'opacity': 1
    });
});

// Remove link
btn.on('click', function (e) {
    e.preventDefault();
});

// Scroll left
function scrollLefet() {
    container.css({
        'transform': 'translate(' + containerInitialPosition + 'px)'
    });
    currentSlide = 1;

}
prev.on('click', function (e) {
    scrollLefet();
});

// Scroll right
function scrollRight() {
    if (currentSlide < maxScroll) {
        container.css({
            'transform': 'translate(-' + ((currentSlide * slideOffset) - containerInitialPosition) + 'px)'
        });
        currentSlide++;
    }
}
next.on('click', function (e) {
    scrollRight();
});

// Detect swipe
var touchInit = 0;
var touchLast = 0;

document.addEventListener('touchstart', function (e) {
    touchInit = e.changedTouches[0].pageX;
}, false);

document.addEventListener('touchend', function (e) {
    touchLast = e.changedTouches[0].pageX;
    if ((touchLast - touchInit) < 0) {
        scrollRight();
    } else {
        scrollLefet();
    }
}, false);


// Display all characters
all.on('click', function (e) {
    controls.fadeOut()
    parent.fadeOut(200);
    container.css({
        'transform': 'translate(0px)'
    });
    setTimeout(() => {
        container.addClass('characters-list__items--all')
        container.addClass('container')
        parent.addClass('characters-list--all').fadeIn()
    }, 200);
});

// Open modal
item.on('click', function (e) {
    e.preventDefault();
    modal.addClass('characters-list-modal--open');
})

// Close modal
modalClose.on('click', function (e) {
    e.preventDefault();
    modal.removeClass('characters-list-modal--open');
})

// Close modal on ESC
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.removeClass('characters-list-modal--open');
    }
});


//--------------------------------------------------------------
// Modal Gallery
//--------------------------------------------------------------
let modalGalleryItem = '.characters-list-modal__gallery__item-main';
let modalGalleryItems = $(modalGalleryItem).length;
let modalGalleyActiveClass = 'characters-list-modal__gallery__item-main--active';
let modalThumbnail = '.characters-list-modal__gallery-thumbnail';
let modalThumbnailActiveClass = 'characters-list-modal__gallery-thumbnail--active';
let modalControlsPrev = '.characters-list-modal__gallery-control.btn-controls--prev';
let modalControlsNext = '.characters-list-modal__gallery-control.btn-controls--next';

// Reset first items
$(modalGalleryItem + ':first-child').addClass(modalGalleyActiveClass);
$(modalThumbnail + ':first-child').addClass(modalThumbnailActiveClass);


// Set current state
$(modalThumbnail).on('click', function() {
    $(modalGalleryItem + ':nth('+ $(this).index() + ')').addClass(modalGalleyActiveClass).siblings().removeClass(modalGalleyActiveClass);
    $(this).addClass(modalThumbnailActiveClass).siblings().removeClass(modalThumbnailActiveClass);
});

let modalSlide = 0;
function modalChangeSlide(slide) {
    $(modalGalleryItem + ':nth('+ slide + ')').addClass(modalGalleyActiveClass).siblings().removeClass(modalGalleyActiveClass);
    $(modalThumbnail + ':nth('+ slide + ')').addClass(modalThumbnailActiveClass).siblings().removeClass(modalThumbnailActiveClass);
};

$(modalControlsPrev).on('click', function() {
    if(modalSlide > 0) {
        modalSlide--;
    } else {
        modalSlide = (modalGalleryItems - 1);
    }
    modalChangeSlide(modalSlide);
});

$(modalControlsNext).on('click', function() {
    if(modalSlide < (modalGalleryItems - 1)) {
        modalSlide++;
    } else {
        modalSlide = 0;
    }
    modalChangeSlide(modalSlide);
});
