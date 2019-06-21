// Open/Close Language Menu
$('.main-navbar--secondary').on('mouseenter', function () {
    toggleState(this);
});

$('.main-navbar--secondary').on('mouseleave', function () {
    $(this).removeClass('open');
});

// Open/Close Mobile Menu
$('.mobile-navbar-btn').on('click', function () {
    toggleState('.mobile-navbar');
});
