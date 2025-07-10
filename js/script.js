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
//---------------------------------------- Validación de Formulario ----------------------------------------//
// Selecciona el formulario en la página
const form = document.querySelector('form');

// Si existe el formulario, seguimos con la validación
if (form) {
  // Selecciona los campos de entrada por su tipo
  const nombre = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const mensaje = form.querySelector('textarea');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    let valido = true;

    // Valida que el nombre no esté vacío
    if (!nombre.value.trim()) {
      mostrarMensaje('El nombre es obligatorio');
      valido = false;
    }

    if (!email.checkValidity()) {
      mostrarMensaje('Correo electrónico inválido');
      valido = false;
    }

    // Valida que el mensaje no esté vacío
    if (!mensaje.value.trim()) {
      mostrarMensaje('El mensaje es obligatorio');
      valido = false;
    }

    // Si alguna validación falla, no se envía el formulario
    if (!valido) return;

    // Si todas las validaciones pasan, se simula el envío del formulario
    mostrarMensaje('¡Mensaje enviado! Te responderemos pronto.');
    form.reset(); // Limpia el formulario después de enviar
  });
}

function mostrarMensaje(msg) {
  let aviso = document.getElementById('mensaje-aviso');
  if (aviso) aviso.remove();
  aviso = document.createElement('div');
  aviso.id = 'mensaje-aviso';
  aviso.textContent = msg;
  aviso.style.position = 'fixed';
  aviso.style.bottom = '1rem';
  aviso.style.right = '1rem';
  aviso.style.background = '#7662df';
  aviso.style.color = '#fff';
  aviso.style.padding = '1rem 2rem';
  aviso.style.borderRadius = '1rem';
  aviso.style.zIndex = '9999';
  document.body.appendChild(aviso);
  setTimeout(() => aviso.remove(), 2000);
}

// ------------------- Carrito de compras completo -------------------

// Selecciona el botón del carrito y el contador
const carritoBtn = document.getElementById('carrito-btn');
const carritoContador = document.getElementById('carrito-contador');

// Selecciona el contenedor de productos
const productosGrid = document.querySelector('.productos-grid');

// Carrito en memoria y persistente
let carrito = JSON.parse(localStorage.getItem('carritoVoltiva')) || [];

// Actualiza el contador del carrito
function actualizarContadorCarrito() {
  if (carritoContador) {
    carritoContador.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }
  localStorage.setItem('carritoVoltiva', JSON.stringify(carrito));
}
actualizarContadorCarrito();

// Array de productos tecnológicos personalizados
const productosVoltiva = [
  {
    id: 1,
    title: "Notebook Lenovo IdeaPad 3",
    description: "Intel i5, 8GB RAM, SSD 256GB, 15.6'' FHD.",
    image: "assets/img/notebook_lenovo.png",
    price: 499999
  },
  {
    id: 2,
    title: "Smartphone Samsung Galaxy S23",
    description: "6.1'' AMOLED, 128GB, 50MP, 5G.",
    image: "assets/img/samsung_s23.png",
    price: 799999
  },
  {
    id: 3,
    title: "Tablet Xiaomi Pad 6",
    description: "11'' 2.8K, 128GB, Snapdragon 870.",
    image: "assets/img/xiaomi_pad6.png",
    price: 349999
  },
  {
    id: 4,
    title: "Auriculares Inalámbricos JBL",
    description: "Bluetooth, cancelación de ruido, 30h.",
    image: "assets/img/jbl_auriculares.png",
    price: 69999
  },
  {
    id: 5,
    title: "Teclado Mecánico Redragon",
    description: "RGB, switches blue, compacto.",
    image: "assets/img/redragon_teclado.png",
    price: 39999
  },
  {
    id: 6,
    title: "Mouse Logitech G203",
    description: "RGB, 8000 DPI, cableado.",
    image: "assets/img/logitech_g203.png",
    price: 24999
  }
];

// Función para mostrar productos personalizados
async function cargarProductos() {
  if (!productosGrid) return;
  productosGrid.innerHTML = '<p>Cargando productos...</p>';
  try {
    // Aquí se usa el endpoint:
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const productos = await res.json();
    productosGrid.innerHTML = '';
    productos.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'destacados-item';
      card.innerHTML = `
        <div class="destacados-imagen">
          <img src="${prod.image}" alt="${prod.title}">
        </div>
        <h4>${prod.title}</h4>
        <p>${prod.description.substring(0, 60)}...</p>
        <div class="destacados-footer">
          <span class="destacados-precio">$${prod.price}</span>
          <a href="#" class="destacados-boton" data-id="${prod.id}">Añadir al carrito</a>
        </div>
      `;
      productosGrid.appendChild(card);
    });
  } catch (e) {
    productosGrid.innerHTML = '<p>Error al cargar productos.</p>';
  }
}
if (productosGrid) cargarProductos();

