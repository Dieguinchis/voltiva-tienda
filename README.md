# 🛒 Tienda Online Voltiva

**Voltiva** es una tienda online ficticia desarrollada como proyecto académico. El sitio está construido con **HTML5**, **CSS3** y **JavaScript**, siguiendo buenas prácticas de semántica, accesibilidad, diseño responsive y organización de archivos. Permite visualizar y comprar productos tecnológicos como notebooks, celulares, tablets y accesorios.

---

## 📁 Estructura del proyecto

```
TIENDA-ONLINE-VOLTIVA/
│
├── assets/
│   └── img/
│       ├── audifonos_inalambricos.png
│       ├── auriculares_logitech.png
│       ├── banner_inicio.png
│       ├── banner_tienda.png
│       ├── notebook_lenovo.png
│       └── ...otros productos
│
├── css/
│   ├── style.css
│   ├── productos.css
│   ├── inicio.css
│   ├── contacto.css
│   ├── faq.css
│   └── nosotros.css
│
├── js/
│   └── script.js
│
├── inicio.html
├── productos.html
├── contacto.html
├── faq.html
└── nosotros.html
```

---

## 🌐 Tecnologías utilizadas

- **HTML5**: Estructura semántica y SEO.
- **CSS3**: Diseño visual, Flexbox y Grid, responsive.
- **JavaScript**: Interactividad, consumo de API, carrito, validación de formularios.
- **Formspree**: Envío de formulario de contacto.
- **Iconify**: Iconos modernos para UI.
- **Visual Studio Code**: Entorno de desarrollo.

---

## 🎯 Funcionalidades principales

- **Catálogo dinámico:**  
  Los productos se obtienen desde una API REST pública ([FakeStoreAPI](https://fakestoreapi.com/products/category/electronics)) y se muestran como tarjetas con imagen, nombre, descripción y precio.

- **Carrito de compras dinámico:**  
  Añade productos al carrito, edita cantidades, elimina productos y visualiza el total. El carrito se guarda en `localStorage` para persistencia.

- **Contador de carrito:**  
  El número de productos en el carrito se actualiza en tiempo real y es visible en el header.

- **Validación de formularios:**  
  El formulario de contacto valida campos requeridos y formato de correo electrónico usando JavaScript y muestra mensajes al usuario.

- **SEO y Accesibilidad:**  
  Uso de metaetiquetas, imágenes con `alt`, navegación con teclado y estructura semántica.

- **Diseño responsivo:**  
  El sitio se adapta a diferentes tamaños de pantalla (desktop, tablet, móvil).

- **Mensajes dinámicos:**  
  Notificaciones flotantes para acciones del usuario (añadir al carrito, errores de formulario, etc).

---

## 📌 Estado del proyecto

✅ Proyecto funcional y completo para presentación académica.  
🔄 Listo para futuras mejoras y expansión (más filtros, integración con APIs propias, etc).

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.

---

© 2025 Diego David Colmenares Carreño - Voltiva