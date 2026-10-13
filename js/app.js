/**
 * ==============================================================================
 * Origen & Co. | Café de Especialidad & Bistro
 * Lógica Principal de la Aplicación (app.js)
 * ==============================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. CONFIGURACIÓN DE TAILWIND CSS (EXTENSIÓN DE TEMA VÍA CDN)
   -------------------------------------------------------------------------- */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        coffee: {
          50: '#fbf8f5',
          100: '#f5eee6',
          200: '#ebdcce',
          300: '#dcc1a9',
          400: '#caa07f',
          500: '#bc845c',
          600: '#ad6f4c',
          700: '#90573e',
          800: '#754636',
          900: '#5f3a2f',
          950: '#23130d',
        },
        accent: {
          DEFAULT: '#d97706',
          hover: '#b45309',
          light: '#fef3c7',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          hover: '#1ebe57',
        },
      },
      boxShadow: {
        glow: '0 10px 25px -5px rgba(217, 119, 6, 0.25)',
        floating: '0 20px 35px -10px rgba(35, 19, 13, 0.35)',
      },
    },
  },
};

/* --------------------------------------------------------------------------
   2. CONFIGURACIÓN DEL NEGOCIO & CONSTANTES
   -------------------------------------------------------------------------- */
const CONFIG = {
  businessName: 'Origen & Co. Café',
  whatsappNumber: '573234534872', // Número de WhatsApp oficial (código país Colombia 57 + 3234534872)
  deliveryFee: 4000, // En pesos colombianos (COP)
  currency: 'COP',
  storageKey: 'origen_co_cart_v1',
};

/* --------------------------------------------------------------------------
   3. ICONOS & EMOJIS (SECUENCIAS UNICODE SEGURAS)
   -------------------------------------------------------------------------- */
const ICONS = {
  coffee: '\u2615',          // ☕
  sparkles: '\u2728',        // ✨
  sandwich: '\u{1F96A}',     // 🥪
  croissant: '\u{1F950}',    // 🥐
  star: '\u2B50',            // ⭐
  scooter: '\u{1F6F5}',      // 🛵
  plate: '\u{1F37D}\uFE0F',   // 🍽️
  user: '\u{1F464}',         // 👤
  phone: '\u{1F4F1}',        // 📱
  tag: '\u{1F3F7}\uFE0F',    // 🏷️
  house: '\u{1F3E0}',        // 🏠
  pin: '\u{1F4CD}',          // 📍
  card: '\u{1F4B3}',         // 💳
  clipboard: '\u{1F4CB}',    // 📋
  cart: '\u{1F6D2}',         // 🛒
  moneyBag: '\u{1F4B0}',     // 💰
  memo: '\u{1F4DD}',         // 📝
  check: '\u2713',           // ✓
};

