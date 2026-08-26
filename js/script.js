/* ============================================================
   GIFTS BY KRIVYA — MAIN JAVASCRIPT
   ============================================================

   ╔════════════════════════════════════════════════════════════╗
   ║                    🎁  EDIT ME  🎁                        ║
   ║  Change the values below to update your site content.     ║
   ║  You do NOT need to touch any code below this section.    ║
   ╚════════════════════════════════════════════════════════════╝
*/

// ──────────────────────────────────────────────────────────────
// GOOGLE SHEET API URL — The single endpoint for all data
// This is a Google Apps Script Web App. It handles orders,
// enquiries, feedback/reviews, and tracking lookups.
// ──────────────────────────────────────────────────────────────
const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzhcasuC0Od5ZfPhMzWZ501fiH_vIiFgLugOocIhvDf1wGyYSRs7x66y0Uy5iQcqHlW/exec';

// ──────────────────────────────────────────────────────────────
// CONTACT INFO — Replace placeholder phone/links with your real ones
// ──────────────────────────────────────────────────────────────
const CONTACT = {
  whatsappNumber: '614XXXXXXXX',       // EDIT: Your WhatsApp number (with country code, no + or spaces)
  email: 'giftbykrivya@gmail.com',     // EDIT: Your email address
  instagram: 'giftbykrivya',           // EDIT: Your Instagram handle (without @)
  googleReviewUrl: 'https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review',  // EDIT: Your Google Review URL
  franchiseEmail: 'giftbykrivya@gmail.com',    // Official franchise email
};

// ──────────────────────────────────────────────────────────────
// PRODUCTS — Edit prices, names, and descriptions here
// Each product has an AUD price and an NPR price.
// Set NPR to the real NPR value when you have it.
// Images: place your product photos in the "images/" folder
//   and update the "image" field below with the filename.
// ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'Ferrero Box',
    name: 'Ferrero Collection Box',
    description: 'Assorted fine hazelnut, coconut, and dark chocolate pralines.',
    priceAUD: 34.80,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Ferero collection.png',
  },
  {
    id: 'Ferrero Rocher',
    name: 'Ferrero Rocher',
    description: 'Whole hazelnut dipped in smooth chocolate & crispy wafer.',
    priceAUD: 34.80,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Ferero rocher.png',
  },
  {
    id: 'Dairy Mik',
    name: 'Cadbury Dairy Milk',
    description: 'Classic creamy milk chocolate made with rich cocoa goodness.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Dairymilk.png',
  },
  {
    id: 'Dark Chocolate',
    name: 'Rich Dark Chocolate',
    description: 'Intense and velvety dark chocolate for pure indulgence.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Dark choclate.png',
  },
  {
    id: 'Kitkat',
    name: 'KitKat Break Bar',
    description: 'Crispy wafer fingers covered in smooth milk chocolate.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Kitkat.png',
  },
  {
    id: 'Snickers',
    name: 'Snickers Bar',
    description: 'Packed with roasted peanuts, rich caramel, and soft nougat.',
    priceAUD: 4.90,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Snickers.png',
  },
  {
    id: 'plain-tshirt',
    name: 'Plain Cotton T-Shirt',
    subtitle: 'Color options available',
    description: 'Ultra-soft, premium combed cotton for everyday comfort.',
    priceAUD: 19.60,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/tshirt.png',
  },
  {
    id: 'POLO T-SHIRT',
    name: 'Classic Polo T-Shirt',
    subtitle: 'Color options available',
    description: 'Sophisticated collared fit crafted from breathable fabric.',
    priceAUD: 30.40,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/tshirt2.png',
  },
  {
    id: 'mug-heat',
    name: 'Magic Heat Mug',
    subtitle: 'Heat Activated',
    description: 'A magical mug that transforms when filled with hot drink.',
    priceAUD: 19.60,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Mug.png',
  },
  {
    id: 'Mini photo-frame',
    name: 'Mini Keepsake Frame',
    description: 'A timeless frame to cherish your most beautiful moments.',
    priceAUD: 8.70,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Photoframe.jpeg',
  },
  {
    id: 'letter-jar',
    name: 'Handwritten Letter Jar',
    description: 'Little personalized handwritten notes filled with love.',
    priceAUD: 5.40,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/bottle.jpeg',
  },
  {
    id: 'perfume',
    name: 'Signature Perfume',
    description: 'A delicate fragrance crafted to leave a lasting impression.',
    priceAUD: 20.20,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/perfume.jpeg',
  },
  {
    id: 'Teddy1',
    name: 'Brown Teddy Bear',
    description: 'Soft, cuddly companion made to be hugged and cherished.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/brownteddy.jpeg',
  },
  {
    id: 'Teddy2',
    name: 'Fluffy Teddy Bear',
    description: 'Soft, cuddly companion made to be hugged and cherished.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/teddy2.jpeg',
  },
  {
    id: 'Teddy3',
    name: 'Honey Teddy Bear',
    description: 'Soft, cuddly companion made to be hugged and cherished.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/teddy3.jpeg',
  },
  {
    id: 'Teddy4',
    name: 'Sweet Teddy Bear',
    description: 'Soft, cuddly companion made to be hugged and cherished.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/teddy4.jpeg',
  },
  {
    id: 'Teddy5',
    name: 'White Teddy Bear',
    description: 'Soft, cuddly companion made to be hugged and cherished.',
    priceAUD: 16.30,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/whiteteddy.jpeg',
  },
  {
    id: 'Lucky Keyring',
    name: 'Lucky Evil Eye Keyring',
    description: 'Designed to attract good fortune and ward off negativity.',
    priceAUD: 6.50,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/evileyes.jpeg',
  },
  {
    id: 'scented Candle',
    name: 'Aroma Scented Candle',
    description: 'Infused with fragrance to create warmth and serenity.',
    priceAUD: 5.40,
    priceNPR: 0,        // EDIT: Add real NPR price
    image: 'images/Items/Wax.jpeg',
  },
];
// ──────────────────────────────────────────────────────────────
// OCCASION SPECIALS — Edit prices/items when ready, image files
// go in your images folder same as regular products
// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
// OCCASION SPECIALS — each package contains multiple individually
// purchasable items. Edit names/prices/images when ready.
// ──────────────────────────────────────────────────────────────
const OCCASION_SPECIALS = [
  {
    id: 'dashain-special',
    name: 'Dashain Special',
    teaser: 'Celebrate Dashain with a thoughtful gift bundle',
    image: 'images/occasion-dashain.jpg',
    featured: true,
    badgeText: 'Featured',
    hasIcon: true,
    packageItems: [
      { id: 'dashain-item-1', name: 'PLACEHOLDER — item name', priceAUD: 0, priceNPR: 0, image: 'images/occasion-dashain-item1.jpg' },
      { id: 'dashain-item-2', name: 'PLACEHOLDER — item name', priceAUD: 0, priceNPR: 0, image: 'images/occasion-dashain-item2.jpg' },
    ],
  },
  {
    id: 'tihar-special',
    name: 'Tihar Special',
    teaser: 'A festive gift set to celebrate Tihar',
    image: 'images/occasion-tihar.jpg',
    featured: false,
    badgeText: 'Festival Offer',
    hasIcon: false,
    packageItems: [
      { id: 'tihar-item-1', name: 'PLACEHOLDER — item name', priceAUD: 0, priceNPR: 0, image: 'images/occasion-tihar-item1.jpg' },
      { id: 'tihar-item-2', name: 'PLACEHOLDER — item name', priceAUD: 0, priceNPR: 0, image: 'images/occasion-tihar-item2.jpg' },
    ],
  },
];
// ──────────────────────────────────────────────────────────────
// GIFT MEANINGS — Edit or add meanings here
// ──────────────────────────────────────────────────────────────
const GIFT_MEANINGS = [
  {
    icon: '🧿',
    title: 'Evil Eye Gift',
    text: 'Traditionally believed to represent protection, often given as a symbol of good wishes and positive energy.',
  },
  {
    icon: '🌹',
    title: 'Flowers',
    text: 'Flowers symbolize love, appreciation, and new beginnings — a timeless way to express heartfelt emotions.',
  },
  {
    icon: '🍫',
    title: 'Chocolates',
    text: 'Chocolates are a universal gesture of sweetness and affection, perfect for celebrating any occasion.',
  },
  {
    icon: '💌',
    title: 'Letter Jar',
    text: 'A jar of handwritten notes carries personal warmth — each note a tiny treasure of love and memory.',
  },
];

// ──────────────────────────────────────────────────────────────
// DELIVERY GALLERY — Update filenames when you have real photos
// ──────────────────────────────────────────────────────────────
const GALLERY_IMAGES = [
  { src: 'images/Our Deliveries/1.jpeg', alt: 'Delivery photo 1' },  // EDIT: Replace with your photo
  { src: 'images/Our Deliveries/2.jpeg', alt: 'Delivery photo 2' },
  { src: 'images/Our Deliveries/3.jpeg', alt: 'Delivery photo 3' },
  { src: 'images/Our Deliveries/6.jpeg', alt: 'Delivery photo 4' },
  { src: 'images/Our Deliveries/8.jpeg', alt: 'Delivery photo 5' },
  { src: 'images/Our Deliveries/10.jpeg', alt: 'Delivery photo 6' },
  { src: 'images/Our Deliveries/14.jpeg', alt: 'Delivery photo 7' },
  { src: 'images/Our Deliveries/11.jpeg', alt: 'Delivery photo 8' },
  { src: 'images/Our Deliveries/4.jpeg', alt: 'Delivery photo 9' },
  { src: 'images/Our Deliveries/9.jpeg', alt: 'Delivery photo 10' },
  { src: 'images/Our Deliveries/12.jpeg', alt: 'Delivery photo 11' },
  { src: 'images/Our Deliveries/5.jpeg', alt: 'Delivery photo 12' },
  { src: 'images/Our Deliveries/7.jpeg', alt: 'Delivery photo 13' },
  { src: 'images/Our Deliveries/13.jpeg', alt: 'Delivery photo 14' },
  { src: 'images/Our Deliveries/15.jpeg', alt: 'Delivery photo 15' },
  { src: 'images/Our Deliveries/16.jpeg', alt: 'Delivery photo 16' },
  { src: 'images/Our Deliveries/17.jpeg', alt: 'Delivery photo 17' },
  { src: 'images/Our Deliveries/18.jpeg', alt: 'Delivery photo 18' },
  { src: 'images/Our Deliveries/19.jpeg', alt: 'Delivery photo 19' },
  { src: 'images/Our Deliveries/20.jpeg', alt: 'Delivery photo 20' },
  { src: 'images/Our Deliveries/21.jpeg', alt: 'Delivery photo 21' },
  { src: 'images/Our Deliveries/22.jpeg', alt: 'Delivery photo 22' },
  { src: 'images/Our Deliveries/23.jpeg', alt: 'Delivery photo 23' },
  { src: 'images/Our Deliveries/24.jpeg', alt: 'Delivery photo 24' },
  { src: 'images/Our Deliveries/25.jpeg', alt: 'Delivery photo 25' },
];

