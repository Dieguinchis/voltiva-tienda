//----------------------------------------- Menu ----------------------------------------//
const menu = document.querySelector('#nav-links');
const abrirMenu = document.querySelector('#abrir-menu');
const cerrarMenu = document.querySelector('#cerrar-menu');
abrirMenu.addEventListener('click', () => {
  menu.classList.add('visible');
});
cerrarMenu.addEventListener('click', () => {
  menu.classList.remove('visible');
});

//---------------------- Marcar sección activa en el menú ----------------------//
// Selecciona todos los enlaces dentro de .nav-links
const navLinks = document.querySelectorAll('.nav-links a');

// Obtiene el nombre del archivo actual (por ejemplo, "productos.html")
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
  // Obtiene el href del enlace (por ejemplo, "productos.html")
  const linkPage = link.getAttribute('href');
  // Si el href coincide con la página actual, agrega la clase 'activo'
  if (linkPage === currentPage) {
    link.classList.add('activo');
  } else {
    link.classList.remove('activo');
  }
});

//---------------------------------------- Preguntas Frecuentes ----------------------------------------//
// Selecciona todos los botones de preguntas
const preguntas = document.querySelectorAll('.faq-pregunta');
// Recorre cada botón
preguntas.forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement; // El .faq-item que contiene la pregunta y respuesta
    // Alterna la clase 'activo' en el item actual
    item.classList.toggle('activo');
  });
});