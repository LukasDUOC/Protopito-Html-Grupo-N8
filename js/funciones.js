
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
