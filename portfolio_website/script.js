// Fade-up on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".slide");
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 2500);
});