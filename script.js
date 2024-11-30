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
  