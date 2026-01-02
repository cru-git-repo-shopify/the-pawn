document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ajax-add-to-cart').forEach(function (container) {
    const button = container.querySelector('.add-to-cart-button');
    const quantityInput = container.querySelector('.quantity-input');
    const plusBtn = container.querySelector('.qty-btn.plus');
    const minusBtn = container.querySelector('.qty-btn.minus');
    const statusSpan = container.querySelector('.add-status');
    const variantId = container.dataset.variantId;

    // Quantity increment/decrement logic
    plusBtn.addEventListener('click', () => {
      quantityInput.value = parseInt(quantityInput.value || 1) + 1;
    });

    minusBtn.addEventListener('click', () => {
      const current = parseInt(quantityInput.value || 1);
      if (current > 1) quantityInput.value = current - 1;
    });

    // Add to cart AJAX logic
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const quantity = parseInt(quantityInput.value, 10);

      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity
        })
      })
      .then(res => res.json())
      .then(data => {
        updateCart();
        openCart(); // Open the cart sidebar
        // statusSpan.textContent = "Added!";
        // statusSpan.style.color = "green";
        // setTimeout(() => statusSpan.textContent = '', 2000);
      })
      .catch(err => {
        // statusSpan.textContent = "Error adding to cart";
        // statusSpan.style.color = "red";
      });
    });
  });

  // Update Cart Function
    function updateCart() {
      fetch('/cart.js')
        .then(res => res.json())
        .then(cart => {
          const itemsContainer = document.getElementById('ajax-cart-items');
          const subtotal = document.getElementById('ajax-cart-subtotal');
          itemsContainer.innerHTML = '';

          if (cart.items.length === 0) {
            itemsContainer.innerHTML = '<p class="text-gray-500">Your cart is empty.</p>';
          } else {
            cart.items.forEach((item, index) => {
              itemsContainer.innerHTML += `
                <div class="flex items-start side-cart-item">
                  <div class="cart-item-details">
                    <div class="font-semibold cart-item-title">${item.product_title}</div>
                    <div class="price_info">
                      <div class="flex items-center side-cart-qty">
                        <div>${Shopify.formatMoney(item.line_price)} x </div>
                        <div class="qty_inner">
                          <button class="quantity-btn" data-line="${index + 1}" data-action="minus">-</button>
                          <input type="text" value="${item.quantity}" readonly class="side_cart_qty_input">
                          <button class="quantity-btn" data-line="${index + 1}" data-action="plus">+</button>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover border rounded">
                  <button 
                    class="text-red-500 hover:text-red-700 text-sm remove-cart-item"
                    data-line="${index + 1}"
                    title="Remove"
                  >✕</button>
                </div>
              `;
            });
          }

          subtotal.textContent = Shopify.formatMoney(cart.total_price);

          // Bind remove buttons
          document.querySelectorAll('.remove-cart-item').forEach(button => {
            button.addEventListener('click', function () {
              const line = this.getAttribute('data-line');

              fetch('/cart/change.js', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify({
                  line: parseInt(line),
                  quantity: 0
                })
              })
              .then(res => res.json())
              .then(data => {
                updateCart();
              });
            });
          });

          document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function () {
              const line = this.getAttribute('data-line');
              const action = this.getAttribute('data-action');
              const input = this.parentElement.querySelector('input');
              let currentQty = parseInt(input.value);

              if (action === 'minus' && currentQty > 1) {
                changeCartQuantity(line, currentQty - 1);
              }
              if (action === 'plus') {
                changeCartQuantity(line, currentQty + 1);
              }
            });
          });
        });
    }

    function changeCartQuantity(line, qty) {
      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          line: parseInt(line),
          quantity: qty
        })
      })
      .then(res => res.json())
      .then(data => {
        updateCart();
      });
    }
    

    function openCart() {
      const cartSidebar = document.getElementById('ajax-cart-sidebar');
      const overlay = document.getElementById('cart-overlay');
      cartSidebar.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }

    if (typeof Shopify === 'undefined') {
      var Shopify = {};
    }
    Shopify.formatMoney = function(cents) {
      return '$' + (cents / 100).toFixed(2);
    }
});