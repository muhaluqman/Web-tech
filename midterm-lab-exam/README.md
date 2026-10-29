# Midterm Lab - Web Technologies

**Name:** Muhammad Luqman
**Roll No:** FA24-BCS-074

**N** = 74
**BP** = 600 + 74 = 674px
**H** = (74 x 7) mod 360 = 158 (accent colour: hsl(158, 70%, 45%))
**K** = (74 mod 3) + 3 = 5

## Files changed

- `index.html` - new navbar item, cart links, Add to Cart buttons, mini cart, script link
- `product.html` - new navbar item, cart link
- `mega-menu.css` (new) - Task 1
- `checkout.html` (new) - Task 2
- `checkout.css` (new) - Task 2
- `cart.css` (new) - Task 3
- `script.js` (new) - Task 3

## Task 1 - Mega-menu

Added a "Shop by Category" item to the navbar. At 674px and wider, hovering or tabbing to it opens a full-width panel with 5 columns of links (CSS only, using `:hover` and `:focus-within`). Below 674px the same 5 groups become `<details>` accordions inside the hamburger menu. I switched the navbar breakpoint from Bootstrap's 768px to 674px so it matches BP.

## Task 2 - Checkout form

Created `checkout.html`, linked from the cart icon. It has two fieldsets (Contact, Delivery) using only HTML5 validation: `required`, `type`, a phone `pattern` for 03XX-XXXXXXX, and date `min`/`max` (29 Oct 2026 to 11 Jan 2027). Errors show only after the user touches a field (`:user-invalid`). CSS Grid puts the fieldsets side by side from 674px and stacks them below.

## Task 3 - Cart

Added Add to Cart buttons to the product cards. `script.js` stores items in an array, shows a badge count on the cart icon, and opens a mini cart with Remove buttons and a total (calculated with `reduce()`). Each product can be added at most 4 times, then the button shows "Limit reached" until one is removed.

## AI tools used

Claude (Anthropic)
