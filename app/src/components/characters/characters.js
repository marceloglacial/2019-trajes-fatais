//--------------------------------------------------------------
// Characters List
//--------------------------------------------------------------

const charListContainer = $('.characters-list');
const charListItems = $('.characters-list__items');
const charListItem = $('.characters-list__item');
const charListScrollWindow =
  Math.floor(charListItems.width() / charListItem.width()) *
  (charListItem.width() + 16);
const charListBtnPrev = $('.characters-list-controls__item--prev');
const charListBtnNext = $('.characters-list-controls__item--next');
const charListBtnAll = $('.characters-list-controls__item--all');
let charListSlide = 1;

// Scroll right
function scrollRight(screen) {
  if (
    charListSlide <=
    charListItem.length /
      Math.floor(charListItems.width() / charListItem.width())
  ) {
    charListItems.css({
      transform: 'translateX(-' + charListScrollWindow * charListSlide + 'px)',
    });
    charListSlide++;
  } else {
    if (!screen) {
      scrollLeft();
    }
  }
}

// Scroll right
function scrollLeft() {
  charListItems.css({
    transform: 'translateX(0)',
  });
  charListSlide = 1;
}

charListBtnPrev.on('click', function () {
  scrollLeft();
});
charListBtnNext.on('click', function () {
  scrollRight();
});

// Detect swipe
let touchInit = 0;
let touchLast = 0;
const touchContainer = document.querySelector('.characters-list__items');

touchContainer.addEventListener(
  'touchstart',
  function (e) {
    touchInit = e.changedTouches[0].pageX;
  },
  false
);

touchContainer.addEventListener(
  'touchend',
  function (e) {
    touchLast = e.changedTouches[0].pageX;
    if (touchLast - touchInit < 0) {
      scrollRight('mobile');
    } else {
      scrollLeft();
    }
  },
  false
);

// Display all characters
charListBtnAll.on('click', function (e) {
  scrollLeft();
  charListContainer.addClass('characters-list--all');
  $('.characters-list-controls').fadeOut();
});

//--------------------------------------------------------------
// Modal
//--------------------------------------------------------------
let charListModal = $('.characters-list-modal');
let charListModalClose = $('.characters-list-modal__close');
let charListModalItem = charListItem;

// Open modal
function openModal(e, target) {
  e.preventDefault();
  const modal = document.getElementById(target);
  modal.classList.add('characters-list-modal--open');
}

// Close modal
charListModalClose.on('click', function (e) {
  e.preventDefault();
  charListModal.removeClass('characters-list-modal--open');
});

// Close modal on ESC
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    charListModal.removeClass('characters-list-modal--open');
  }
});

//--------------------------------------------------------------
// Modal Gallery
//--------------------------------------------------------------
let modalGalleryItem = '.characters-list-modal__gallery__item-main';
let modalGalleryItems = $(modalGalleryItem).length;
let modalGalleyActiveClass =
  'characters-list-modal__gallery__item-main--active';
let modalThumbnail = '.characters-list-modal__gallery-thumbnail';
let modalThumbnailActiveClass =
  'characters-list-modal__gallery-thumbnail--active';
let modalControlsPrev =
  '.characters-list-modal__gallery-control.btn--controls-prev';
let modalControlsNext =
  '.characters-list-modal__gallery-control.btn--controls-next';

// Reset first items
$(modalGalleryItem + ':first-child').addClass(modalGalleyActiveClass);
$(modalThumbnail + ':first-child').addClass(modalThumbnailActiveClass);

// Set current state
$(modalThumbnail).on('click', function () {
  $(modalGalleryItem + ':nth(' + $(this).index() + ')')
    .addClass(modalGalleyActiveClass)
    .siblings()
    .removeClass(modalGalleyActiveClass);
  $(this)
    .addClass(modalThumbnailActiveClass)
    .siblings()
    .removeClass(modalThumbnailActiveClass);
});

let modalSlide = 0;
function modalChangeSlide(slide) {
  $(modalGalleryItem + ':nth(' + slide + ')')
    .addClass(modalGalleyActiveClass)
    .siblings()
    .removeClass(modalGalleyActiveClass);
  $(modalThumbnail + ':nth(' + slide + ')')
    .addClass(modalThumbnailActiveClass)
    .siblings()
    .removeClass(modalThumbnailActiveClass);
}

$(modalControlsPrev).on('click', function () {
  if (modalSlide > 0) {
    modalSlide--;
  } else {
    modalSlide = modalGalleryItems - 1;
  }
  modalChangeSlide(modalSlide);
});

$(modalControlsNext).on('click', function () {
  if (modalSlide < modalGalleryItems - 1) {
    modalSlide++;
  } else {
    modalSlide = 0;
  }
  modalChangeSlide(modalSlide);
});
