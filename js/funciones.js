//formulario
const formulario = document.querySelector('#form-contacto');
const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');
const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.querySelector('#nombre');
  const correo = document.querySelector('#correo');
  const motivo = document.querySelector('#motivo');
  const mensaje = document.querySelector('#mensaje');

  // Limpiar mensajes y estilos de error previos
  nombre.setCustomValidity("");
  correo.setCustomValidity("");
  motivo.setCustomValidity("");
  mensaje.setCustomValidity("");
  
  nombre.classList.remove('campo-error');
  correo.classList.remove('campo-error');
  motivo.classList.remove('campo-error');
  mensaje.classList.remove('campo-error');

  // 1. Validación de Nombre
  if (nombre.value.trim() === '') {
    nombre.classList.add('campo-error');
    nombre.setCustomValidity("Por favor, rellene el campo faltante: Nombre completo.");
    formulario.reportValidity(); // Abre la burbuja sobre el campo nombre
    return;
  }

  // 2. Validación de Correo
  if (correo.value.trim() === '') {
    correo.classList.add('campo-error');
    correo.setCustomValidity("Por favor, rellene el campo faltante: Correo electrónico.");
    formulario.reportValidity(); // Abre la burbuja
    return;
  }

  if (!patronCorreo.test(correo.value.trim())) {
    correo.classList.add('campo-error');
    correo.setCustomValidity("No es un correo válido.");
    formulario.reportValidity(); // Abre la burbuja
    return;
  }

  // 3. Validación de Motivo (Select)
  if (motivo.value.trim() === '') {
    motivo.classList.add('campo-error');
    motivo.setCustomValidity("Por favor, elija un motivo de consulta.");
    formulario.reportValidity(); // Abre la burbuja
    return;
  }

  // 4. Validación de Mensaje (Textarea)
  if (mensaje.value.trim() === '') {
    mensaje.classList.add('campo-error');
    mensaje.setCustomValidity("Por favor, rellene el campo faltante: Mensaje.");
    formulario.reportValidity(); // Abre la burbuja
    return;
  }

  // Si todo es válido y pasa los filtros anteriores:
  mensajeConfirmacion.textContent = '¡Gracias! Recibimos tu consulta.';
  mensajeConfirmacion.style.color = "var(--verde-principal)";
  formulario.reset();
});


// --- CARRUSEL 1: Lo más vendido ---
const slider1 = document.getElementById('slider1');
const btnAtras1 = document.getElementById('btnAtras1');
const btnSigue1 = document.getElementById('btnSigue1');

btnSigue1.addEventListener('click', () => {
    slider1.scrollLeft += 270; /* 250px ancho tarjeta + 20px gap */
});
btnAtras1.addEventListener('click', () => {
    slider1.scrollLeft -= 270;
});

// --- CARRUSEL 2: Lo más barato ---
const slider2 = document.getElementById('slider2');
const btnAtras2 = document.getElementById('btnAtras2');
const btnSigue2 = document.getElementById('btnSigue2');

btnSigue2.addEventListener('click', () => {
    slider2.scrollLeft += 270; 
});
btnAtras2.addEventListener('click', () => {
    slider2.scrollLeft -= 270;
});


// 1. Muestra representativa 
const productos = [ 
    

    { id: "GA001", stock: 8, nombre: "Guitarra Acústica Folk", categoria: "Guitarras Acústicas", marca: "Yamaha", precio: "$129.990", imagen: "img/imagen1.jpg" },

    // --- GUITARRAS ELECTRICAS ---
    { id: "GE001", stock: 5, nombre: "Guitarra Eléctrica Stratocaster", categoria: "Guitarras Eléctricas", marca: "Squier", precio: "$249.990", imagen: "img/imagen2.jpg" },
   
    // --- BAJOS ELECTRICOS ---
    { id: "BA001", stock: 5, nombre: "Bajo Eléctrico 4 Cuerdas", categoria: "Bajos Eléctricos", marca: "Squier", precio: "$299.990", imagen: "img/imagen3.jpg" },

    // --- BATERiAS ---
    { id: "BT001", stock: 2, nombre: "Batería Acústica 5 piezas", categoria: "Baterías", marca: "Pearl", precio: "$599.990", imagen: "img/imagen4.jpg" },
   
    // --- TECLADOS Y PIANOS ---
    { id: "TC001", stock: 4, nombre: "Teclado Digital 61 teclas", categoria: "Teclados y Pianos", marca: "Yamaha", precio: "$249.990", imagen: "img/imagen5.jpg" },
    
    // --- AMPLIFICADORES ---
    { id: "AM001", stock: 5, nombre: "Amplificador Guitarra 15W", categoria: "Amplificadores", marca: "Fender", precio: "$99.990", imagen: "img/imagen6.jpg" },
   
    // --- MICROFONOS ---
    { id: "MI001", stock: 8, nombre: "Micrófono Dinámico Cardioide", categoria: "Micrófonos", marca: "Shure", precio: "$149.990", imagen: "img/imagen7.jpg" },

    // --- PEDALES DE EFECTOS ---
    { id: "PE001", stock: 7, nombre: "Pedal Distorsión", categoria: "Pedales de Efectos", marca: "Boss", precio: "$79.990", imagen: "img/imagen8.jpg" },
    
    // --- ACCESORIOS ---
    { id: "AC001", stock: 25, nombre: "Cuerdas Guitarra Eléctrica 09-42", categoria: "Accesorios", marca: "Ernie Ball", precio: "$8.990", imagen: "img/imagen9.webp" },

    // --- ESTUDIO Y GRABACIÓN ---
    { id: "ES001", stock: 4, nombre: "Interfaz de Audio 2x2 USB", categoria: "Estudio y Grabación", marca: "Focusrite", precio: "$149.990", imagen: "img/imagen10.webp" },
   
   
];


function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; 

    if (listaProductos.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos en esta categoría.</p>';
        return;
    }

   
    listaProductos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');


        divProducto.innerHTML = `
            <article class="tarjeta-producto">
            <figure class="img">
                            <img src="${producto.imagen}" alt="${producto.nombre}"onerror="this.src='https://via.placeholder.com/220x150?text=Sin+Imagen'">
            </figure>
            <div class="info-producto">
            <h3>${producto.nombre}</h3>
            <p class="marca">${producto.marca}</p>
            <p class="stock">Stock: <span>${producto.stock}</span></p>
              <div class="producto-footer">
                <p class="precio">${producto.precio}</p>
                <button class="comprar">Comprar</button>
              </div>
            </div>
            </article>
        `;

        contenedor.appendChild(divProducto);
    });
}

// 3. Lógica del Filtro
function inicializarFiltro() {
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (evento) => {
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
            
            evento.target.classList.add('activo');

            const categoriaSeleccionada = evento.target.getAttribute('data-categoria');

            if (categoriaSeleccionada === 'Todas') {
                renderizarProductos(productos);
            } else {
                const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
                renderizarProductos(productosFiltrados);
            }
        });
    });
}

// 4. Ejecutar al cargar la página
renderizarProductos(productos);
inicializarFiltro();

