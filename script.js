document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const form = document.querySelector('.email-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;
      const value = String(input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        input.focus();
        input.setAttribute('aria-invalid', 'true');
        alert('Veuillez entrer une adresse e‑mail valide.');
        return;
      }
      input.removeAttribute('aria-invalid');
      alert('Merci! Nous vous avons envoyé un lien d\'essai.');
      form.reset();
    });
  }
});