// ──────────────────────────────────────────────────────────────
// REVIEWS — Replace these placeholder reviews with real ones
// Mark any placeholder review with isPlaceholder: true
// ──────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    stars: 5,
    text: 'The gift arrived beautifully wrapped and on time. My sister in Sydney was so surprised! Absolutely recommend Gifts by Krivya.',
    author: 'Sample Reviewer 1',
    isPlaceholder: true,  // EDIT: Set to false or remove when this is a real review
  },
  {
    stars: 5,
    text: 'Krivya made the whole process so easy. From ordering to delivery, everything was smooth and the quality was amazing.',
    author: 'Sample Reviewer 2',
    isPlaceholder: true,
  },
  {
    stars: 5,
    text: 'I was worried about sending a gift internationally but they handled everything perfectly. Will definitely order again!',
    author: 'Sample Reviewer 3',
    isPlaceholder: true,
  },
];

// ──────────────────────────────────────────────────────────────
// PAYMENT QR IMAGES — Replace with your actual QR code images
// ──────────────────────────────────────────────────────────────
const PAYMENT_IMAGES = {
  esewaQR: 'images/QR/EsewaCropped.png',               // EDIT: Path to your eSewa QR image
  laxmiBankQR: 'images/QR/LaxmiCropped.png',      // EDIT: Path to your Laxmi Sunrise Bank QR image
};

// ──────────────────────────────────────────────────────────────
// OCCASIONS — Edit the dropdown options for order form
// ──────────────────────────────────────────────────────────────
const OCCASIONS = [
  'Birthday',
  'Anniversary',
  'Valentines Day',
  'Graduation',
  'Wedding',
  'Baby Shower',
  'Housewarming',
  'Thank You',
  'Just Because',
  'Other',
];


/* ============================================================
   ╔════════════════════════════════════════════════════════════╗
   ║  ⚠️  DO NOT EDIT BELOW THIS LINE  ⚠️                     ║
   ║  (unless you know what you're doing)                      ║
   ╚════════════════════════════════════════════════════════════╝
   ============================================================ */

// ── STATE ──
let currentCurrency = 'AUD';
let selectedProduct = null;
let paymentScreenshotBase64 = null;

// ── CART (sessionStorage with catalog validation) ──
function sanitizeCart(rawCart) {
  if (!Array.isArray(rawCart)) return [];
  const clean = [];
  rawCart.forEach(item => {
    if (!item || !item.id || typeof item.id !== 'string') return;
    let refProduct = PRODUCTS.find(p => p.id === item.id);
    if (!refProduct) {
      for (const occ of OCCASION_SPECIALS) {
        if (occ.packageItems) {
          const found = occ.packageItems.find(pi => pi.id === item.id);
          if (found) {
            refProduct = found;
            break;
          }
        }
      }
    }
    if (refProduct) {
      const qty = Math.max(1, Math.min(99, parseInt(item.qty, 10) || 1));
      clean.push({
        id: refProduct.id,
        name: refProduct.name,
        priceAUD: refProduct.priceAUD,
        priceNPR: refProduct.priceNPR,
        image: refProduct.image,
        qty: qty
      });
    }
  });
  return clean;
}

let cart = [];
try {
  cart = sanitizeCart(JSON.parse(sessionStorage.getItem('giftCart') || '[]'));
} catch (e) {
  cart = [];
}

// ── MOBILE MULTI-SELECT ENQUIRY (mobile only — desktop untouched) ──
let enquirySelectedProducts = new Set();
function isMobileView() {
  return window.innerWidth <= 768;
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderOccasionSpecials();
  renderMeanings();
  renderGallery();
  renderReviews();
  populateOccasionDropdown();
  initCurrencyToggle();
  initScrollEffects();
  initMobileMenu();
  initLightbox();
  initForm();
  initPayment();
  checkPreSelectedProduct();
  updateCartBadge();
  renderCartInForm();
  updateFormPlaceholders(currentCurrency);
});

// ============================================================
// RENDER: Product Cards
// ============================================================
const PRODUCTS_INITIAL_COUNT = 8;

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const viewMoreBtn = document.getElementById('productsViewMoreBtn');
  if (!grid) return;

  const showAll = grid.dataset.expanded === 'true';
  const productsToShow = showAll ? PRODUCTS : PRODUCTS.slice(0, PRODUCTS_INITIAL_COUNT);

  grid.innerHTML = productsToShow.map(p => {
    try {
      const safeImage = p.image || 'images/product-placeholder.jpg';
      const safeName = p.name || 'Unnamed Product';
      const safeDescription = p.description || '';

      return `
        <article class="product-card fade-in" data-product-id="${escapeHtml(p.id)}" onclick="handleProductCardClick(event, '${escapeHtml(p.id)}')">
          <div class="product-card-img-wrap" onclick="openLightbox('${escapeHtml(safeImage)}', '${escapeHtml(safeName)}')">
            <img src="${escapeHtml(safeImage)}" alt="${escapeHtml(safeName)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <span class="placeholder-label" style="display:none;">📷 ${escapeHtml(safeImage.split('/').pop())}<br>Drop your photo here</span>
          </div>
          <div class="product-card-body">
            <div>
              <h3 class="product-card-name">${escapeHtml(safeName)}</h3>
              ${p.subtitle ? `<span class="product-card-subtitle">${escapeHtml(p.subtitle)}</span>` : ''}
              <p class="product-card-desc">${escapeHtml(safeDescription)}</p>
            </div>
            <div>
              <div class="product-card-price" data-aud="${p.priceAUD}" data-npr="${p.priceNPR}">
                ${formatPrice(p.priceAUD, p.priceNPR)}
              </div>
              <div class="product-card-actions">
                <button class="btn btn-primary btn-sm" onclick="addToCart('${escapeHtml(p.id)}')">
                  🛒 <span class="btn-label-full">Add to Order</span><span class="btn-label-short">Add</span>
                </button>
                <button class="btn btn-outline btn-sm" onclick="openEnquiryModal('${escapeHtml(p.id)}')">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
    } catch (err) {
      console.error('Skipped a broken product card — check this product\'s data:', p && p.id, err);
      return '';
    }
  }).join('');

  observeFadeIns(); // ← register the newly-created cards with the observer

  if (viewMoreBtn) {
    if (PRODUCTS.length <= PRODUCTS_INITIAL_COUNT) {
      viewMoreBtn.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'inline-block';
      viewMoreBtn.textContent = showAll
        ? 'View Less'
        : `View More (${PRODUCTS.length - PRODUCTS_INITIAL_COUNT} more)`;
    }
  }
}

function toggleProductsView() {
  const container = document.getElementById('products-grid');
  const isExpanded = container.dataset.expanded === 'true';
  const willExpand = !isExpanded;
  container.dataset.expanded = willExpand ? 'true' : 'false';
  renderProducts();

  if (!willExpand) {
    // Collapsing back — scroll to the top of the Gift Menu section
    // so the user lands somewhere sensible instead of wherever the
    // page happened to shrink to underneath them.
    document.getElementById('gift-menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============================================================
// RENDER: Gift Meanings
// ============================================================
function renderMeanings() {
  const grid = document.getElementById('meanings-grid');
  if (!grid) return;
  grid.innerHTML = GIFT_MEANINGS.map(m => `
    <div class="meaning-card fade-in">
      <div class="meaning-card-icon">${m.icon}</div>
      <h4>${escapeHtml(m.title)}</h4>
      <p>${escapeHtml(m.text)}</p>
    </div>
  `).join('');
}

// ============================================================
// RENDER: Gallery
// ============================================================
const GALLERY_INITIAL_COUNT = 8; // how many photos show before "View More"

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  const viewMoreBtn = document.getElementById('galleryViewMoreBtn');

  if (!container) return;

  container.innerHTML = '';

  const showAll = container.dataset.expanded === 'true';
  const imagesToShow = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, GALLERY_INITIAL_COUNT);

  imagesToShow.forEach(img => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.cursor = 'pointer';
    item.innerHTML = `<img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" loading="lazy">`;
    item.addEventListener('click', () => openLightbox(img.src, img.alt));
    container.appendChild(item);
  });

  if (viewMoreBtn) {
    if (GALLERY_IMAGES.length <= GALLERY_INITIAL_COUNT) {
      viewMoreBtn.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'inline-block';
      viewMoreBtn.textContent = showAll
        ? 'View Less'
        : `View More (${GALLERY_IMAGES.length - GALLERY_INITIAL_COUNT} more)`;
    }
  }
}

function toggleGalleryView() {
  const container = document.getElementById('gallery-grid');
  const isExpanded = container.dataset.expanded === 'true';
  container.dataset.expanded = isExpanded ? 'false' : 'true';
  renderGallery();
}

