const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  
  // Close the drawer when a link is clicked (better mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });


  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  // Auto show first slide
  showSlide(slideIndex);

  setInterval(() =>{
    changeSlide(1);
  }, 5000);

  // 

  const elements = document.querySelectorAll("div, h1, h2, h3, p, article, section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));




    // Intersection Observer to trigger animation when visible
const counters = document.querySelectorAll('.count');
const speed = 80; // Adjust speed here

const observe = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
  observe.disconnect(); // Stops it from running multiple times
}
});
});

observe.observe(document.querySelector('.container-5'));