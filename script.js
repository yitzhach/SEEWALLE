const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.editorial-section .two-column, .material-card, .use-grid article, .compact-details article').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});

document.querySelector('#consultation-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.textContent = 'Thank you. Your demo inquiry is ready; connect this form to your preferred email service before launch.';
  status.classList.add('success');
});
