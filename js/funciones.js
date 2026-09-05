



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
    // --- GUITARRAS ACÚSTICAS --- // 

    { id: "GA001", stock: 8, nombre: "Guitarra Acústica Folk", categoria: "Guitarras Acústicas", marca: "Yamaha", precio: 129990, imagen: "img/producto.jpg" },

    // --- GUITARRAS ELÉCTRICAS ---
    { id: "GE001", stock: 5, nombre: "Guitarra Eléctrica Stratocaster", categoria: "Guitarras Eléctricas", marca: "Squier", precio: 249990, imagen: "img/producto.jpg" },
   
    // --- BAJOS ELÉCTRICOS ---
    { id: "BA001", stock: 5, nombre: "Bajo Eléctrico 4 Cuerdas", categoria: "Bajos Eléctricos", marca: "Squier", precio: 299990, imagen: "img/producto.jpg" },

    // --- BATERÍAS ---
    { id: "BT001", stock: 2, nombre: "Batería Acústica 5 piezas", categoria: "Baterías", marca: "Pearl", precio: 599990, imagen: "img/producto.jpg" },
   
    // --- TECLADOS Y PIANOS ---
    { id: "TC001", stock: 4, nombre: "Teclado Digital 61 teclas", categoria: "Teclados y Pianos", marca: "Yamaha", precio: 249990, imagen: "img/producto.jpg" },
    
    // --- AMPLIFICADORES ---
    { id: "AM001", stock: 5, nombre: "Amplificador Guitarra 15W", categoria: "Amplificadores", marca: "Fender", precio: 99990, imagen: "img/producto.jpg" },
   
    // --- MICRÓFONOS ---
    { id: "MI001", stock: 8, nombre: "Micrófono Dinámico Cardioide", categoria: "Micrófonos", marca: "Shure", precio: 149990, imagen: "img/producto.jpg" },

    // --- PEDALES DE EFECTOS ---
    { id: "PE001", stock: 7, nombre: "Pedal Distorsión", categoria: "Pedales de Efectos", marca: "Boss", precio: 79990, imagen: "img/producto.jpg" },
    
    // --- ACCESORIOS ---
    { id: "AC001", stock: 25, nombre: "Cuerdas Guitarra Eléctrica 09-42", categoria: "Accesorios", marca: "Ernie Ball", precio: 8990, imagen: "img/producto.jpg" },

    // --- ESTUDIO Y GRABACIÓN ---
    { id: "ES001", stock: 4, nombre: "Interfaz de Audio 2x2 USB", categoria: "Estudio y Grabación", marca: "Focusrite", precio: 149990, imagen: "img/producto.jpg" },
   
   
];

// Función para pintar los productos en el HTML
function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; 

    if (listaProductos.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos en esta categoría.</p>';
        return;
    }

    // Recorre la lista y crea el HTML de cada tarjeta
    listaProductos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

       
        const precioFormateado = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP'
        }).format(producto.precio);

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
                <p class="precio">${precioFormateado}</p>
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