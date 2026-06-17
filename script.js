const header = document.querySelector('.site-header');
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

const syncHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
};
window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(el);
});
