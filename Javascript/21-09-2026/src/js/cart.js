import { getCart, saveCart, updateCartCount } from "./helper.js";

let cartProduct = [];

export const renderCartProducts = () => {

  cartProduct = getCart();

  const container = document.getElementById("CartProductList");
  container.innerHTML = "";

  if (cartProduct.length === 0) {
    container.innerHTML = `
      <p class="text-center p-4 font-black">No Product match your search.</p>
    `;
    return;
  }

  console.log(cartProduct);
  

  cartProduct.forEach((product) => {
    const card = document.createElement("tr");
    card.className =
      "bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium";
    card.innerHTML = `
          <td class="p-4">
            <img src="${product.image}" class="w-16 md:w-24 max-w-full max-h-full"
              alt="Apple Watch">
          </td>
          <td class="px-6 py-4 font-semibold text-heading">
            ${product.title}
          </td>
          <td class="px-6 py-4">
            <form class="max-w-xs mx-auto">
              <label for="counter-input-1" class="sr-only">Choose quantity:</label>
              <div class="relative flex items-center">
                <button type="button" id="decrement-button-1" data-input-counter-decrement="counter-input-1"
                data-id="${product.id}"
                  class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6 decrement-button">
                  <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 12h14" />
                  </svg>
                </button>
                <input type="text" id="counter-input-1" data-input-counter
                  class="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                  placeholder="" value="${product.qty}" required />
                <button type="button" id="increment-button-1" data-input-counter-increment="counter-input-1"
                data-id = "${product.id}"
                  class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6 increment-button">
                  <svg class="w-3 h-3 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 12h14m-7 7V5" />
                  </svg>
                </button>
              </div>
            </form>
          </td>
          <td class="px-6 py-4 font-semibold text-heading total">
            $${(product.price * product.qty).toFixed(2)}
          </td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-fg-danger hover:underline remove-cart-btn">Remove</a>
          </td>
          `;

    card.querySelector(".remove-cart-btn").addEventListener("click", () => {
      removeFromCart(product.id);
    });

    card.querySelector(".increment-button").addEventListener("click", (event) => {
      incrementQty(event.currentTarget.dataset.id);
    });

    card.querySelector(".decrement-button").addEventListener("click", (event) => {
      decrementQty(event.currentTarget.dataset.id);
    });

    card.querySelectorAll(".total").forEach()

    container.appendChild(card);
  });
};

const removeFromCart = (id) => {
  let confirms = confirm("Are you sure you want to remove product from cart");

  if (confirms) {
    const cartProduct = getCart();

    let product = cartProduct.filter((item) => item.id !== id);

    saveCart(product);
    renderCartProducts();
  }
};

const incrementQty = (id) => {

  const cart = getCart();

  const item = cart.find((item) => String(item.id) === String(id));

  if (item) item.qty += 1;

  saveCart(cart);
  renderCartProducts();

};

const decrementQty = (id) => {
  let cart = getCart();

  const item = cart.find((item) => String(item.id) === String(id));
  if (item) {
    item.qty -= 1;
  }
  if (item.qty <= 0) {
    cart = cart.filter((item) => String(item.id) !== String(id));
  }
  saveCart(cart);
  renderCartProducts();
};