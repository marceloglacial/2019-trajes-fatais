//--------------------------------------------------------------
// Characters Scroll controls
//--------------------------------------------------------------

let container = $('.characters__list-items');
let items = $('.characters__list-items').length;
let item = $('.characters__list-item');
let btn = $('.characters__list-controls__item');
let prev = $('.characters__list-controls__item--prev');
let next = $('.characters__list-controls__item--next');
let all = $('.characters__list-controls__item--all');
let modal = $('.characters__list-modal');
let scrollPosition = 0;

// Remove link
btn.on('click', function (e) {
    e.preventDefault();
});

// Get scroll position
container.on('scroll', function () {
    scrollPosition = $(this).scrollLeft();
})

// Scroll left
prev.on('click', function (e) {
    scrollPosition = scrollPosition - 300;
    container.scrollLeft(scrollPosition);
});

// Scroll right
next.on('click', function (e) {
    scrollPosition = scrollPosition + 300;
    container.scrollLeft(scrollPosition);
});

// Display all characters
all.on('click', function (e) {
    container.fadeOut(200);
    setTimeout(() => {
        container.toggleClass('characters__list-items--all').fadeIn()
    }, 200);
});

// Open modal
item.on('click', function (e) {
    e.preventDefault();
    modal.addClass('characters__list-modal--open');
})

// Close modal on ESC
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.removeClass('characters__list-modal--open');
    }
});