// ============================================================
// RENDER: Reviews
// ============================================================
function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  grid.innerHTML = REVIEWS.map(r => `
    <div class="review-card fade-in">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">${escapeHtml(r.text)}</p>
      <p class="review-author">${escapeHtml(r.author)}</p>
      ${r.isPlaceholder ? '<p class="review-note">— Sample review (replace with real review)</p>' : ''}
    </div>
  `).join('');
}

// ============================================================
// UTILITIES: Security, Sanitization & Anti-Spam
// ============================================================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isSafeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return /^https?:\/\//i.test(trimmed);
}

function sanitizeText(str, maxLen = 1000) {
  if (typeof str !== 'string') return '';
  // Remove control characters (except newline and tab)
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim().slice(0, maxLen);
}

const _submissionTimestamps = {};
function isRateLimited(key, limitMs = 4000) {
  const now = Date.now();
  const last = _submissionTimestamps[key] || 0;
  if (now - last < limitMs) {
    return true;
  }
  _submissionTimestamps[key] = now;
  return false;
}
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) { alert(message); return; } // safety fallback only

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'error' : ''}`;
  toast.innerHTML = `<span>${type === 'error' ? '⚠️' : ''}</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
// ============================================================
// CURRENCY
// ============================================================
function initCurrencyToggle() {
  const btnAUD = document.getElementById('curr-aud');
  const btnNPR = document.getElementById('curr-npr');
  if (!btnAUD || !btnNPR) return;

  btnAUD.addEventListener('click', () => setCurrency('AUD'));
  btnNPR.addEventListener('click', () => setCurrency('NPR'));
}

function setCurrency(currency) {
  currentCurrency = currency;
  updateFormPlaceholders(currency);
  document.getElementById('curr-aud').classList.toggle('active', currency === 'AUD');
  document.getElementById('curr-npr').classList.toggle('active', currency === 'NPR');

  // Update all prices on the page
  document.querySelectorAll('.product-card-price').forEach(el => {
    const aud = parseFloat(el.dataset.aud);
    const npr = parseFloat(el.dataset.npr);
    el.textContent = formatPrice(aud, npr);
  });

  // Update cart display & summary total if visible
  renderCartInForm();
  updateSummaryTotal();
}

function formatPrice(aud, npr) {
  if (currentCurrency === 'NPR') {
    if (npr > 0) {
      return `NPR रू ${npr.toFixed(2)}`;
    }
    return 'NPR price to be added';
  }
  return `AUD $${aud.toFixed(2)}`;
}

function getProductPrice(product) {
  if (currentCurrency === 'NPR' && product.priceNPR > 0) {
    return `NPR रू ${product.priceNPR.toFixed(2)}`;
  }
  if (currentCurrency === 'NPR') {
    return 'NPR price to be added';
  }
  return `AUD $${product.priceAUD.toFixed(2)}`;
}

// ============================================================
// CART LOGIC (sessionStorage only)
// ============================================================
function saveCart() {
  sessionStorage.setItem('giftCart', JSON.stringify(cart));
  updateCartBadge();
  renderCartInForm();
  renderCartDrawer();
}