// Evento para añadir productos al carrito
productosGrid?.addEventListener('click', async e => {
  if (e.target.classList.contains('destacados-boton')) {
    e.preventDefault();
    const id = e.target.dataset.id;
    let producto = carrito.find(p => p.id == id);
    if (producto) {
      producto.cantidad++;
    } else {
      // Busca el producto en el array local
      const prod = productosVoltiva.find(p => p.id == id);
      if (prod) {
        carrito.push({
          id: prod.id,
          title: prod.title,
          price: prod.price,
          image: prod.image,
          cantidad: 1
        });
      }
    }
    actualizarContadorCarrito();
    mostrarMensaje('Producto añadido al carrito');
  }
});

// Mostrar el modal del carrito al hacer clic en el botón
if (carritoBtn) carritoBtn.addEventListener('click', mostrarCarrito);

function mostrarCarrito() {
  let modal = document.getElementById('carrito-modal');
  if (modal) modal.remove();
  modal = document.createElement('div');
  modal.id = 'carrito-modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.right = '0';
  modal.style.width = '350px';
  modal.style.background = '#fff';
  modal.style.boxShadow = '0 2px 12px #0003';
  modal.style.height = '100vh';
  modal.style.overflowY = 'auto';
  modal.style.zIndex = '9999';
  modal.style.padding = '1.5rem';
  modal.innerHTML = `<h3 style="color:#7662df;">Carrito de compras</h3>
    <button id="cerrar-carrito" style="float:right;background:none;border:none;font-size:1.3rem;cursor:pointer;color:#7662df;">✖</button>
    <div id="carrito-lista"></div>
    <div id="carrito-total" style="font-weight:bold;margin-top:1rem;"></div>
    <button id="finalizar-compra" style="margin-top:1.5rem;background:#7662df;color:#fff;border:none;padding:0.7rem 2rem;border-radius:2rem;font-size:1rem;cursor:pointer;">Finalizar compra</button>
  `;
  document.body.appendChild(modal);

  document.getElementById('cerrar-carrito').onclick = () => modal.remove();
  document.getElementById('finalizar-compra').onclick = () => {
    mostrarMensaje('¡Compra simulada con éxito!');
    carrito = [];
    actualizarContadorCarrito();
    modal.remove();
  };
  renderizarCarrito();
}

function renderizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  if (!lista) return;
  if (carrito.length === 0) {
    lista.innerHTML = '<p>El carrito está vacío.</p>';
    document.getElementById('carrito-total').textContent = '';
    return;
  }
  lista.innerHTML = '';
  carrito.forEach(prod => {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.marginBottom = '1rem';
    item.innerHTML = `
      <img src="${prod.image}" alt="${prod.title}" width="40" style="margin-right:0.5rem;border-radius:0.5rem;">
      <span style="flex:1;">${prod.title}</span>
      <input type="number" min="1" value="${prod.cantidad}" style="width:40px;margin:0 0.5rem;" data-id="${prod.id}" class="carrito-cantidad">
      <span>$${(prod.price * prod.cantidad).toFixed(2)}</span>
      <button data-id="${prod.id}" class="carrito-eliminar" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:#7662df;margin-left:0.5rem;">🗑️</button>
    `;
    lista.appendChild(item);
  });
  lista.querySelectorAll('.carrito-cantidad').forEach(input => {
    input.addEventListener('change', e => {
      const id = e.target.dataset.id;
      const nuevaCantidad = parseInt(e.target.value);
      const prod = carrito.find(p => p.id == id);
      if (prod && nuevaCantidad > 0) {
        prod.cantidad = nuevaCantidad;
        actualizarContadorCarrito();
        renderizarCarrito();
      }
    });
  });
  lista.querySelectorAll('.carrito-eliminar').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      carrito = carrito.filter(p => p.id != id);
      actualizarContadorCarrito();
      renderizarCarrito();
    });
  });
  const total = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  document.getElementById('carrito-total').textContent = `Total: $${total.toFixed(2)}`;
}