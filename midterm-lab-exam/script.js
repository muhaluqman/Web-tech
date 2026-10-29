const MAX_PER_PRODUCT = (74 % 4) + 2; // = 4

const cart = [];

const addButtons = document.querySelectorAll(".add-btn");
const cartToggles = document.querySelectorAll(".cart-toggle"); // desktop cart + mobile bag
const badges = document.querySelectorAll(".cart-badge");
const miniCart = document.getElementById("mini-cart");
const listEl = document.getElementById("mini-cart-list");
const emptyEl = document.getElementById("mini-cart-empty");
const totalEl = document.getElementById("mini-cart-total");

function parsePrice(text) {
  return parseFloat(text.replace(/[^0-9.]/g, ""));
}

function formatPrice(value) {
  return "US$" + value.toFixed(2);
}

function readCard(button) {
  const card = button.closest(".product");
  const name = card
    .querySelector(".product-description")
    .textContent.replace(/\s+/g, " ")
    .trim();
  const price = parsePrice(card.querySelector(".product-price").textContent);
  return { name, price };
}

function countOf(name) {
  return cart.filter((item) => item.name === name).length;
}

function render() {
  badges.forEach((badge) => {
    badge.textContent = cart.length;
  });

  listEl.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "mini-cart-item";

    const name = document.createElement("span");
    name.className = "mini-cart-name";
    name.textContent = item.name;
    name.title = item.name;

    const price = document.createElement("span");
    price.className = "mini-cart-price";
    price.textContent = formatPrice(item.price);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.dataset.index = index;
    remove.textContent = "Remove";

    li.append(name, price, remove);
    listEl.appendChild(li);
  });
  emptyEl.hidden = cart.length > 0;

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalEl.textContent = formatPrice(total);

  addButtons.forEach((button) => {
    const { name } = readCard(button);
    const full = countOf(name) >= MAX_PER_PRODUCT;
    button.disabled = full;
    button.textContent = full ? "Limit reached" : "Add to Cart";
  });
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = readCard(button);
    if (countOf(product.name) >= MAX_PER_PRODUCT) return; // safety net
    cart.push(product);
    render();
  });
});

listEl.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-btn");
  if (!button) return;
  cart.splice(Number(button.dataset.index), 1);
  render();
});

cartToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    miniCart.hidden = !miniCart.hidden;
    cartToggles.forEach((t) =>
      t.setAttribute("aria-expanded", String(!miniCart.hidden)),
    );
  });
});

render();