function addToCart(productId) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!p) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...p, qty: 1 });
  }

  saveCart();
  showToast(p.name + ' added to your order!', 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function updateCartBadge() {
  const badge = document.getElementById('checkout-badge');
  if (!badge) return;
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if (count > 0) {
    badge.classList.add('visible');
    badge.querySelector('.count').textContent = count;
  } else {
    badge.classList.remove('visible');
  }
}

function renderCartInForm() {
  const container = document.getElementById('cart-summary-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="color:var(--espresso-light);">Your cart is empty. Please select items from the Gift Menu.</p>';
    window._cartTotalAud = 0;
    window._cartTotalNpr = 0;
    return;
  }

  let totalAud = 0;
  let totalNpr = 0;

  const html = cart.map(item => {
    totalAud += item.priceAUD * item.qty;
    totalNpr += item.priceNPR * item.qty;
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:8px; margin-bottom:8px; border-bottom:1px solid #eee;">
        <div>
          <h5 style="margin:0;">${escapeHtml(item.name)} (x${item.qty})</h5>
          <span style="font-size:0.85rem; color:var(--espresso-light);">${formatPrice(item.priceAUD, item.priceNPR)} each</span>
        </div>
        <button type="button" class="btn btn-outline btn-sm" style="padding:4px 8px; border-color:red; color:red;" onclick="removeFromCart('${escapeHtml(item.id)}')">✕</button>
      </div>
    `;
  }).join('');

  window._cartTotalAud = totalAud;
  window._cartTotalNpr = totalNpr;

  const totalHtml = `
    <div style="text-align:right; font-weight:600; margin-top:12px; color:var(--espresso);">
      Total: ${formatPrice(totalAud, totalNpr)}
    </div>
  `;

  container.innerHTML = html + totalHtml;
}

// ============================================================
// MODALS
// ============================================================
function openEnquiryModal(productId) {
  const modal = document.getElementById('enquiry-modal');
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (!modal || !p) return;
  document.getElementById('enquiry-product-name').textContent = p.name;
  document.getElementById('enquiry-pid').value = p.name;
  modal.classList.add('active');
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (modal) modal.classList.remove('active');
}

// ──────────────────────────────────────────────────────────────
// MOBILE MULTI-SELECT ENQUIRY — tap a card on mobile to select it,
// then use the floating button to send one enquiry covering all
// selected products. Desktop is completely unaffected: isMobileView()
// gates every part of this, and the per-card "Enquire" button still
// works normally on desktop via openEnquiryModal() above, untouched.
// ──────────────────────────────────────────────────────────────
function handleProductCardClick(event, productId) {
  if (!isMobileView()) return;
  // Don't hijack clicks on the buttons or the product image itself
  if (event.target.closest('.btn') || event.target.closest('.product-card-img-wrap')) return;
  toggleEnquirySelect(productId, event.currentTarget);
}

function toggleEnquirySelect(productId, cardEl) {
  if (!cardEl) return;
  if (enquirySelectedProducts.has(productId)) {
    enquirySelectedProducts.delete(productId);
    cardEl.classList.remove('enquiry-selected');
  } else {
    enquirySelectedProducts.add(productId);
    cardEl.classList.add('enquiry-selected');
  }
  updateEnquiryFAB();
}

function updateEnquiryFAB() {
  const fab = document.getElementById('enquiry-fab');
  if (!fab) return;
  const count = enquirySelectedProducts.size;
  const countEl = fab.querySelector('.fab-count');
  if (count > 0) {
    fab.classList.add('visible');
    if (countEl) countEl.textContent = count;
  } else {
    fab.classList.remove('visible');
  }
}

function clearEnquirySelection() {
  enquirySelectedProducts.forEach(id => {
    const card = document.querySelector(`.product-card[data-product-id="${CSS.escape(id)}"]`);
    if (card) card.classList.remove('enquiry-selected');
  });
  enquirySelectedProducts.clear();
  updateEnquiryFAB();
}

function openCollectiveEnquiryModal() {
  if (enquirySelectedProducts.size === 0) return;
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;

  const names = Array.from(enquirySelectedProducts)
    .map(id => {
      const p = PRODUCTS.find(prod => prod.id === id);
      return p ? p.name : id;
    })
    .join(', ');

  document.getElementById('enquiry-product-name').textContent = names;
  document.getElementById('enquiry-pid').value = names;
  modal.classList.add('active');
}

function openReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.add('active');
}

function closeReviewModal() {
  const modal = document.getElementById('review-modal');
  if (modal) modal.classList.remove('active');
}

function checkPreSelectedProduct() {
  // Legacy function check removed since we are using Cart logic now
}

function populateOccasionDropdown() {
  const select = document.getElementById('order-occasion');
  if (!select) return;
  OCCASIONS.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o;
    opt.textContent = o;
    select.appendChild(opt);
  });
}

// ============================================================
// FORM: Validation & Submission
// ============================================================
function initForm() {
  const form = document.getElementById('order-form');
  if (!form) return;

  setMinDeliveryDate();

  // Attach live validation on email inputs
  ['sender-email', 'receiver-email', 'receiver-secondary-email', 'franchise-email', 'enquiry-email'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    const validate = () => {
      const val = input.value.trim();
      const group = input.closest('.form-group');
      if (!group) return;
      const errorMsg = group.querySelector('.error-msg');
      if (val && !isValidEmail(val)) {
        group.classList.add('has-error');
        if (errorMsg) errorMsg.textContent = 'Please enter a valid email address.';
      } else if (val && isValidEmail(val)) {
        group.classList.remove('has-error');
      }
    };
    input.addEventListener('blur', validate);
    input.addEventListener('input', () => {
      if (input.closest('.form-group')?.classList.contains('has-error')) {
        validate();
      }
    });
  });

  // Attach live validation on phone inputs & secondary contact uniqueness
  ['sender-contact', 'receiver-contact', 'receiver-secondary-contact'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    const validate = () => {
      const val = input.value.trim();
      const group = input.closest('.form-group');
      if (!group) return;
      const errorMsg = group.querySelector('.error-msg');
      if (val && !isValidPhone(val)) {
        group.classList.add('has-error');
        if (errorMsg) errorMsg.textContent = 'Please enter a valid phone number.';
      } else {
        group.classList.remove('has-error');
        // Check secondary contact difference
        const rContact = document.getElementById('receiver-contact');
        const sContact = document.getElementById('receiver-secondary-contact');
        if (rContact && sContact) {
          const rVal = rContact.value.trim();
          const sVal = sContact.value.trim();
          const sGroup = sContact.closest('.form-group');
          const sError = sGroup ? sGroup.querySelector('.error-msg') : null;
          const cleanDigits = str => (str || '').replace(/\D/g, '');
          if (rVal && sVal && cleanDigits(rVal) === cleanDigits(sVal)) {
            if (sGroup) sGroup.classList.add('has-error');
            if (sError) sError.textContent = 'Secondary contact number must be different from receiver contact number.';
          } else if (sVal && isValidPhone(sVal) && cleanDigits(rVal) !== cleanDigits(sVal)) {
            if (sGroup) sGroup.classList.remove('has-error');
          }
        }
      }
    };
    input.addEventListener('blur', validate);
    input.addEventListener('input', () => {
      if (input.closest('.form-group')?.classList.contains('has-error') || id === 'receiver-contact' || id === 'receiver-secondary-contact') {
        validate();
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      showOrderSummary();
    }
  });
}
// ← add this whole new function anywhere nearby
function setMinDeliveryDate() {
  const dateInput = document.getElementById('order-date');
  if (!dateInput) return;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2); // today + 2 days

  const yyyy = minDate.getFullYear();
  const mm = String(minDate.getMonth() + 1).padStart(2, '0');
  const dd = String(minDate.getDate()).padStart(2, '0');

  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

function validateForm() {
  let valid = true;

  // Fields with their own dedicated format-aware validation below —
  // skip them in the generic required-field loop to avoid conflicts.
  const emailPhoneIds = [
    'sender-email', 'receiver-email', 'receiver-secondary-email',
    'sender-contact', 'receiver-contact', 'receiver-secondary-contact',
  ];

  const required = document.querySelectorAll('#order-form [required]');
  required.forEach(field => {
    if (emailPhoneIds.includes(field.id)) return;
    const group = field.closest('.form-group');
    if (!field.value.trim()) {
      if (group) group.classList.add('has-error');
      valid = false;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  // ── Email fields ──
  const emailFields = [
    { id: 'sender-email', required: true },
    { id: 'receiver-email', required: true },
    { id: 'receiver-secondary-email', required: false },
  ];
  emailFields.forEach(({ id, required: isRequired }) => {
    const field = document.getElementById(id);
    if (!field) return;
    const group = field.closest('.form-group');
    const errorSpan = group ? group.querySelector('.error-msg') : null;
    const value = field.value.trim();

    if (!value) {
      if (isRequired) {
        if (group) group.classList.add('has-error');
        if (errorSpan) errorSpan.textContent = 'Please enter your email address.';
        valid = false;
      } else {
        if (group) group.classList.remove('has-error');
      }
    } else if (!isValidEmail(value)) {
      if (group) group.classList.add('has-error');
      if (errorSpan) errorSpan.textContent = 'Please enter a valid email address.';
      valid = false;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  // ── Phone fields ──
  const phoneFields = [
    { id: 'sender-contact', required: true },
    { id: 'receiver-contact', required: true },
    { id: 'receiver-secondary-contact', required: false },
  ];
  phoneFields.forEach(({ id, required: isRequired }) => {
    const field = document.getElementById(id);
    if (!field) return;
    const group = field.closest('.form-group');
    const errorSpan = group ? group.querySelector('.error-msg') : null;
    const value = field.value.trim();

    if (!value) {
      if (isRequired) {
        if (group) group.classList.add('has-error');
        if (errorSpan) errorSpan.textContent = 'Please enter your contact number.';
        valid = false;
      } else {
        if (group) group.classList.remove('has-error');
      }
    } else if (!isValidPhone(value)) {
      if (group) group.classList.add('has-error');
      if (errorSpan) errorSpan.textContent = 'Please enter a valid contact number.';
      valid = false;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  // ── Secondary Phone Uniqueness Check ──
  const rContact = document.getElementById('receiver-contact');
  const secContact = document.getElementById('receiver-secondary-contact');
  if (rContact && secContact) {
    const rVal = rContact.value.trim();
    const secVal = secContact.value.trim();
    if (secVal) {
      const cleanDigits = str => (str || '').replace(/\D/g, '');
      const cleanR = cleanDigits(rVal);
      const cleanSec = cleanDigits(secVal);
      if (cleanR && cleanSec && cleanR === cleanSec) {
        const group = secContact.closest('.form-group');
        if (group) {
          group.classList.add('has-error');
          const errorSpan = group.querySelector('.error-msg');
          if (errorSpan) {
            errorSpan.textContent = 'Secondary contact number must be different from the receiver contact number.';
          }
        }
        valid = false;
      }
    }
  }

  // ── Delivery date — must be at least 2 days from today ──
  const dateInput = document.getElementById('order-date');
  if (dateInput && dateInput.value) {
    const selected = new Date(dateInput.value);
    const minAllowed = new Date();
    minAllowed.setDate(minAllowed.getDate() + 2);
    minAllowed.setHours(0, 0, 0, 0);
    selected.setHours(0, 0, 0, 0);

    if (selected < minAllowed) {
      const group = dateInput.closest('.form-group');
      if (group) group.classList.add('has-error');
      valid = false;
    }
  }

  // ── Cart must not be empty ──
  if (cart.length === 0) {
    valid = false;
    showToast('Please add at least one item to your cart from the Gift Menu before placing an order.', 'error');
  }

  if (!valid) {
    const firstError = document.querySelector('.form-group.has-error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return valid;
}

// ============================================================
// ORDER SUMMARY
// ============================================================
function showOrderSummary() {
  const section = document.getElementById('order-summary-section');
  const wrapper = document.getElementById('summary-content');

  // Anti-spam honeypot check
  const hp = document.getElementById('order-hp');
  if (hp && hp.value.trim() !== '') {
    showToast('Your order could not be processed at this time.', 'error');
    return;
  }

  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? sanitizeText(el.value, 1000) : '';
  };

  // Gather form data — keys match A3 backend spec exactly
  const data = {
    senderName: getVal('sender-name'),
    senderContact: getVal('sender-contact'),
    senderCountry: getVal('sender-country'),
    senderEmail: getVal('sender-email'),
    receiverName: getVal('receiver-name'),
    receiverEmail: getVal('receiver-email'),
    secondaryContactName: getVal('receiver-secondary-name'),
    secondaryContactNumber: getVal('receiver-secondary-contact'),
    secondaryContactEmail: getVal('receiver-secondary-email'),
    receiverContact: getVal('receiver-contact'),
    deliveryAddress: getVal('receiver-address') || getVal('receiver-landmark') || getVal('receiver-city'),
    deliveryCountry: getVal('receiver-country'),
    citySuburb: getVal('receiver-city'),
    postalCode: getVal('receiver-postal'),
    landmark: getVal('receiver-landmark'),
    mapsLink: getVal('receiver-maps-link'),
    additionalItems: getVal('order-additional'),
    personalMessage: getVal('order-message'),
    customizationDetails: getVal('order-customization'),
    preferredDeliveryDate: getVal('order-date'),
    occasion: getVal('order-occasion'),
  };

  // Build cart items string and compute totals
  const cartStr = cart.map(i => `${i.name} (x${i.qty})`).join(', ');
  const totalAud = window._cartTotalAud || 0;
  const totalNpr = window._cartTotalNpr || 0;

  // Determine currency, order total, and advance
  const currency = currentCurrency;
  let orderTotal, advancePaid, advanceText;

  if (currency === 'NPR' && totalNpr > 0) {
    orderTotal = totalNpr.toFixed(2);
    advancePaid = totalNpr.toFixed(2); // 100% payment required
    advanceText = `NPR रू ${advancePaid}`;
  } else {
    orderTotal = totalAud.toFixed(2);
    advancePaid = totalAud.toFixed(2);
    advanceText = `AUD $${advancePaid}`;
  }
  const priceText = formatPrice(totalAud, totalNpr);

  // Generate Parcel ID: GK-YYMMDD-####
  const d = new Date();
  const yy = String(d.getFullYear()).slice(2);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 9000) + 1000);
  const parcelId = `GK-${yy}${mm}${dd}-${rand}`;

  // Store for submitPayment
  window._orderData = {
    ...data,
    parcelId,
    packageItems: cartStr,
    currency,
    orderTotal,
    advancePaid,
  };
  window._orderPriceText = priceText;
  window._orderAdvanceText = advanceText;

  // Validate Maps Link security
  const safeMapsLink = (data.mapsLink && isSafeUrl(data.mapsLink)) ? data.mapsLink : null;

  wrapper.innerHTML = `
    <div class="summary-group">
      <h4>📦 Parcel ID: <span style="color:var(--rose-gold);">${escapeHtml(parcelId)}</span></h4>
    </div>
    <div class="summary-group">
      <h4>👤 Sender Details</h4>
      <div class="summary-row"><span class="label">Name</span><span class="value">${escapeHtml(data.senderName)}</span></div>
      <div class="summary-row"><span class="label">Contact</span><span class="value">${escapeHtml(data.senderContact)}</span></div>
      <div class="summary-row"><span class="label">Email</span><span class="value">${escapeHtml(data.senderEmail)}</span></div>
      <div class="summary-row"><span class="label">Country</span><span class="value">${escapeHtml(data.senderCountry)}</span></div>
    </div>
    <div class="summary-group">
      <h4>🎁 Receiver Details</h4>
      <div class="summary-row"><span class="label">Full Name</span><span class="value">${escapeHtml(data.receiverName)}</span></div>
      <div class="summary-row"><span class="label">Contact</span><span class="value">${escapeHtml(data.receiverContact)}</span></div>
      <div class="summary-row"><span class="label">Email</span><span class="value">${escapeHtml(data.receiverEmail)}</span></div>
      <div class="summary-row"><span class="label">Country</span><span class="value">${escapeHtml(data.deliveryCountry)}</span></div>
      <div class="summary-row"><span class="label">City / Suburb</span><span class="value">${escapeHtml(data.citySuburb)}</span></div>
      <div class="summary-row"><span class="label">Landmark / Instructions</span><span class="value">${escapeHtml(data.landmark || '—')}</span></div>
      ${data.secondaryContactName ? `<div class="summary-row"><span class="label">Secondary Contact</span><span class="value">${escapeHtml(data.secondaryContactName)} (${escapeHtml(data.secondaryContactNumber || '—')})</span></div>` : ''}
      <div class="summary-row"><span class="label">Maps Location</span><span class="value">${safeMapsLink ? `<a href="${escapeHtml(safeMapsLink)}" target="_blank" rel="noopener noreferrer">View Pinned Location →</a>` : (data.mapsLink ? escapeHtml(data.mapsLink) : '—')}</span></div>
    </div>
    <div class="summary-group">
      <h4>🎀 Gift Details</h4>
      <div class="summary-row"><span class="label">Cart Items</span><span class="value">${escapeHtml(cartStr || '—')}</span></div>
      <div class="summary-row"><span class="label">Additional Items</span><span class="value">${escapeHtml(data.additionalItems || '—')}</span></div>
      <div class="summary-row"><span class="label">Personal Message</span><span class="value">${escapeHtml(data.personalMessage || '—')}</span></div>
      <div class="summary-row"><span class="label">Customization</span><span class="value">${escapeHtml(data.customizationDetails || '—')}</span></div>
      <div class="summary-row"><span class="label">Delivery Date</span><span class="value">${escapeHtml(data.preferredDeliveryDate || '—')}</span></div>
      <div class="summary-row"><span class="label">Occasion</span><span class="value">${escapeHtml(data.occasion || '—')}</span></div>
    </div>
    <div class="summary-total">Order Total: ${priceText}</div>
    <p class="summary-advance-note"><strong>Full payment secures your order.</strong> We ask for 100% payment upfront so we can start preparing your gift right away, with care. Your trust means everything to us — we won't let you down: <strong>${advanceText}</strong></p>

    <h4 style="font-family:var(--font-display); margin-bottom:16px; text-align:center;">Payment Options</h4>
    <div class="payment-qr-row">
      <div class="qr-card">
        <h5>eSewa QR</h5>
        <img src="${PAYMENT_IMAGES.esewaQR}" alt="eSewa QR Code" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <span class="placeholder-label" style="display:none;">📷 esewa-qr.jpg<br>Place your eSewa QR image here</span>
      </div>
      <div class="qr-card">
        <h5>Laxmi Sunrise Bank QR</h5>
        <img src="${PAYMENT_IMAGES.laxmiBankQR}" alt="Laxmi Sunrise Bank QR Code" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <span class="placeholder-label" style="display:none;">📷 laxmi-bank-qr.jpg<br>Place your bank QR image here</span>
      </div>
    </div>

    <div class="payment-form-group">
      <label for="payment-ref">Transaction Reference Number <span class="required">*</span></label>
      <input type="text" id="payment-ref" required placeholder="Enter your payment reference / transaction ID" maxlength="100">
      <span class="error-msg" id="payment-ref-error" style="display:none; color:red; font-size:0.85rem;">Please enter a payment reference to continue.</span>
    </div>
    <div class="payment-form-group">
      <label for="payment-screenshot">Upload Payment Screenshot <span class="required">*</span></label>
      <input type="file" id="payment-screenshot" accept="image/*" required onchange="handleScreenshot(this)">
      <span class="error-msg" id="payment-screenshot-error" style="display:none; color:red; font-size:0.85rem;">Please upload a screenshot of your payment to continue.</span>
      <div id="screenshot-preview-box" class="screenshot-preview-wrapper"></div>
      <p style="font-size:0.75rem; color:var(--espresso-light); margin-top:4px;">
        Your screenshot will be resized securely in browser and linked to your order for verification (max 8MB).
      </p>
    </div>

    <div class="payment-actions">
      <button class="btn btn-primary btn-lg" id="submit-payment-btn" onclick="submitPayment()">
        ✅ I've Made the Payment
      </button>
      <button class="btn btn-outline btn-sm" onclick="editOrder()">
        ← Go Back & Edit Order
      </button>
    </div>
  `;

  // Reset screenshot state if opened freshly
  if (paymentScreenshotBase64) {
    renderScreenshotPreview('Payment Screenshot', 'Attached');
  }

  // Show summary section, hide form
  section.classList.add('visible');
  section.scrollIntoView({ behavior: 'smooth' });
}

function editOrder() {
  const section = document.getElementById('order-summary-section');
  section.classList.remove('visible');
  document.getElementById('order-form-section').scrollIntoView({ behavior: 'smooth' });
}

function updateSummaryTotal() {
  const totalEl = document.querySelector('.summary-total');
  if (!totalEl) return;
  const priceText = formatPrice(window._cartTotalAud || 0, window._cartTotalNpr || 0);
  totalEl.textContent = `Order Total: ${priceText}`;
}

// ============================================================
// PAYMENT: Screenshot handler (client-side base64 with validation)
// ============================================================
function handleScreenshot(input) {
  const file = input.files && input.files[0];
  const errorEl = document.getElementById('payment-screenshot-error');
  if (!file) return;

  if (!file.type || !file.type.startsWith('image/')) {
    if (errorEl) {
      errorEl.textContent = 'Please select a valid image file (JPEG, PNG, WEBP).';
      errorEl.style.display = 'block';
    }
    showToast('Only image files are allowed.', 'error');
    input.value = '';
    return;
  }

  const maxBytes = 8 * 1024 * 1024; // 8MB
  if (file.size > maxBytes) {
    if (errorEl) {
      errorEl.textContent = 'File size is too large (max 8MB). Please choose a smaller image.';
      errorEl.style.display = 'block';
    }
    showToast('Image file too large (max 8MB).', 'error');
    input.value = '';
    return;
  }

  if (errorEl) errorEl.style.display = 'none';

  const reader = new FileReader();
  reader.onerror = () => {
    showToast('Failed to read image file. Please try again.', 'error');
    paymentScreenshotBase64 = null;
  };
  reader.onload = (e) => {
    const img = new Image();
    img.onerror = () => {
      showToast('Corrupted or invalid image.', 'error');
      paymentScreenshotBase64 = null;
    };
    img.onload = () => {
      // Resize down to max 1000px on the longest side — keeps upload fast and storage light
      const maxDim = 1000;
      let width = img.width;
      let height = img.height;
      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      paymentScreenshotBase64 = canvas.toDataURL('image/jpeg', 0.82);

      renderScreenshotPreview(file.name, (file.size / 1024).toFixed(0) + ' KB');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function renderScreenshotPreview(fileName, fileSize) {
  const previewEl = document.getElementById('screenshot-preview-box');
  if (!previewEl || !paymentScreenshotBase64) return;
  previewEl.style.display = 'flex';
  previewEl.innerHTML = `
    <img src="${paymentScreenshotBase64}" alt="Screenshot preview" class="screenshot-preview-thumb">
    <div class="screenshot-preview-meta">
      <strong>${escapeHtml(fileName)}</strong><br>
      <span>${escapeHtml(fileSize)} · Optimized for upload</span>
    </div>
    <button type="button" class="screenshot-preview-remove" onclick="removeScreenshot()">✕ Remove</button>
  `;
}

function removeScreenshot() {
  paymentScreenshotBase64 = null;
  const input = document.getElementById('payment-screenshot');
  if (input) input.value = '';
  const previewEl = document.getElementById('screenshot-preview-box');
  if (previewEl) {
    previewEl.style.display = 'none';
    previewEl.innerHTML = '';
  }
}

// ============================================================
// PAYMENT: Submit & WhatsApp notification
// ============================================================
function submitPayment() {
  const paymentRef = (document.getElementById('payment-ref')?.value || '').trim();
  const refError = document.getElementById('payment-ref-error');
  const screenshotError = document.getElementById('payment-screenshot-error');

  if (!paymentRef) {
    if (refError) refError.style.display = 'block';
    return;
  }
  if (refError) refError.style.display = 'none';

  if (!paymentScreenshotBase64) {
    if (screenshotError) {
      screenshotError.textContent = 'Please upload a screenshot of your payment to continue.';
      screenshotError.style.display = 'block';
    }
    return;
  }
  if (screenshotError) screenshotError.style.display = 'none';

  if (isRateLimited('order_submit', 5000)) {
    showToast('Please wait a moment before submitting again.', 'error');
    return;
  }

  const data = window._orderData;
  if (!data) return;

  const btn = document.getElementById('submit-payment-btn');
  if (btn) {
    btn.textContent = 'Submitting...';
    btn.disabled = true;
  }

  // Build the payload matching A3 column layout exactly
  const payload = {
    type: 'order',
    parcelId: data.parcelId,
    senderName: sanitizeText(data.senderName, 100),
    senderContact: sanitizeText(data.senderContact, 30),
    senderCountry: sanitizeText(data.senderCountry, 50),
    receiverName: sanitizeText(data.receiverName, 100),
    receiverContact: sanitizeText(data.receiverContact, 30),
    deliveryAddress: sanitizeText(data.deliveryAddress, 255),
    deliveryCountry: sanitizeText(data.deliveryCountry, 50),
    citySuburb: sanitizeText(data.citySuburb, 100),
    postalCode: sanitizeText(data.postalCode, 20),
    landmark: sanitizeText(data.landmark, 255),
    mapsLink: isSafeUrl(data.mapsLink) ? data.mapsLink : '',
    packageItems: sanitizeText(data.packageItems, 500),
    additionalItems: sanitizeText(data.additionalItems, 255),
    personalMessage: sanitizeText(data.personalMessage, 1000),
    customizationDetails: sanitizeText(data.customizationDetails, 1000),
    preferredDeliveryDate: sanitizeText(data.preferredDeliveryDate, 30),
    occasion: sanitizeText(data.occasion, 50),
    currency: data.currency,
    orderTotal: data.orderTotal,
    advancePaid: data.advancePaid,
    paymentReference: sanitizeText(paymentRef, 100),
    paymentScreenshotBase64: paymentScreenshotBase64,
    paymentScreenshotMimeType: 'image/jpeg',
    senderEmail: sanitizeText(data.senderEmail, 100),
    receiverEmail: sanitizeText(data.receiverEmail, 100),
    secondaryContactName: sanitizeText(data.secondaryContactName, 100),
    secondaryContactNumber: sanitizeText(data.secondaryContactNumber, 30),
    secondaryContactEmail: sanitizeText(data.secondaryContactEmail, 100),
  };

  fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(result => {
      if (result && result.success) {
        renderSuccessScreen(data, paymentRef);
        sessionStorage.removeItem('giftCart');
        cart = [];
        updateCartBadge();
        paymentScreenshotBase64 = null;
      } else {
        renderErrorScreen(data, paymentRef);
      }
    })
    .catch(err => {
      console.error('Order submission failed:', err);
      renderErrorScreen(data, paymentRef);
    });
}

function renderSuccessScreen(data, paymentRef) {
  const summaryContent = document.getElementById('summary-content');

  // WhatsApp Link Fallback
  const waMessage = encodeURIComponent(
    `🎁 *New Order Received*\n\n` +
    `📦 *Parcel ID:* ${data.parcelId}\n` +
    `💰 *Order Total:* ${window._orderPriceText}\n` +
    `🧾 *Payment Ref:* ${paymentRef}`
  );

  // Mailto fallback
  const mailSubject = encodeURIComponent(`New Order: ${data.parcelId}`);
  const mailBody = encodeURIComponent(
    `Parcel ID: ${data.parcelId}\nOrder Total: ${window._orderPriceText}\nPayment Ref: ${paymentRef}`
  );

  summaryContent.innerHTML = `
    <div class="payment-success visible">
      <div class="success-icon">💗</div>
      <h3 style="margin-bottom:12px;">Thank you for ordering!</h3>
      <p style="margin-bottom:12px; font-weight:bold; color:var(--espresso);">
        Your tracking code: <span style="font-size:1.2rem; display:inline-block; margin-left:8px; padding:4px 8px; background:var(--pink-softer); border:1px solid var(--rose-gold); border-radius:4px;">${escapeHtml(data.parcelId)}</span>
      </p>
      <p style="margin-bottom:20px;">
        Your order will be dispatched as soon as possible. The invoice will be sent with your parcel — you'll receive a digital invoice within 24 hours. Save this code to check your order status anytime in the Track Order section.
      </p>
      
      <p style="font-size:0.85rem; color:var(--espresso-light); margin-bottom:10px;">
        We also suggest sending us a quick note so we don't miss it:
      </p>
      <div class="fallback-links">
        <a href="https://wa.me/${CONTACT.whatsappNumber}?text=${waMessage}" target="_blank" class="btn btn-whatsapp">
          💬 Message Us on WhatsApp
        </a>
        <a href="mailto:${CONTACT.email}?subject=${mailSubject}&body=${mailBody}" class="btn btn-outline btn-sm" style="border-color:var(--rose-gold);">
          📧 Email Us
        </a>
      </div>
    </div>
  `;
}

function renderErrorScreen(data, paymentRef) {
  const summaryContent = document.getElementById('summary-content');
  const btn = document.getElementById('submit-payment-btn');
  if (btn) {
    btn.textContent = '✅ I\'ve Made the Payment';
    btn.disabled = false;
  }

  // WhatsApp fallback for error case
  const waMessage = encodeURIComponent(
    `🎁 *Order Submission Issue*\n\n` +
    `📦 *Parcel ID:* ${data.parcelId}\n` +
    `💰 *Order Total:* ${window._orderPriceText}\n` +
    `🧾 *Payment Ref:* ${paymentRef}\n\n` +
    `The online form had an issue — please help confirm my order.`
  );

  summaryContent.innerHTML = `
    <div class="payment-success visible">
      <div class="success-icon">⚠️</div>
      <h3 style="margin-bottom:12px; color:var(--rose-gold);">Something went wrong</h3>
      <p style="margin-bottom:12px;">
        We couldn't submit your order automatically. <strong>Don't worry — your payment details are saved.</strong>
      </p>
      <p style="margin-bottom:20px;">
        Please contact us directly so we can process your order manually:
      </p>
      <div class="fallback-links">
        <a href="https://wa.me/${CONTACT.whatsappNumber}?text=${waMessage}" target="_blank" class="btn btn-whatsapp">
          💬 Message Us on WhatsApp
        </a>
        <a href="mailto:${CONTACT.email}?subject=Order%20Issue%20-%20${encodeURIComponent(data.parcelId)}" class="btn btn-outline btn-sm" style="border-color:var(--rose-gold);">
          📧 Email Us
        </a>
      </div>
      <p style="font-size:0.85rem; color:var(--espresso-light); margin-top:16px;">
        Your Parcel ID: <strong>${escapeHtml(data.parcelId)}</strong> — please include this when contacting us.
      </p>
    </div>
  `;
}

// ============================================================
// OTHER ENDPOINT CALLS (Track, Enquiry, Review, Franchise)
// ============================================================

// ── TRACKING ──
window.doTracking = function () {
  const tid = sanitizeText(document.getElementById('tracking-id')?.value || '', 50);
  const resDiv = document.getElementById('tracking-result');
  const btn = document.getElementById('tracking-btn');
  if (!tid) return;

  if (isRateLimited('tracking_lookup', 3000)) {
    showToast('Please wait a moment before checking tracking status again.', 'error');
    return;
  }

  if (btn) {
    btn.textContent = 'Checking...';
    btn.disabled = true;
  }

  const TRACKING_STEPS = ['Order Placed', 'Sent to Warehouse', 'Sent to Shop', 'Out for Delivery', 'Delivered'];

  fetch(SHEET_API_URL + "?parcelId=" + encodeURIComponent(tid), {
    method: 'GET'
  }).then(res => res.json()).then(data => {
    if (btn) {
      btn.textContent = 'Check Status';
      btn.disabled = false;
    }
    if (!resDiv) return;
    resDiv.style.display = 'block';

    if (data && data.success) {
      const currentStatus = data.status || 'Order Placed';
      const currentIdx = TRACKING_STEPS.indexOf(currentStatus);

      const stepsHtml = TRACKING_STEPS.map((step, idx) => {
        let style = 'font-size:0.8rem; text-align:center; flex:1; padding:8px 4px; border-radius:6px; ';
        if (idx < currentIdx) {
          style += 'color:green; font-weight:500; background:rgba(37,211,102,0.08);';
        } else if (idx === currentIdx) {
          style += 'font-weight:bold; color:var(--espresso); background:var(--pink-softer); border:1px solid var(--rose-gold);';
        } else {
          style += 'color:var(--espresso-light);';
        }
        return `<div style="${style}">${idx <= currentIdx ? '✅' : '⬜'} ${escapeHtml(step)}</div>`;
      }).join('');

      resDiv.innerHTML = `
        <div style="background:white; padding:20px; border-radius:8px; border:1px solid var(--pink-primary); text-align:left;">
          <h4 style="margin:0 0 10px 0;">Order: ${escapeHtml(tid)}</h4>
          <p>Status: <strong style="color:var(--rose-gold);">${escapeHtml(currentStatus)}</strong></p>
          <div style="display:flex; margin-top:15px; border-top:1px solid #eee; padding-top:15px; gap:4px;">
            ${stepsHtml}
          </div>
        </div>
      `;
    } else {
      resDiv.innerHTML = `
        <div style="background:white; padding:20px; border-radius:8px; border:1px solid var(--pink-primary); text-align:center;">
          <p style="color:var(--espresso); margin-bottom:12px;">We couldn't find that tracking code — please double check it or contact us.</p>
          <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
            <a href="https://wa.me/${CONTACT.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
            <a href="mailto:${CONTACT.email}" class="btn btn-outline btn-sm">📧 Email</a>
          </div>
        </div>
      `;
    }
  }).catch(err => {
    console.error('Tracking lookup failed:', err);
    if (btn) {
      btn.textContent = 'Check Status';
      btn.disabled = false;
    }
    if (!resDiv) return;
    resDiv.style.display = 'block';
    resDiv.innerHTML = `
      <div style="background:white; padding:20px; border-radius:8px; border:1px solid red; text-align:center;">
        <p style="color:red; margin-bottom:8px;">Something went wrong while checking your order status.</p>
        <p style="font-size:0.85rem; color:var(--espresso-light);">Please check your connection and try again, or contact us directly.</p>
        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:12px;">
          <a href="https://wa.me/${CONTACT.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
          <a href="mailto:${CONTACT.email}" class="btn btn-outline btn-sm">📧 Email</a>
        </div>
      </div>
    `;
  });
};

// ── ENQUIRY ──
window.submitEnquiry = function () {
  // Anti-spam honeypot
  const hp = document.getElementById('enquiry-hp');
  if (hp && hp.value.trim() !== '') {
    showToast('Enquiry sent successfully!', 'success');
    document.getElementById('enquiry-form')?.reset();
    setTimeout(closeEnquiryModal, 1500);
    return;
  }

  const name = sanitizeText(document.getElementById('enquiry-name')?.value || '', 100);
  const email = sanitizeText(document.getElementById('enquiry-email')?.value || '', 100);
  const msg = sanitizeText(document.getElementById('enquiry-msg')?.value || '', 1000);
  const pid = sanitizeText(document.getElementById('enquiry-pid')?.value || '', 100);

  if (!name) {
    showToast('Please enter your name.', 'error');
    document.getElementById('enquiry-name')?.focus();
    return;
  }
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address.', 'error');
    document.getElementById('enquiry-email')?.focus();
    return;
  }
  if (!msg) {
    showToast('Please enter your enquiry message.', 'error');
    document.getElementById('enquiry-msg')?.focus();
    return;
  }

  if (isRateLimited('enquiry_submit', 4000)) {
    showToast('Please wait a moment before sending another enquiry.', 'error');
    return;
  }

  const btn = document.getElementById('enquiry-submit-btn');
  if (btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
  }

  const payload = {
    type: 'enquiry',
    enquiryType: 'Product Enquiry',
    productName: pid,
    customerName: name,
    contact: email,
    message: msg,
  };

  fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).then(res => res.json()).then(result => {
    if (btn) {
      btn.textContent = 'Submit Enquiry';
      btn.disabled = false;
    }
    if (result && result.success) {
      const succ = document.getElementById('enquiry-success');
      if (succ) succ.style.display = 'block';
      document.getElementById('enquiry-form')?.reset();
      clearEnquirySelection();
      setTimeout(() => {
        if (succ) succ.style.display = 'none';
        closeEnquiryModal();
      }, 2000);
    } else {
      showToast('There was an issue submitting your enquiry. Please try again or contact us directly.', 'error');
    }
  }).catch(err => {
    console.error('Enquiry submission failed:', err);
    if (btn) {
      btn.textContent = 'Submit Enquiry';
      btn.disabled = false;
    }
    showToast('Something went wrong. Please try again or contact us on WhatsApp.', 'error');
  });
};

// ── REVIEW / FEEDBACK ──
window.submitReview = function () {
  // Anti-spam honeypot
  const hp = document.getElementById('review-hp');
  if (hp && hp.value.trim() !== '') {
    showToast('Thank you for your feedback!', 'success');
    document.getElementById('review-form')?.reset();
    setTimeout(closeReviewModal, 1500);
    return;
  }

  const name = sanitizeText(document.getElementById('review-name')?.value || '', 100);
  const rating = sanitizeText(document.getElementById('review-stars')?.value || '5', 5);
  const comments = sanitizeText(document.getElementById('review-text')?.value || '', 1000);
  const parcelId = sanitizeText(document.getElementById('review-parcel-id')?.value || '', 50);
  const displayPublicly = document.getElementById('review-public') ? document.getElementById('review-public').checked : false;

  if (!name) {
    showToast('Please enter your name.', 'error');
    document.getElementById('review-name')?.focus();
    return;
  }
  if (!comments) {
    showToast('Please enter your review text.', 'error');
    document.getElementById('review-text')?.focus();
    return;
  }

  if (isRateLimited('review_submit', 4000)) {
    showToast('Please wait a moment before submitting another review.', 'error');
    return;
  }

  const btn = document.getElementById('review-submit-btn');
  if (btn) {
    btn.textContent = 'Submitting...';
    btn.disabled = true;
  }

  const payload = {
    type: 'feedback',
    customerName: name,
    rating: rating,
    comments: comments,
    parcelId: parcelId,
    displayPublicly: displayPublicly,
  };

  fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).then(res => res.json()).then(result => {
    if (btn) {
      btn.textContent = 'Submit Review';
      btn.disabled = false;
    }
    if (result && result.success) {
      const succ = document.getElementById('review-success');
      if (succ) succ.style.display = 'block';
      document.getElementById('review-form')?.reset();
      setTimeout(() => {
        if (succ) succ.style.display = 'none';
        closeReviewModal();
      }, 2000);
    } else {
      showToast('There was an issue submitting your review. Please try again.', 'error');
    }
  }).catch(err => {
    console.error('Review submission failed:', err);
    if (btn) {
      btn.textContent = 'Submit Review';
      btn.disabled = false;
    }
    showToast('Something went wrong. Please try again.', 'error');
  });
};

// ── FRANCHISE ──
window.submitFranchise = function () {
  // Anti-spam honeypot
  const hp = document.getElementById('franchise-hp');
  if (hp && hp.value.trim() !== '') {
    showToast('Thank you! We have received your inquiry.', 'success');
    document.getElementById('franchise-form')?.reset();
    return;
  }

  const name = sanitizeText(document.getElementById('franchise-name')?.value || '', 100);
  const city = sanitizeText(document.getElementById('franchise-city')?.value || '', 100);
  const email = sanitizeText(document.getElementById('franchise-email')?.value || '', 100);
  const msg = sanitizeText(document.getElementById('franchise-msg')?.value || '', 1000);

  if (!name) {
    showToast('Please enter your name.', 'error');
    document.getElementById('franchise-name')?.focus();
    return;
  }
  if (!city) {
    showToast('Please enter your city or business name.', 'error');
    document.getElementById('franchise-city')?.focus();
    return;
  }
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address.', 'error');
    document.getElementById('franchise-email')?.focus();
    return;
  }
  if (!msg) {
    showToast('Please enter your message.', 'error');
    document.getElementById('franchise-msg')?.focus();
    return;
  }

  if (isRateLimited('franchise_submit', 4000)) {
    showToast('Please wait a moment before sending another inquiry.', 'error');
    return;
  }

  const btn = document.getElementById('franchise-submit-btn');
  if (btn) {
    btn.textContent = 'Submitting...';
    btn.disabled = true;
  }

  const payload = {
    type: 'franchise',
    customerName: name,
    city: city,
    contact: email,
    message: msg,
  };

  fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).then(res => res.json()).then(result => {
    if (btn) {
      btn.textContent = 'Submit Inquiry';
      btn.disabled = false;
    }
    if (result && result.success) {
      const succ = document.getElementById('franchise-success');
      if (succ) succ.style.display = 'block';
      document.getElementById('franchise-form')?.reset();
    } else {
      showToast('There was an issue submitting your inquiry. Please try again or email us directly.', 'error');
    }
  }).catch(err => {
    console.error('Franchise submission failed:', err);
    if (btn) {
      btn.textContent = 'Submit Inquiry';
      btn.disabled = false;
    }
    showToast('Something went wrong. Please try again or email us directly.', 'error');
  });
};

// ============================================================
// SCROLL EFFECTS: Fade-in on scroll, sticky header shadow
// ============================================================

let fadeInObserver;

function initScrollEffects() {
  fadeInObserver = new IntersectionObserver((entries) => {   // ← removed "const"
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));

  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => fadeInObserver.observe(el));
  }, 300);


  // Header shadow on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);

    // Scroll-to-top button
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (scrollBtn) {
      scrollBtn.classList.toggle('visible', window.scrollY > 500);
    }
  });

  // Scroll-to-top button click
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
function observeFadeIns() {
  if (!fadeInObserver) return;
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => fadeInObserver.observe(el));
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ============================================================
// LIGHTBOX
// ============================================================
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightbox(src, alt, isCircle = false) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lightbox || !img) return;

  img.src = src;
  img.alt = alt || '';
  if (isCircle || (src && (src.toLowerCase().includes('logo') || src.toLowerCase().includes('giftsbykrivya')))) {
    lightbox.classList.add('is-circle');
  } else {
    lightbox.classList.remove('is-circle');
  }
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    lightbox.classList.remove('is-circle');
  }
}

// ============================================================
// PAYMENT section init
// ============================================================
function initPayment() {
  // nothing to init here — handled by showOrderSummary
}

// ============================================================
// SMOOTH SCROLL for anchor links
// ============================================================
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
// ──────────────────────────────────────────────────────────────
// OCCASION SPECIALS — render cards + modal
// ──────────────────────────────────────────────────────────────
function renderOccasionSpecials() {
  const grid = document.getElementById('occasion-grid');
  if (!grid) return;

  if (!OCCASION_SPECIALS || OCCASION_SPECIALS.length === 0) {
    grid.innerHTML = `
      <div class="occasion-coming-soon">
        <span class="occasion-coming-soon-icon">🎁</span>
        <h3>Something Special is Coming Soon</h3>
        <p>We're preparing our next festival gift collection — check back soon!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = OCCASION_SPECIALS.map(o => {
    const badgeHtml = o.hasIcon
      ? `<span class="badge-star">✨</span><span class="badge-text">${escapeHtml(o.badgeText || 'Featured')}</span>`
      : `<span class="badge-text">${escapeHtml(o.badgeText || 'Festival Special')}</span>`;

    return `
      <article class="occasion-card fade-in" data-occasion-id="${escapeHtml(o.id)}">
        <div class="occasion-card-badge">
          ${badgeHtml}
        </div>
        <div class="occasion-card-img">
          <img src="${escapeHtml(o.image)}" alt="${escapeHtml(o.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
          <span class="placeholder-label" style="display:none;">📷 ${escapeHtml(o.image.split('/').pop())}<br>Drop your photo here</span>
        </div>
        <div class="occasion-card-body">
          <div>
            <h3 class="occasion-card-name">${escapeHtml(o.name)}</h3>
            <p class="occasion-card-desc">${escapeHtml(o.teaser)}</p>
          </div>
          <button class="btn btn-primary btn-sm occasion-btn" onclick="openOccasionModal('${escapeHtml(o.id)}')">
            View Package (${o.packageItems ? o.packageItems.length : 0} items)
          </button>
        </div>
      </article>
    `;
  }).join('');
}
function openOccasionModal(occasionId) {
  const o = OCCASION_SPECIALS.find(item => item.id === occasionId);
  const modal = document.getElementById('occasion-modal');
  if (!o || !modal) return;

  document.getElementById('occasion-modal-name').textContent = o.name;
  document.getElementById('occasion-modal-teaser').textContent = o.teaser;

  document.getElementById('occasion-modal-items').innerHTML = o.packageItems.map(item => `
    <div style="display:flex; gap:12px; align-items:center; padding:10px 0; border-bottom:1px solid #f0e6e8;">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}"
        style="width:48px; height:48px; object-fit:cover; border-radius:8px; flex-shrink:0; background:var(--pink-softer);"
        onerror="this.src=''; this.style.background='var(--pink-softer)';">
      <div style="flex:1;">
        <div style="font-weight:600; font-size:0.9rem;">${escapeHtml(item.name)}</div>
        <div style="font-size:0.85rem; color:var(--espresso-light);">${formatPrice(item.priceAUD, item.priceNPR)}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="addOccasionItemToCart('${escapeHtml(o.id)}', '${escapeHtml(item.id)}')">
        🛒 Add
      </button>
    </div>
  `).join('');

  modal.classList.add('active');
}

function addOccasionItemToCart(occasionId, itemId) {
  const o = OCCASION_SPECIALS.find(item => item.id === occasionId);
  if (!o) return;
  const item = o.packageItems.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  showToast(item.name + ' added to your order!', 'success');
}

function closeOccasionModal() {
  const modal = document.getElementById('occasion-modal');
  if (modal) modal.classList.remove('active');
}

// ──────────────────────────────────────────────────────────────
// CART DRAWER
// ──────────────────────────────────────────────────────────────
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('cart-drawer').classList.add('active');
  document.getElementById('cart-drawer-overlay').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('active');
  document.getElementById('cart-drawer-overlay').classList.remove('active');
}

