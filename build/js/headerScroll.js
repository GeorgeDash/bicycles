// Get the header and hero elements
const header = document.querySelector('header');
const hero = document.getElementById('hero');
const heroBottom = (hero.offsetTop + hero.offsetHeight) - header.offsetHeight;

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > heroBottom) {
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
}

// Add event listener to window scroll
window.addEventListener('scroll', handleScroll);

// Get the button
const backToTopBtn = document.getElementById("back-to-top");

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > heroBottom || document.documentElement.scrollTop > heroBottom) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});