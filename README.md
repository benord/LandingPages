# LandingPages

Colección de prototipos y maquetas web modernas, responsivas y de alto impacto visual.

---

## ☕ Origen & Co. | Prototipo Web para Cafetería & Bistro

Maqueta web moderna, ligera y responsiva (*Mobile-First*) para cafetería de especialidad y restaurante local. Diseñada con una arquitectura profesional desacoplada en tres capas independientes: **HTML5 Semántico**, **CSS3 Modular con Design Tokens** y **JavaScript Vanilla (ES6+)**.

---

### 📁 Estructura del Proyecto

```text
maquetasPages/
├── css/
│   └── styles.css        # Tokens de diseño, variables CSS, micro-interacciones y accesibilidad
├── js/
│   └── app.js            # Lógica de catálogo, carrito reactivo, persistencia y WhatsApp API
├── index.html            # Estructura semántica, limpia y accesible (sin scripts inline)
├── README.md             # Documentación del proyecto
└── .gitignore            # Exclusiones de control de versiones
```

---

### 🚀 Características y Arquitectura

1. **Separación de Responsabilidades**:
   - **`index.html`**: Marcado semántico enriquecido con metadatos completos para SEO, Open Graph para previsualizaciones en redes/WhatsApp, atributos de accesibilidad WAI-ARIA (`role="dialog"`, `aria-live`, etc.) y sin código JavaScript ni estilos en línea.
   - **`css/styles.css`**: Hoja de estilos con variables nativas en `:root` (paleta de colores café y ámbar, tipografías, elevaciones de sombras), animaciones sutiles, scrollbars personalizados y soporte para reducción de movimiento (`prefers-reduced-motion`).
   - **`js/app.js`**: Arquitectura orientada a eventos con delegación de clicks (`data-action`), búsquedas insensibles a acentos y mayúsculas, persistencia segura en `localStorage`, control de teclado (tecla `Escape`) y formateador de pedidos.

2. **Funcionalidades de Usuario**:
   - **Encabezado interactivo:** Logotipo vectorial, nombre de autor, indicador en tiempo real con efecto ping ("Abierto Ahora"), ubicación y horario.
   - **Buscador en tiempo real:** Filtra rápidamente productos por nombre y descripción, tolerante a acentos ortográficos.
   - **Pestañas de categorías dinámicas:** Exploración por secciones (*Todos*, *Cafés & Bebidas*, *Comidas / Platos*, *Postres*, *Especiales*).
   - **Tarjetas de productos:** Fotografías optimizadas, badges de destacados, precios en COP formateados internacionalmente y controles de cantidad.
   - **Barra de carrito flotante:** Notificación inferior reactiva que refleja la cantidad de ítems y el subtotal acumulado.
   - **Modal de Checkout & Entrega:**
     - Modificación interactiva de cantidades y opción de vaciado total.
     - Selector de modalidad: *A Domicilio* (con cálculo automático de envío) o *En Mesa / Local*.
     - Instrucciones personalizadas para cocina / barismo.
     - Formulario con validación visual inmediata (Nombre, Dirección/Mesa, Teléfono, Método de Pago).
   - **Integración con WhatsApp:** Envío con un solo clic de la comanda formateada con emojis y desglose exacto hacia el número configurado.
   - **Notificaciones Toast:** Feedback visual sutil cada vez que se agrega un ítem.

---

### 🛠️ Tecnologías

- **HTML5**: Semántica web estándar, meta tags SEO y Open Graph.
- **CSS3 / Tailwind CSS (CDN)**: Design tokens, flexbox/grid, animaciones fluidas y micro-interacciones.
- **JavaScript Vanilla (ES6+)**: Event delegation, `Intl.NumberFormat`, `localStorage` y manipulación del DOM sin librerías pesadas.

---

### 📦 Cómo Usar Localmente

Abre el archivo `index.html` directamente en cualquier navegador moderno:

```bash
# Opcional: Servir con Live Server o cualquier servidor HTTP estático
npx serve .
```
O simplemente haz doble clic en `index.html` en tu explorador de archivos.
