// Smooth Scroll effect - https://github.com/cferdinandi/smooth-scroll
var scroll = new SmoothScroll('.scroll a[href*="#"]', {
  speed: 1200
});

// Light / Dark toggle - https://www.florin-pop.com/blog/2019/05/dark-light-theme-toggle/
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});