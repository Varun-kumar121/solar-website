// Check when elements come into view and add the "visible" class
window.addEventListener('scroll', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    const windowHeight = window.innerHeight;

    serviceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop <= windowHeight * 0.8) { // When the item is 80% into the viewport
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

// Intersection Observer to trigger animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.about-text');
  
    const observerOptions = {
      root: null, // use the viewport as the root
      threshold: 0.5, // trigger when 50% of the element is in view
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Trigger animation by adding 'visible'
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Observe each element
    elements.forEach(element => observer.observe(element));
  });  

// Optional JS for any additional functionality or smooth scrolling
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  