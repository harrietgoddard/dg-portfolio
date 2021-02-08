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
});