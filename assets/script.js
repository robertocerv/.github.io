// Año dinámico en el footer
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Menú móvil
var toggle = document.getElementById('nav-toggle');
var nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--paper)';
    nav.style.padding = '16px 32px';
    nav.style.borderBottom = '1px solid var(--line)';
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
}
