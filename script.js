// Check when service items come into view and add the "visible" class
window.addEventListener('scroll', function () {
  const serviceItems = document.querySelectorAll('.service-item');
  const windowHeight = window.innerHeight;

  serviceItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop <= windowHeight * 0.8) { // Item is 80% into the viewport
          item.classList.add('visible'); // Add "visible" class for animation
      } else {
          item.classList.remove('visible'); // Remove "visible" class when out of view
      }
  });
});

// Intersection Observer to trigger animation on scroll for "about-text" elements
document.addEventListener("DOMContentLoaded", function () {
  const aboutTextElements = document.querySelectorAll('.about-text');

  // Observer options
  const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5 // Trigger when 50% of the element is in view
  };

  // Observer callback function
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible'); // Trigger animation
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  };

  // Initialize Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each "about-text" element
  aboutTextElements.forEach(element => observer.observe(element));
});

// Smooth scrolling for anchor links
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor click behavior

      // Scroll to the target section smoothly
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start' // Align target to the top of the viewport
      });
  });
});
