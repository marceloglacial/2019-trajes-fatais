//--------------------------------------------------------------
// Characters Scroll controls
//--------------------------------------------------------------

let container = $('.characters__list-items');
let items = $('.characters__list-item').length;
let btn = $('.characters__list-controls__item');
let prev = $('.characters__list-controls__item--prev');
let next = $('.characters__list-controls__item--next');
let all = $('.characters__list-controls__item--all');
let scrollPosition = 0;

// Remove link
btn.on('click', function(e){
    e.preventDefault();
});

// Get scroll position
container.on('scroll', function() {
    scrollPosition = $(this).scrollLeft();
})

// Scroll left
prev.on('click', function(e){
    scrollPosition = scrollPosition - 300;
    container.scrollLeft(scrollPosition);
});

// Scroll right
next.on('click', function(e){
    scrollPosition = scrollPosition + 300;
    container.scrollLeft(scrollPosition);
});

// Display all characters
all.on('click', function(e){
    container.fadeOut(200);
    setTimeout(() => {
        container.toggleClass('characters__list-items--all').fadeIn() 
    }, 200);
});
