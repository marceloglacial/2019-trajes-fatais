// Toggle Open / Close 
const toggleState = (target) => {
    $(target).toggleClass('open');
}

// Open/Close Language Menu
$('.main-navbar--secondary').on('click', function () {
    toggleState(this);
});

$('.main-navbar--secondary').on('mouseleave', function () {
    $(this).removeClass('open');
});
