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