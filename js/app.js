
/* =========================================
   CoreForge Store - Shared App Functions
========================================= */

// Get cart from browser storage
function getCart() {
  return JSON.parse(localStorage.getItem("coreforge-cart")) || [];
}

// Save cart to browser storage
function saveCart(cart) {
  localStorage.setItem("coreforge-cart", JSON.stringify(cart));
}

// Update cart count in the navigation
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

// Add a product to the cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();

  // Small feedback message
  showToast(`${product.name} added to cart!`);
}

// Create product card HTML
function createProductCard(product) {
  return `
    <article class="product-card">
      <a href="product-details.html?id=${product.id}">
        <div class="product-image">
          <span class="product-badge">${product.badge}</span>
          <img src="${product.image}" alt="${product.name}">
        </div>
      </a>

      <div class="product-info">
        <div class="product-category">${product.categoryName}</div>

        <a href="product-details.html?id=${product.id}">
          <h3 class="product-name">${product.name}</h3>
        </a>

        <div class="product-rating">
          ★★★★★ <span>${product.rating} (${product.reviews})</span>
        </div>

        <div class="product-bottom">
          <div class="product-price">${formatPrice(product.price)}</div>
          <button class="add-cart-btn" onclick="addToCart(${product.id})">
            + Add
          </button>
        </div>
      </div>
    </article>
  `;
}

// Load featured products on homepage
function loadFeaturedProducts() {
  const container = document.getElementById("featured-products");

  if (!container) return;

  container.innerHTML = products
    .slice(0, 4)
    .map(createProductCard)
    .join("");
}

// Toast notification
function showToast(message) {
  let toast = document.getElementById("store-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "store-toast";
    toast.style.cssText = `
      position: fixed;
      bottom: 25px;
      right: 25px;
      background: #182233;
      border: 1px solid #ff6b2c;
      color: #fff;
      padding: 14px 20px;
      border-radius: 8px;
      font-size: 13px;
      z-index: 999;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 2500);
}

// Run shared functions
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  loadFeaturedProducts();
});
