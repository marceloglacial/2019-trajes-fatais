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

$('.mobile-navbar a').on('click', function () {
  toggleState('.mobile-navbar');
});

// Smooth scrolling
$(".main-navbar-item a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if
  });