/* --------------------------------------------------------------------------
   4. CATÁLOGO DE PRODUCTOS & CATEGORÍAS
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { id: 'todos', name: 'Todos', icon: ICONS.sparkles },
  { id: 'cafes', name: 'Cafés & Bebidas', icon: ICONS.coffee },
  { id: 'comidas', name: 'Comidas / Platos', icon: ICONS.sandwich },
  { id: 'postres', name: 'Postres', icon: ICONS.croissant },
  { id: 'especiales', name: 'Especiales', icon: ICONS.star },
];

const PRODUCTS = [
  // Cafés & Bebidas
  {
    id: 'c1',
    category: 'cafes',
    name: 'Cappuccino Italiano de Autor',
    description: 'Doble shot de espresso de origen Huila, leche texturizada sedosa y toque de cacao fino.',
    price: 11000,
    badge: 'Favorito',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'c2',
    category: 'cafes',
    name: 'Cold Brew Vainilla & Caramelo',
    description: 'Macerado en frío por 18 horas, infusionado con vainilla natural y crema batida artesanal.',
    price: 13500,
    badge: 'Recomendado',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'c3',
    category: 'cafes',
    name: 'Latte de Avena & Miel Silvestre',
    description: 'Bebida vegetal de avena cremosa, espresso blend de la casa y miel de abejas pura.',
    price: 12500,
    badge: null,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'c4',
    category: 'cafes',
    name: 'Matcha Ceremonial Latte',
    description: 'Té verde matcha grado ceremonial japonés batido al momento con leche vegetal.',
    price: 14000,
    badge: 'Orgánico',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80',
  },

  // Comidas / Platos
  {
    id: 'p1',
    category: 'comidas',
    name: 'Tostada Masa Madre con Aguacate',
    description: 'Pan de masa madre artesanal, hummus cremoso, láminas de aguacate, huevo pochado y semillas tostadas.',
    price: 22000,
    badge: 'Brunch Top',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'p2',
    category: 'comidas',
    name: 'Sandwich Gourmet Pavo & Pesto',
    description: 'Focaccia de romero recién horneada, pechuga de pavo ahumada, queso brie y pesto genovés.',
    price: 24500,
    badge: null,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'p3',
    category: 'comidas',
    name: 'Bowl Energético Quinoa & Salmón',
    description: 'Salmón curado, quinoa tricolor, edamames frescos, aguacate, cherrys confitados y aderezo tahini.',
    price: 29000,
    badge: 'Saludable',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80',
  },

  // Postres
  {
    id: 'd1',
    category: 'postres',
    name: 'Croissant Crocante de Almendras',
    description: 'Hojaldre 100% mantequilla francesa relleno de frangipane y cubierto con almendras fileteadas.',
    price: 12000,
    badge: 'Horneado Hoy',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd2',
    category: 'postres',
    name: 'Cheesecake de Frutos del Bosque',
    description: 'Cremosa base de queso Philadelphia horneada a baja temperatura con compota artesanal de moras.',
    price: 14500,
    badge: null,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'd3',
    category: 'postres',
    name: 'Brownie Melcochudo con Gelato',
    description: 'Brownie tibio 70% chocolate de origen Arauca acompañado de bola de gelato de vainilla bourbon.',
    price: 13900,
    badge: 'Delicioso',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  },

  // Especiales
  {
    id: 'e1',
    category: 'especiales',
    name: 'Combo Brunch Origen Dúo',
    description: '2 Tostadas a elección + 2 Cappuccinos medianos + 1 Croissant de mantequilla para compartir.',
    price: 49900,
    badge: 'Ahorra 18%',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'e2',
    category: 'especiales',
    name: 'Filtrado V60 Café Geisha Especial',
    description: 'Taza de café de microlote variedad Geisha, notas florales a jazmín, durazno y miel de caña.',
    price: 16000,
    badge: 'Edición Limitada',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
  },
];

/* --------------------------------------------------------------------------
   4. ESTADO DE LA APLICACIÓN
   -------------------------------------------------------------------------- */
const state = {
  currentCategory: 'todos',
  searchQuery: '',
  orderType: 'delivery', // 'delivery' | 'dinein'
  cart: loadCartFromStorage(),
};

let toastTimer = null;

/* --------------------------------------------------------------------------
   5. UTILIDADES
   -------------------------------------------------------------------------- */
const currencyFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

/**
 * Formatea un valor numérico a moneda COP
 * @param {number} amount
 * @returns {string}
 */
function formatCOP(amount) {
  return `${currencyFormatter.format(amount || 0)} COP`;
}

/**
 * Normaliza una cadena para búsquedas insensibles a mayúsculas y acentos
 * @param {string} text
 * @returns {string}
 */
function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Carga el carrito desde LocalStorage con manejo de errores
 * @returns {Object}
 */
function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CONFIG.storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('No se pudo acceder al almacenamiento local:', error);
    return {};
  }
}

/**
 * Guarda el carrito actual en LocalStorage de manera segura
 */
function saveCartToStorage() {
  try {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart));
  } catch (error) {
    console.warn('Error al persistir carrito:', error);
  }
}

/* --------------------------------------------------------------------------
   6. REFERENCIAS AL DOM
   -------------------------------------------------------------------------- */
