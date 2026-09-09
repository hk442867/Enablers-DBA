const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(button.dataset.tab)?.classList.add('active');
  });
});

document.querySelectorAll('.module-head').forEach(button => {
  button.addEventListener('click', () => button.closest('.module').classList.toggle('open'));
});

const modal = document.querySelector('.modal');
document.querySelectorAll('[data-open-video]').forEach(button => button.addEventListener('click', () => {
  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}));

const closeModal = () => {
  modal?.classList.remove('open');
  document.body.style.overflow = '';
};

document.querySelector('.modal-close')?.addEventListener('click', closeModal);
document.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

document.querySelector('.sticky-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const message = form.querySelector('.form-message');
  if (message) message.hidden = false;
});
