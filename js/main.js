const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});