function incrementCartItem(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1;
  saveCart();
  renderCartDrawer();
}

function decrementCartItem(id) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty -= 1;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  saveCart();
  renderCartDrawer();
}

function removeCartItemFully(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const totalEl = document.getElementById('cart-drawer-total');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<p style="color:var(--espresso-light); text-align:center; padding:24px 0;">Your cart is empty.</p>';
    if (totalEl) totalEl.textContent = formatPrice(0, 0);
    return;
  }

  let totalAud = 0;
  let totalNpr = 0;

  container.innerHTML = cart.map(item => {
    totalAud += item.priceAUD * item.qty;
    totalNpr += item.priceNPR * item.qty;
    return `
      <div style="display:flex; gap:12px; align-items:center; padding:12px 0; border-bottom:1px solid #eee;">
        <div style="width:56px; height:56px; border-radius:8px; flex-shrink:0; background:var(--pink-softer); display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}"
            style="width:100%; height:100%; object-fit:cover;"
            onerror="this.style.display='none'; this.parentElement.innerHTML='🎁';">
        </div>
        <div style="flex:1; min-width:0;">
          <h5 style="margin:0 0 4px; font-size:0.95rem;">${escapeHtml(item.name)}</h5>
          <span style="font-size:0.8rem; color:var(--espresso-light);">${formatPrice(item.priceAUD, item.priceNPR)} each</span>
          <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
            <button onclick="decrementCartItem('${escapeHtml(item.id)}')"
              style="width:24px; height:24px; border-radius:50%; border:1px solid var(--rose-gold); background:#fff; color:var(--rose-gold); cursor:pointer; line-height:1;">−</button>
            <span style="min-width:20px; text-align:center; font-weight:600;">${item.qty}</span>
            <button onclick="incrementCartItem('${escapeHtml(item.id)}')"
              style="width:24px; height:24px; border-radius:50%; border:1px solid var(--rose-gold); background:#fff; color:var(--rose-gold); cursor:pointer; line-height:1;">+</button>
            <button onclick="removeCartItemFully('${escapeHtml(item.id)}')"
              style="margin-left:auto; background:none; border:none; color:#c0392b; cursor:pointer; font-size:0.85rem;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = formatPrice(totalAud, totalNpr);
}

function goToCheckoutFromDrawer() {
  closeCartDrawer();
  document.getElementById('order-form-section').scrollIntoView({ behavior: 'smooth' });
}
function useMyLocation() {
  const statusEl = document.getElementById('location-status');
  const linkInput = document.getElementById('receiver-maps-link');
  if (!statusEl || !linkInput) return;

  if (!navigator.geolocation) {
    statusEl.textContent = 'Location access is not supported on this browser.';
    return;
  }

  statusEl.textContent = 'Getting your location...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      if (Number.isFinite(lat) && Number.isFinite(lng)) {
        linkInput.value = `https://www.google.com/maps?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
        statusEl.textContent = '✅ Location captured and added above.';
      } else {
        statusEl.textContent = 'Could not determine valid coordinates.';
      }
    },
    () => {
      statusEl.textContent = 'Could not get your location — please paste a Maps link manually instead.';
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}
// ──────────────────────────────────────────────────────────────
// MAP PICKER — Leaflet + OpenStreetMap, free, no API key
// ──────────────────────────────────────────────────────────────
let mapPickerInstance = null;
let mapPickerMarker = null;

