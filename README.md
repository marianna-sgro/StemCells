# StemCells

## Número de Páginas — 9 páginas HTML
  ┌─────┬─────────────────────────────┬─────────────────────────────┐
  │  #  │           Archivo           │       Nombre visible        │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 1   │ index.html                  │ Home                        │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 2   │ quienes-somos.html          │ Quiénes Somos               │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 3   │ catalogo.html               │ Catálogo de Productos       │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 4   │ carrito.html                │ Carrito                     │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 5   │ mi-cuenta.html              │ Mi Cuenta                   │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 6   │ tutoriales.html             │ Tutoriales y Capacitaciones │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 7   │ contacto.html               │ Contacto                    │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 8   │ donde-encontrarnos.html     │ Dónde Encontrarnos          │
  ├─────┼─────────────────────────────┼─────────────────────────────┤
  │ 9   │ faq.html                    │ Preguntas Frecuentes        │
  └─────┴─────────────────────────────┴─────────────────────────────┘

  ---
## Funcionalidades

## Globales (presentes en todas las páginas)

  - Barra de promociones animada — 3 mensajes rotativos (CSS animation)
  - Selector de idioma ESP / EN
  - Menú hamburguesa para móvil (CSS checkbox hack)
  - Dropdown de catálogo con los 7 productos directamente accesibles
  - Buscador de productos — búsqueda en tiempo real por nombre y keywords, vincula directamente a la ficha del producto
  - Icono de cuenta — enlaza a mi-cuenta.html
  - Carrito con badge numérico — contador sincronizado via localStorage
  - Botón "Volver arriba"
  - Footer con newsletter (formulario de suscripción por email)
  - Footer con redes sociales — Instagram, Facebook, TikTok, YouTube, Pinterest

## Por página

### Home (index.html)
  - Hero con video de fondo en bucle (hero-video.mp4)
  - Franja de claims (células madre / ciencia / resultados)
  - Sección "feature split" imagen + texto
  - Bloque de cita/about
  - Carrusel de testimonios con dots navegables (scroll + click)
  - Grid de 14 logos de salones socios
  - CTA a contacto

### Catálogo (catalogo.html)
  - Grid de 7 tarjetas de producto con imagen, nombre, precio y botón
  - Control de cantidad (−/+ con estado sincronizado al carrito)
  - Modal de detalle de producto — imagen, badge, nombre, precio, descripción, ingredientes clave, modo de uso y control de cantidad; scroll cuando el contenido supera el viewport
  - Apertura por URL — ?open=slug abre el modal automáticamente (usado desde el menú dropdown y el buscador)
  - Breadcrumb de navegación

### Carrito (carrito.html)
  - Vista vacía con CTA al catálogo
  - Tabla de productos con imagen, nombre, precio unitario, control de cantidad y botón eliminar
  - Resumen del pedido — subtotal + gastos de envío (gratis si ≥ 50 €, 4,99 € si no llega)
  - Botón "Vaciar carrito"
  - Modal de checkout — formulario completo con datos de envío (nombre, dirección, país) y datos de pago (tarjeta, caducidad, CVV)
  - Al confirmar: guarda el pedido en localStorage (stemcells_orders) y muestra popup de confirmación

### Mi Cuenta (mi-cuenta.html)
  - Lista de pedidos realizados, del más reciente al más antiguo
  - Cada pedido muestra: número, fecha, productos con imagen y cantidad, desglose de envío y total
  - Pedidos como acordeones expandibles
  - Estado vacío con CTA al catálogo si no hay pedidos aún

### Quiénes Somos (quienes-somos.html)
  - Hero con imagen del equipo
  - Sección "Nuestra Historia"
  - Sección "Nuestra Misión" con cita en imagen split
  - Sección de cita de fundadora (full-bleed image + quote)
  - Grid del equipo — 2 perfiles (CEO Latam + CEO USA)
  
### Tutoriales (tutoriales.html)
  - Banner hero con imagen
  - Grid de 15 video-cards (miniaturas con play icon) — categorías: tutoriales, seminarios, capacitaciones
  - Banner "Próximas Capacitaciones" con imagen de fondo
  - Modal de inscripción a taller — formulario con nombre, tipo de usuario, teléfono, email, tipo de formación (7 opciones)
  - Popup de confirmación de inscripción
  
### Contacto (contacto.html)
  - Layout split: panel izquierdo con imagen, teléfonos (Colombia + USA) y email
  - Formulario de contacto — nombre, email, tipo de cliente (particular/salón), asunto, mensaje
  - Botón flotante de WhatsApp 
  
### Dónde Encontrarnos (donde-encontrarnos.html)
  - Mapa interactivo marcadores de salones
  - Grid de salones distribuidores