const elements = {
  // Búsqueda y Categorías
  searchInput: document.getElementById('search-input'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  categoryTabs: document.getElementById('category-tabs'),
  activeCategoryTitle: document.getElementById('active-category-title'),
  productCount: document.getElementById('product-count'),
  productGrid: document.getElementById('product-grid'),
  noResults: document.getElementById('no-results'),

  // Barra Flotante
  floatingCart: document.getElementById('floating-cart'),
  cartFloatingBadge: document.getElementById('cart-floating-badge'),
  cartFloatingItemsText: document.getElementById('cart-floating-items-text'),
  cartFloatingTotal: document.getElementById('cart-floating-total'),

  // Modal / Checkout
  cartModalBackdrop: document.getElementById('cart-modal-backdrop'),
  cartModal: document.getElementById('cart-modal'),
  cartItemsContainer: document.getElementById('cart-items-container'),
  cartEmptyMessage: document.getElementById('cart-empty-message'),
  sendWhatsappBtn: document.getElementById('send-whatsapp-btn'),
  modalSubtotal: document.getElementById('modal-subtotal'),
  deliveryCostRow: document.getElementById('delivery-cost-row'),
  modalDeliveryCost: document.getElementById('modal-delivery-cost'),
  modalTotal: document.getElementById('modal-total'),

  // Modalidad & Formulario
  typeDeliveryBtn: document.getElementById('type-delivery-btn'),
  typeDineinBtn: document.getElementById('type-dinein-btn'),
  addressLabel: document.getElementById('address-label'),
  clientName: document.getElementById('client-name'),
  clientAddress: document.getElementById('client-address'),
  clientPhone: document.getElementById('client-phone'),
  orderNotes: document.getElementById('order-notes'),
  nameError: document.getElementById('name-error'),
  addressError: document.getElementById('address-error'),

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
};

/* --------------------------------------------------------------------------
   7. RENDERIZADO DE LA INTERFAZ
   -------------------------------------------------------------------------- */

/**
 * Renderiza las pestañas de categorías en la barra de navegación
 */
function renderCategoryTabs() {
  if (!elements.categoryTabs) return;

  elements.categoryTabs.innerHTML = CATEGORIES.map((cat) => {
    const isActive = cat.id === state.currentCategory;
    const buttonClasses = isActive
      ? 'bg-amber-600 text-stone-950 font-extrabold shadow-md scale-100'
      : 'bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800 font-medium';

    return `
      <button 
        type="button"
        data-action="select-category"
        data-category-id="${cat.id}"
        class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs whitespace-nowrap transition-all duration-200 tap-highlight-transparent ${buttonClasses}"
      >
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

/**
 * Renderiza los productos aplicando filtros de categoría y búsqueda
 */
function renderProducts() {
  if (!elements.productGrid) return;

  const normalizedQuery = normalizeText(state.searchQuery);

  const filtered = PRODUCTS.filter((prod) => {
    const matchesCategory = state.currentCategory === 'todos' || prod.category === state.currentCategory;
    const matchesSearch =
      normalizedQuery === '' ||
      normalizeText(prod.name).includes(normalizedQuery) ||
      normalizeText(prod.description).includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  // Contador de productos
  if (elements.productCount) {
    elements.productCount.innerText = `${filtered.length} opción${filtered.length === 1 ? '' : 'es'}`;
  }

  // Estado vacío
  if (filtered.length === 0) {
    elements.productGrid.innerHTML = '';
    elements.noResults?.classList.remove('hidden');
    return;
  }

  elements.noResults?.classList.add('hidden');

  // Tarjetas de productos
  elements.productGrid.innerHTML = filtered.map((product) => {
    const qty = state.cart[product.id] || 0;
    const badgeHtml = product.badge
      ? `<span class="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-md text-stone-950 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-lg shadow-md z-10">${product.badge}</span>`
      : '';

    const actionHtml = qty > 0
      ? `
        <div class="flex items-center gap-1.5 bg-[#231711] border border-amber-600/40 p-1 rounded-xl">
          <button 
            type="button"
            data-action="update-quantity"
            data-product-id="${product.id}"
            data-delta="-1"
            class="stepper-btn w-7 h-7 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs"
            aria-label="Restar una unidad de ${product.name}"
          >−</button>
          <span class="w-6 text-center text-xs font-bold text-amber-300">${qty}</span>
          <button 
            type="button"
            data-action="update-quantity"
            data-product-id="${product.id}"
            data-delta="1"
            class="stepper-btn w-7 h-7 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-extrabold text-xs"
            aria-label="Sumar una unidad de ${product.name}"
          >+</button>
        </div>
      `
      : `
        <button 
          type="button"
          data-action="add-to-cart"
          data-product-id="${product.id}"
          class="bg-stone-800 hover:bg-amber-600 text-stone-200 hover:text-stone-950 font-bold px-3.5 py-2 rounded-xl text-xs transition-all duration-200 flex items-center gap-1.5 border border-stone-700/60 hover:border-amber-500 active:scale-95 shadow-sm"
        >
          <span>+ Agregar</span>
        </button>
      `;

    return `
      <article class="group product-card">
        <div class="product-card-image-wrap">
          ${badgeHtml}
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            class="product-card-image"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#19110d] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>

        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-bold text-stone-100 text-base leading-snug group-hover:text-amber-400 transition-colors">
              ${product.name}
            </h3>
            <p class="text-xs text-stone-400 mt-1.5 line-clamp-2 leading-relaxed font-light">
              ${product.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between gap-2">
            <div>
              <span class="text-[10px] text-stone-400 uppercase font-semibold block">Precio</span>
              <span class="text-base font-extrabold text-amber-400 tracking-tight">
                ${formatCOP(product.price)}
              </span>
            </div>
            ${actionHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   8. CÁLCULOS Y GESTIÓN DEL CARRITO
   -------------------------------------------------------------------------- */

/**
 * Obtiene el resumen consolidado del carrito
 * @returns {{ count: number, subtotal: number, shipping: number, total: number }}
 */
function getCartTotals() {
  let count = 0;
  let subtotal = 0;

  for (const [id, qty] of Object.entries(state.cart)) {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod && qty > 0) {
      count += qty;
      subtotal += prod.price * qty;
    }
  }

  const shipping = state.orderType === 'delivery' && count > 0 ? CONFIG.deliveryFee : 0;
  const total = subtotal + shipping;

  return { count, subtotal, shipping, total };
}

/**
 * Actualiza la barra flotante inferior y contadores
 */
function updateCartUI() {
  const { count, subtotal } = getCartTotals();

  if (elements.cartFloatingBadge) elements.cartFloatingBadge.innerText = count;
  if (elements.cartFloatingItemsText) {
    elements.cartFloatingItemsText.innerText = `${count} ${count === 1 ? 'ítem agregado' : 'ítems agregados'}`;
  }
  if (elements.cartFloatingTotal) {
    elements.cartFloatingTotal.innerText = formatCOP(subtotal);
  }

  // Animación de entrada/salida de la barra inferior
  if (elements.floatingCart) {
    if (count > 0) {
      elements.floatingCart.classList.remove('translate-y-28');
    } else {
      elements.floatingCart.classList.add('translate-y-28');
    }
  }

  saveCartToStorage();
}

/**
 * Agrega una unidad de un producto al carrito
 * @param {string} productId
 */
function addToCart(productId) {
  const current = state.cart[productId] || 0;
  state.cart[productId] = current + 1;

  const product = PRODUCTS.find((p) => p.id === productId);
  if (product) {
    showToast(`¡${product.name} añadido al pedido!`);
  }

  updateCartUI();
  renderProducts();
  renderCartModalItems();
}

/**
 * Modifica la cantidad de un ítem en el carrito
 * @param {string} productId
 * @param {number} delta
 */
function updateCartQuantity(productId, delta) {
  if (!state.cart[productId]) return;

  state.cart[productId] += delta;

  if (state.cart[productId] <= 0) {
    delete state.cart[productId];
  }

  updateCartUI();
  renderProducts();
  renderCartModalItems();
}

/**
 * Elimina por completo un producto del carrito
 * @param {string} productId
 */
function removeFromCart(productId) {
  delete state.cart[productId];
  updateCartUI();
  renderProducts();
  renderCartModalItems();
}

/**
 * Vacía completamente el carrito
 */
function clearCart() {
  state.cart = {};
  updateCartUI();
  renderProducts();
  renderCartModalItems();
  showToast('Carrito vaciado');
}

/* --------------------------------------------------------------------------
   9. MODAL DE PEDIDO & CHECKOUT
   -------------------------------------------------------------------------- */

/**
 * Abre el modal del carrito
 */
function openCartModal() {
  if (!elements.cartModal || !elements.cartModalBackdrop) return;

  renderCartModalItems();

  elements.cartModalBackdrop.classList.remove('opacity-0', 'pointer-events-none');
  elements.cartModal.classList.remove('translate-y-full', 'sm:translate-y-12', 'sm:scale-95', 'opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');
  elements.cartModal.setAttribute('aria-hidden', 'false');
}

/**
 * Cierra el modal del carrito
 */
function closeCartModal() {
  if (!elements.cartModal || !elements.cartModalBackdrop) return;

  elements.cartModalBackdrop.classList.add('opacity-0', 'pointer-events-none');
  elements.cartModal.classList.add('translate-y-full', 'sm:translate-y-12', 'sm:scale-95', 'opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-hidden');
  elements.cartModal.setAttribute('aria-hidden', 'true');
}

/**
 * Renderiza los ítems dentro del modal y actualiza sus subtotales
 */
function renderCartModalItems() {
  if (!elements.cartItemsContainer) return;

  const { count, subtotal, shipping, total } = getCartTotals();

  if (count === 0) {
    elements.cartItemsContainer.innerHTML = '';
    elements.cartEmptyMessage?.classList.remove('hidden');
    if (elements.sendWhatsappBtn) {
      elements.sendWhatsappBtn.disabled = true;
      elements.sendWhatsappBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
  } else {
    elements.cartEmptyMessage?.classList.add('hidden');
    if (elements.sendWhatsappBtn) {
      elements.sendWhatsappBtn.disabled = false;
      elements.sendWhatsappBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    elements.cartItemsContainer.innerHTML = Object.entries(state.cart)
      .map(([id, qty]) => {
        const prod = PRODUCTS.find((p) => p.id === id);
        if (!prod || qty <= 0) return '';

        return `
          <div class="flex items-center justify-between gap-3 bg-[#150f0c] p-2.5 rounded-xl border border-stone-800">
            <img src="${prod.image}" alt="${prod.name}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
            
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-stone-200 truncate">${prod.name}</h4>
              <span class="text-[11px] text-amber-400 font-semibold">${formatCOP(prod.price)}</span>
            </div>

            <div class="flex items-center gap-1.5 bg-[#1f1510] px-1.5 py-1 rounded-lg border border-stone-700/60">
              <button 
                type="button"
                data-action="update-quantity"
                data-product-id="${prod.id}"
                data-delta="-1"
                class="stepper-btn w-5 h-5 rounded flex items-center justify-center text-xs text-stone-300 hover:text-white"
                aria-label="Restar una unidad"
              >−</button>
              <span class="text-xs font-bold text-amber-300 min-w-[16px] text-center">${qty}</span>
              <button 
                type="button"
                data-action="update-quantity"
                data-product-id="${prod.id}"
                data-delta="1"
                class="stepper-btn w-5 h-5 rounded flex items-center justify-center text-xs text-stone-300 hover:text-white"
                aria-label="Sumar una unidad"
              >+</button>
            </div>

            <button 
              type="button"
              data-action="remove-item"
              data-product-id="${prod.id}"
              class="text-stone-500 hover:text-red-400 p-1 text-sm transition"
              title="Eliminar producto"
              aria-label="Eliminar ${prod.name} del carrito"
            >✕</button>
          </div>
        `;
      })
      .join('');
  }

  // Actualización de montos numéricos en el modal
  if (elements.modalSubtotal) elements.modalSubtotal.innerText = formatCOP(subtotal);

  if (elements.deliveryCostRow && elements.modalDeliveryCost) {
    if (state.orderType === 'delivery') {
      elements.deliveryCostRow.classList.remove('hidden');
      elements.modalDeliveryCost.innerText = formatCOP(shipping);
    } else {
      elements.deliveryCostRow.classList.add('hidden');
    }
  }

  if (elements.modalTotal) elements.modalTotal.innerText = formatCOP(total);
}

/**
 * Cambia la modalidad de pedido ('delivery' | 'dinein')
 * @param {'delivery' | 'dinein'} type
 */
function setOrderType(type) {
  state.orderType = type;

  if (type === 'delivery') {
    elements.typeDeliveryBtn.className =
      'py-2.5 rounded-lg flex items-center justify-center gap-2 transition bg-amber-600 text-stone-950 font-extrabold shadow';
    elements.typeDineinBtn.className =
      'py-2.5 rounded-lg flex items-center justify-center gap-2 transition text-stone-400 hover:text-stone-200 font-medium';
    elements.addressLabel.innerText = 'Dirección de Entrega & Barrio *';
    elements.clientAddress.placeholder = 'Ej: Cra 43A # 12-50, Apto 402';
  } else {
    elements.typeDineinBtn.className =
      'py-2.5 rounded-lg flex items-center justify-center gap-2 transition bg-amber-600 text-stone-950 font-extrabold shadow';
    elements.typeDeliveryBtn.className =
      'py-2.5 rounded-lg flex items-center justify-center gap-2 transition text-stone-400 hover:text-stone-200 font-medium';
    elements.addressLabel.innerText = 'Número de Mesa o Ubicación en Local *';
    elements.clientAddress.placeholder = 'Ej: Mesa #4 (Terraza)';
  }

  renderCartModalItems();
}

/* --------------------------------------------------------------------------
   10. INTEGRACIÓN CON WHATSAPP
   -------------------------------------------------------------------------- */

/**
 * Valida los datos del cliente y abre WhatsApp con el pedido estructurado
 */
function submitOrderToWhatsApp() {
  const { count, subtotal, shipping, total } = getCartTotals();

  if (count === 0) {
    alert('Tu carrito está vacío. Agrega productos antes de ordenar.');
    return;
  }

  const nameVal = elements.clientName?.value.trim() || '';
  const addressVal = elements.clientAddress?.value.trim() || '';
  const phoneVal = elements.clientPhone?.value.trim() || '';
  const notesVal = elements.orderNotes?.value.trim() || '';
  const paymentRadio = document.querySelector('input[name="payment-method"]:checked');
  const paymentVal = paymentRadio ? paymentRadio.value : 'Nequi / Daviplata';

  let hasError = false;

  // Validación de nombre
  if (!nameVal) {
    elements.nameError?.classList.remove('hidden');
    elements.clientName?.focus();
    hasError = true;
  } else {
    elements.nameError?.classList.add('hidden');
  }

  // Validación de dirección / ubicación
  if (!addressVal) {
    elements.addressError?.classList.remove('hidden');
    if (!hasError) elements.clientAddress?.focus();
    hasError = true;
  } else {
    elements.addressError?.classList.add('hidden');
  }

  if (hasError) return;

  // Construcción del mensaje para WhatsApp
  const modalityText = state.orderType === 'delivery' ? `${ICONS.scooter} A Domicilio` : `${ICONS.plate} En Mesa / Local`;
  const locationLabel = state.orderType === 'delivery' ? `${ICONS.house} Dirección:` : `${ICONS.pin} Mesa / Ubicación:`;

  let message = `${ICONS.coffee} *¡HOLA ${CONFIG.businessName.toUpperCase()}! NUEVO PEDIDO* ${ICONS.coffee}\n\n`;
  message += `${ICONS.user} *Cliente:* ${nameVal}\n`;
  if (phoneVal) message += `${ICONS.phone} *Teléfono:* ${phoneVal}\n`;
  message += `${ICONS.tag} *Modalidad:* ${modalityText}\n`;
  message += `${locationLabel} ${addressVal}\n`;
  message += `${ICONS.card} *Método de Pago:* ${paymentVal}\n\n`;

  message += `${ICONS.clipboard} *DETALLE DEL PEDIDO:*\n`;
  for (const [id, qty] of Object.entries(state.cart)) {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod && qty > 0) {
      const itemTotal = prod.price * qty;
      message += `• ${qty}x ${prod.name} (${formatCOP(prod.price)}) = *${formatCOP(itemTotal)}*\n`;
    }
  }

  if (notesVal) {
    message += `\n${ICONS.memo} *Instrucciones:* ${notesVal}\n`;
  }

  message += `\n------------------------------\n`;
  message += `${ICONS.cart} *Subtotal:* ${formatCOP(subtotal)}\n`;
  if (state.orderType === 'delivery') {
    message += `${ICONS.scooter} *Costo de Envío:* ${formatCOP(shipping)}\n`;
  }
  message += `${ICONS.moneyBag} *TOTAL A PAGAR:* *${formatCOP(total)}*\n`;
  message += `------------------------------\n`;
  message += `_Pedido enviado desde la web oficial de ${CONFIG.businessName}._`;

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;

  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/* --------------------------------------------------------------------------
   11. SISTEMA DE NOTIFICACIONES TOAST
   -------------------------------------------------------------------------- */

/**
 * Despliega una alerta emergente temporal
 * @param {string} msg
 */
function showToast(msg) {
  if (!elements.toast || !elements.toastMessage) return;

  elements.toastMessage.innerText = msg;
  elements.toast.classList.remove('-translate-y-20', 'opacity-0', 'pointer-events-none');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.add('-translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 2300);
}

/* --------------------------------------------------------------------------
   12. CONTROLADORES DE EVENTOS CENTRALIZADOS
   -------------------------------------------------------------------------- */

/**
 * Manejador centralizado de clicks (Event Delegation)
 * @param {MouseEvent} event
 */
function handleGlobalClick(event) {
  const target = event.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');

  switch (action) {
    case 'select-category': {
      const catId = target.getAttribute('data-category-id');
      if (catId) {
        state.currentCategory = catId;
        renderCategoryTabs();
        renderProducts();

        const catObj = CATEGORIES.find((c) => c.id === catId);
        if (elements.activeCategoryTitle) {
          elements.activeCategoryTitle.innerText = catObj ? catObj.name : 'Productos';
        }
      }
      break;
    }

    case 'add-to-cart': {
      const prodId = target.getAttribute('data-product-id');
      if (prodId) addToCart(prodId);
      break;
    }

    case 'update-quantity': {
      const prodId = target.getAttribute('data-product-id');
      const delta = parseInt(target.getAttribute('data-delta'), 10) || 0;
      if (prodId && delta) updateCartQuantity(prodId, delta);
      break;
    }

    case 'remove-item': {
      const prodId = target.getAttribute('data-product-id');
      if (prodId) removeFromCart(prodId);
      break;
    }

    case 'open-cart':
      openCartModal();
      break;

    case 'close-cart':
      closeCartModal();
      break;

    case 'clear-cart':
      clearCart();
      break;

    case 'set-order-type': {
      const type = target.getAttribute('data-type');
      if (type === 'delivery' || type === 'dinein') {
        setOrderType(type);
      }
      break;
    }

    case 'clear-search':
      resetSearch();
      break;

    case 'reset-filters':
      resetAllFilters();
      break;

    case 'submit-whatsapp':
      submitOrderToWhatsApp();
      break;

    default:
      break;
  }
}

/**
 * Limpia la barra de búsqueda
 */
function resetSearch() {
  if (elements.searchInput) {
    elements.searchInput.value = '';
    state.searchQuery = '';
    elements.clearSearchBtn?.classList.add('hidden');
    renderProducts();
    elements.searchInput.focus();
  }
}

/**
 * Restablece todos los filtros de búsqueda y categoría
 */
function resetAllFilters() {
  if (elements.searchInput) elements.searchInput.value = '';
  state.searchQuery = '';
  elements.clearSearchBtn?.classList.add('hidden');
  state.currentCategory = 'todos';
  renderCategoryTabs();
  renderProducts();
  if (elements.activeCategoryTitle) {
    elements.activeCategoryTitle.innerText = 'Todos los Productos';
  }
}

/**
 * Configura los event listeners de la aplicación
 */
function setupEventListeners() {
  // Delegación de eventos de click
  document.addEventListener('click', handleGlobalClick);

  // Búsqueda en tiempo real
  elements.searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    if (state.searchQuery.length > 0) {
      elements.clearSearchBtn?.classList.remove('hidden');
    } else {
      elements.clearSearchBtn?.classList.add('hidden');
    }
    renderProducts();
  });

  // Limpiar mensajes de error cuando el usuario escribe
  elements.clientName?.addEventListener('input', () => {
    if (elements.clientName.value.trim()) {
      elements.nameError?.classList.add('hidden');
    }
  });

  elements.clientAddress?.addEventListener('input', () => {
    if (elements.clientAddress.value.trim()) {
      elements.addressError?.classList.add('hidden');
    }
  });

  // Soporte de accesibilidad para cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartModal();
    }
  });
}

/* --------------------------------------------------------------------------
   13. INICIALIZACIÓN
   -------------------------------------------------------------------------- */
function init() {
  renderCategoryTabs();
  renderProducts();
  updateCartUI();
  setupEventListeners();
}

// Arrancar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