function openMapPicker() {
  const modal = document.getElementById('map-picker-modal');
  if (!modal) return;
  modal.classList.add('active');

  setTimeout(() => {
    if (!mapPickerInstance && typeof L !== 'undefined') {
      try {
        mapPickerInstance = L.map('map-picker-container').setView([27.7172, 85.3240], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(mapPickerInstance);

        mapPickerMarker = L.marker([27.7172, 85.3240], { draggable: true }).addTo(mapPickerInstance);

        mapPickerInstance.on('click', (e) => {
          if (e && e.latlng && mapPickerMarker) {
            mapPickerMarker.setLatLng(e.latlng);
          }
        });
      } catch (err) {
        console.error('Error loading map:', err);
      }
    } else if (mapPickerInstance) {
      mapPickerInstance.invalidateSize();
    }
  }, 100);
}

function closeMapPicker() {
  const modal = document.getElementById('map-picker-modal');
  if (modal) modal.classList.remove('active');
}

function searchMapLocation() {
  const query = sanitizeText(document.getElementById('map-search-input')?.value || '', 100);
  const statusEl = document.getElementById('map-picker-status');
  if (!query) return;

  if (isRateLimited('map_search', 1000)) {
    if (statusEl) statusEl.textContent = 'Searching... please wait a moment.';
    return;
  }

  if (statusEl) statusEl.textContent = 'Searching...';

  // Free OpenStreetMap search
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`)
    .then(res => res.json())
    .then(results => {
      if (!results || !results.length) {
        if (statusEl) statusEl.textContent = 'No results found — try a different search, or click the map directly.';
        return;
      }
      const lat = parseFloat(results[0].lat);
      const lon = parseFloat(results[0].lon);
      if (Number.isFinite(lat) && Number.isFinite(lon) && mapPickerInstance && mapPickerMarker) {
        mapPickerInstance.setView([lat, lon], 15);
        mapPickerMarker.setLatLng([lat, lon]);
        if (statusEl) statusEl.textContent = 'Found it — drag the pin to fine-tune the exact spot if needed.';
      } else {
        if (statusEl) statusEl.textContent = 'Location coordinates were invalid.';
      }
    })
    .catch(() => {
      if (statusEl) statusEl.textContent = 'Search failed — please click the map directly to place the pin.';
    });
}

function confirmMapLocation() {
  if (!mapPickerMarker) return;
  const latlng = mapPickerMarker.getLatLng();
  if (!latlng || !Number.isFinite(latlng.lat) || !Number.isFinite(latlng.lng)) return;

  const mapsLink = `https://www.google.com/maps?q=${latlng.lat.toFixed(6)},${latlng.lng.toFixed(6)}`;

  const linkEl = document.getElementById('receiver-maps-link');
  if (linkEl) linkEl.value = mapsLink;
  const statusEl = document.getElementById('location-status');
  if (statusEl) statusEl.textContent = '✅ Location pinned and added above.';

  closeMapPicker();
}

function toggleSelfReceiver() {
  const checkEl = document.getElementById('self-receiver-check');
  const checked = checkEl ? checkEl.checked : false;
  const fieldsToSync = [
    { from: 'sender-name', to: 'receiver-name' },
    { from: 'sender-contact', to: 'receiver-contact' },
    { from: 'sender-email', to: 'receiver-email' },
    { from: 'sender-country', to: 'receiver-country' },
  ];

  fieldsToSync.forEach(pair => {
    const receiverField = document.getElementById(pair.to);
    const senderField = document.getElementById(pair.from);
    if (!receiverField || !senderField) return;
    if (checked) {
      receiverField.value = senderField.value;
      receiverField.readOnly = true;
      receiverField.style.background = '#f4eeee';
    } else {
      receiverField.readOnly = false;
      receiverField.style.background = '';
    }
  });

  if (checked) {
    fieldsToSync.forEach(pair => {
      const el = document.getElementById(pair.from);
      if (el) el.addEventListener('input', syncSelfReceiverFields);
    });
  } else {
    fieldsToSync.forEach(pair => {
      const el = document.getElementById(pair.from);
      if (el) el.removeEventListener('input', syncSelfReceiverFields);
    });
  }
}

function syncSelfReceiverFields() {
  const checkEl = document.getElementById('self-receiver-check');
  if (!checkEl || !checkEl.checked) return;
  const sName = document.getElementById('sender-name');
  const sContact = document.getElementById('sender-contact');
  const sEmail = document.getElementById('sender-email');
  const sCountry = document.getElementById('sender-country');

  const rName = document.getElementById('receiver-name');
  const rContact = document.getElementById('receiver-contact');
  const rEmail = document.getElementById('receiver-email');
  const rCountry = document.getElementById('receiver-country');

  if (rName && sName) rName.value = sName.value;
  if (rContact && sContact) rContact.value = sContact.value;
  if (rEmail && sEmail) rEmail.value = sEmail.value;
  if (rCountry && sCountry) rCountry.value = sCountry.value;
}

function updateFormPlaceholders(currency) {
  const isNPR = currency === 'NPR';

  const placeholderMap = {
    'sender-country': isNPR ? 'e.g. Nepal' : 'e.g. Australia',
    'receiver-country': isNPR ? 'e.g. Nepal' : 'e.g. Australia',
    'receiver-city': isNPR ? 'e.g. Kathmandu, Pokhara' : 'e.g. Perth, Sydney',
    'sender-contact': isNPR ? 'e.g. +977 98X XXX XXX' : 'e.g. +61 4XX XXX XXX',
    'receiver-contact': isNPR ? "Receiver's phone number (e.g. +977 98X XXX XXX)" : "Receiver's phone number (e.g. +61 4XX XXX XXX)",
    'receiver-secondary-contact': isNPR ? 'Backup phone number (e.g. +977 98X XXX XXX)' : 'Backup phone number (e.g. +61 4XX XXX XXX)',
  };

  Object.keys(placeholderMap).forEach(id => {
    const field = document.getElementById(id);
    if (field) field.placeholder = placeholderMap[id];
  });
}

function isValidPhone(value) {
  if (!value || typeof value !== 'string') return false;
  const cleaned = value.replace(/[\s\-().+]/g, '');
  // Supports local Australian (04..., +614...), Nepali (98..., 97..., +977...), and global E.164 (7-15 digits)
  if (cleaned.length < 7 || cleaned.length > 15 || !/^\d+$/.test(cleaned)) {
    return false;
  }
  return true;
}

function isValidEmail(value) {
  if (!value || typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (trimmed.length > 100 || /[\r\n\0]/.test(trimmed)) return false;
  // RFC 5322 compatible regex for production web apps
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailPattern.test(trimmed);
}
