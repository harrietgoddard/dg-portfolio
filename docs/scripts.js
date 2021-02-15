// sticky header

const header = document.querySelector('.header-main');
const stickyHeader = document.querySelector('.header-sticky');

document.addEventListener('scroll', function() {
  const headerHeight = header.offsetHeight;

  if(pageYOffset > headerHeight) {
    stickyHeader.classList.add('visible');
    stickyHeader.style.transition = 'all 0.5s ease';
  } else {
    stickyHeader.classList.remove('visible');
  }

  if(pageYOffset < 10) {
    stickyHeader.style.display = 'none';
  } else {
    stickyHeader.style.display = 'block';
  }
});

// mobile drawer

const mobileOpenButtons = document.querySelectorAll('.mobile-drawer-open');
const mobileCloseButton = document.querySelector('.mobile-drawer__close');
const mobileDrawer = document.querySelector('.mobile-drawer');

mobileOpenButtons.forEach(function(mobileOpenButton) {
  mobileOpenButton.addEventListener('click', function() {
    mobileDrawer.style.transition = 'all 0.5s ease';
    mobileDrawer.style.transform = 'translateX(0)';
  });
});

mobileCloseButton.addEventListener('click', function() {
  mobileDrawer.style.transform = '';
});

// pop up images

const images = document.querySelectorAll('.js-img');
const popUpOverlay = document.querySelector('.pop-up-overlay');
const popUpContainer = document.querySelector('.pop-up-container');
const popUpClose = document.querySelector('.pop-up-close');

// open pop up

function openPopUp(image) {
  let popUpImage = image.cloneNode(true);
  popUpImage.classList.remove('gallery__image', 'gallery__image--wide', 'centralize');
  popUpContainer.appendChild(popUpImage);
  popUpOverlay.style.display = 'flex';
  popUpOverlay.style.paddingTop = `${header.offsetHeight}px`;
}

images.forEach(function(image) {
  image.addEventListener('click', function() {
    openPopUp(image);
  })
});

// close pop up

function closePopUp() {
  const popUpImage = popUpOverlay.getElementsByTagName('img');
  popUpOverlay.style.display = '';
  popUpContainer.removeChild(popUpImage[0]);
}

popUpClose.addEventListener('click', function() {
  closePopUp();
})

popUpOverlay.addEventListener('click', function(e) {
  if(e.target == popUpOverlay) {
    closePopUp();
  }
})