//--------------------------------------------------------------
// Characters Scroll controls
//--------------------------------------------------------------

let parent = $('.characters__list');
let container = $('.characters__list-items');
let containerWidth = container.outerWidth();
let header = $('.characters__header').offset();
let containerInitialPosition = header.left + 16;
let items = $('.characters__list-item').length;
let item = $('.characters__list-item');
let itemWidth = item.outerWidth() + 16;
let itemsVisible = Math.floor(containerWidth / itemWidth);
let controls = $('.characters__list-controls');
let btn = $('.characters__list-controls__item');
let prev = $('.characters__list-controls__item--prev');
let next = $('.characters__list-controls__item--next');
let all = $('.characters__list-controls__item--all');
let modal = $('.characters__list-modal');
let modalClose = $('.characters__list-modal__close');
let currentSlide = 1;
let maxScroll = Math.ceil(items / itemsVisible)
let slideOffset = itemWidth * itemsVisible;

// Initi
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
        container.addClass('characters__list-items--all')
        container.addClass('container')
        parent.addClass('characters__list--all').fadeIn()
    }, 200);
});

// Open modal
item.on('click', function (e) {
    e.preventDefault();
    modal.addClass('characters__list-modal--open');
})

// Close modal
modalClose.on('click', function (e) {
    e.preventDefault();
    modal.removeClass('characters__list-modal--open');
})

// Close modal on ESC
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.removeClass('characters__list-modal--open');
    }
});
