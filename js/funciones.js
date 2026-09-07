// FORMULARIO DE CONTACTO
const formulario = document.querySelector('#form-contacto');

if (formulario) {
    const mensajeConfirmacion = document.querySelector('#mensaje-confirmacion');
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patronTelefono = /^\+?\d{9,13}$/;

  

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre');
        const correo = document.querySelector('#correo');
        const motivo = document.querySelector('#motivo');
        const mensaje = document.querySelector('#mensaje');
        const telefono = document.querySelector('#telefono');

        nombre.setCustomValidity("");
        correo.setCustomValidity("");
        telefono.setCustomValidity("");
        motivo.setCustomValidity("");
        mensaje.setCustomValidity("");
        
        
        nombre.classList.remove('campo-error');
        correo.classList.remove('campo-error');
        telefono.classList.remove('campo-error');
        motivo.classList.remove('campo-error');
        mensaje.classList.remove('campo-error');
        
        if (nombre.value.trim() === '') {
            nombre.classList.add('campo-error');
            nombre.setCustomValidity("Por favor, rellene el campo faltante: nombre");
            formulario.reportValidity();
            return;
        }

        if (correo.value.trim() === '') {
            correo.classList.add('campo-error');
            correo.setCustomValidity("Por favor, rellene el campo faltante: Correo electrónico.");
            formulario.reportValidity();
            return;
        }

        if (!patronCorreo.test(correo.value.trim())) {
            correo.classList.add('campo-error');
            correo.setCustomValidity("No es un correo válido.");
            formulario.reportValidity();
            return;
        }

        if (telefono.value.trim() == ''){
            telefono.classList.add('campo-error');
            telefono.setCustomValidity("Por favor, rellene el campo faltante: Teléfono.");
            formulario.reportValidity();
            return;
        }
        if (!patronTelefono.test(telefono.value.trim())){
            telefono.classList.add('campo-error');
            telefono.setCustomValidity("No es un numero de teléfono válido.")
            formulario.reportValidity();
            return;
        }

        if (motivo.value.trim() === '') {
            motivo.classList.add('campo-error');
            motivo.setCustomValidity("Por favor, elija un motivo de consulta.");
            formulario.reportValidity();
            return;
        }

        if (mensaje.value.trim() === '') {
            mensaje.classList.add('campo-error');
            mensaje.setCustomValidity("Por favor, rellene el campo faltante: Mensaje.");
            formulario.reportValidity();
            return;
        }

        mensajeConfirmacion.textContent = '¡Gracias! Recibimos tu consulta.';
        mensajeConfirmacion.style.color = "var(--verde-principal)";
        formulario.reset();
    });
}


//  CARRUSELES
const slider1 = document.getElementById('slider1');
const btnAtras1 = document.getElementById('btnAtras1');
const btnSigue1 = document.getElementById('btnSigue1');

if (slider1 && btnAtras1 && btnSigue1) {
    btnSigue1.addEventListener('click', () => {
        slider1.scrollLeft += 270; 
    });
    btnAtras1.addEventListener('click', () => {
        slider1.scrollLeft -= 270;
    });
}

const slider2 = document.getElementById('slider2');
const btnAtras2 = document.getElementById('btnAtras2');
const btnSigue2 = document.getElementById('btnSigue2');

if (slider2 && btnAtras2 && btnSigue2) {
    btnSigue2.addEventListener('click', () => {
        slider2.scrollLeft += 270; 
    });
    btnAtras2.addEventListener('click', () => {
        slider2.scrollLeft -= 270;
    });
}


// BASE DE DATOS Y RENDERIZADO
const productos = [ 
    { id: "GA001", stock: 8, nombre: "Guitarra Acústica Folk", categoria: "Guitarras Acústicas", marca: "Yamaha", precio: "$129.990", imagen: "img/imagen1.jpg" },
    { id: "GE001", stock: 5, nombre: "Guitarra Eléctrica Stratocaster", categoria: "Guitarras Eléctricas", marca: "Squier", precio: "$249.990", imagen: "img/imagen2.jpg" },
    { id: "BA001", stock: 5, nombre: "Bajo Eléctrico 4 Cuerdas", categoria: "Bajos Eléctricos", marca: "Squier", precio: "$299.990", imagen: "img/imagen3.jpg" },
    { id: "BT001", stock: 2, nombre: "Batería Acústica 5 piezas", categoria: "Baterías", marca: "Pearl", precio: "$599.990", imagen: "img/imagen4.jpg" },
    { id: "TC001", stock: 4, nombre: "Teclado Digital 61 teclas", categoria: "Teclados y Pianos", marca: "Yamaha", precio: "$249.990", imagen: "img/imagen5.jpg" },
    { id: "AM001", stock: 5, nombre: "Amplificador Guitarra 15W", categoria: "Amplificadores", marca: "Fender", precio: "$99.990", imagen: "img/imagen6.jpg" },
    { id: "MI001", stock: 8, nombre: "Micrófono Dinámico Cardioide", categoria: "Micrófonos", marca: "Shure", precio: "$149.990", imagen: "img/imagen7.jpg" },
    { id: "PE001", stock: 7, nombre: "Pedal Distorsión", categoria: "Pedales de Efectos", marca: "Boss", precio: "$79.990", imagen: "img/imagen8.jpg" },
    { id: "AC001", stock: 25, nombre: "Cuerdas Guitarra Eléctrica 09-42", categoria: "Accesorios", marca: "Ernie Ball", precio: "$8.990", imagen: "img/imagen9.webp" },
    { id: "ES001", stock: 4, nombre: "Interfaz de Audio 2x2 USB", categoria: "Estudio y Grabación", marca: "Focusrite", precio: "$149.990", imagen: "img/imagen10.webp" }
];

function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    
    if (!contenedor) return; 

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

// LÓGICA DE FILTRO
function inicializarFiltro() {
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    
    if (botonesFiltro.length === 0) return;

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

// INICIALIZACIÓN PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos(productos);
    inicializarFiltro();

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('comprar')) {
            const tarjeta = e.target.closest('.tarjeta-producto');
            
            if (tarjeta) {
                const stockElemento = tarjeta.querySelector('.stock span');
                
                if (stockElemento) {
                    let stockActual = parseInt(stockElemento.textContent, 10);
                    
                    if (stockActual > 0) {
                        stockActual--;
                        stockElemento.textContent = stockActual;
                        
                        if (stockActual === 0) {
                            e.target.disabled = true;
                            e.target.textContent = 'Agotado';
                        }
                    } else {
                        alert('¡Producto agotado!');
                    }
                }
            }
        }
    });
});