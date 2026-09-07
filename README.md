

# Proyecto Semestral — Equipo 8
Proyecto semestral para el curso Desarrollo FullStack 2 — Duoc UC 2026.
Sonido Vivo es una tienda especializada en instrumentos musicales, equipos de sonido y accesorios para músicos, ubicada en Viña del Mar, Región de Valparaíso. Tiene 11 años de funcionamiento y es atendida por el dueño y dos vendedores.



## 1. Estructura del Proyecto
```text
prototipo-sonido-vivo/
├── index.html            # Página principal y catálogo de productos
├── formulario.html       # Registro de clientes y contacto
├── css/
│   └── style.css         # Estilos globales y diseño responsivo
├── js/
│   └── funciones.js      # Validaciones e interactividad del DOM
└── img/                  # Activos visuales e imágenes de instrumentos
```


## 2. Tecnologías utilizadas

| Tecnología | Versión | Para qué se usa |
| --- | --- | --- |
| **HTML ** | 5 | Para la estructura semántica. |
| **CSS** | 3 | Para el diseño visual y diseño responsivo. |
| **JavaScript** | JDK 26 | Para la lógica de filtrado, manipulación del DOM, carruseles y validación de formularios. |


## 3. ##  Características y Funcionalidades

1. **Navegación e Interconexión:** El sitio web debe contar con un menú de navegación que permita desplazarse de manera coherente y fluida entre las distintas vistas y secciones (Inicio, Productos, Contacto) mediante hipervínculos funcionales.

2. **Catálogo de Productos Interactivo:** El sistema debe mostrar los instrumentos musicales mediante tarjetas individuales renderizadas dinámicamente. Cada tarjeta debe incluir imagen, nombre, marca, descripción, stock disponible y precio.

3. **Filtros de Búsqueda:** Se debe implementar un panel lateral de categorías que permita al usuario filtrar el catálogo en tiempo real (por ejemplo, Guitarras, Baterías, Amplificadores) utilizando JavaScript, sin necesidad de recargar la página.

4. **Exhibición de productos Dinámica (Carruseles):** La página principal debe incluir componentes de carrusel con desplazamiento horizontal controlado por botones. Estos se destinarán a exhibir colecciones específicas como "Lo más vendido" y "Lo más barato".

5. **Gestión Visual de Stock:** El sistema debe reaccionar a la intención de compra del usuario. Al hacer clic en "Comprar", se descontará una unidad del inventario visible; al llegar a cero, el sistema bloqueará la acción y cambiará el estado visual a "Agotado".

6. **Validación Estricta de Formularios:** El formulario de contacto debe validar la entrada del usuario en tiempo real mediante JavaScript, previniendo el envío de datos incompletos o incorrectos. Se deben desplegar mensajes de error claros, específicos y contextuales ante correos inválidos, números telefónicos mal formateados o campos vacíos.



## 4 Instalación y Ejecución Local

Sigue estos pasos para clonar el proyecto y visualizarlo localmente utilizando la extensión **Live Server** en Visual Studio Code:

### Paso 1: Clonar el repositorio
Abre tu terminal (Git Bash, CMD o la terminal de VS Code) y ejecuta el siguiente comando:
```bash
git clone https://github.com
```

### Paso 2: Abrir el proyecto en VS Code
1. Abre **Visual Studio Code**.
2. Ve a **File** > **Open Folder...** (Archivo > Abrir carpeta).
3. Selecciona la carpeta raíz llamada `prototipo-sonido-vivo`.

### Paso 3: Instalar la extensión Live Server


### Paso 4: Levantar el proyecto
Una vez instalada la extensión, tienes dos formas de ejecutar el prototipo:
* **Opción A:** En la esquina inferior derecha de la pantalla de VS Code, haz clic en el botón que dice **Go Live**.

Se abrirá automáticamente una pestaña en tu navegador web predeterminado.

