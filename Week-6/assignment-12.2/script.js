// Initialize WeakMap to track product views and WeakSet for cart items
let productViews = new Map();
let cartItems = new Set();

// Function to increment product views
function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    productViews.set(productId, productViews.get(productId) + 1);
  } else {
    productViews.set(productId, 1);
  }
  return `Product ID ${productId} is viewed for the ${productViews.get(
    productId
  )} time`;
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}

// Example usage:
console.log(incrementProductViews(123)); // Product ID 123 is viewed for the first time
console.log(incrementProductViews(123)); // Product ID 123 is viewed for the second time

console.log(addToCart(123)); // "Product added to cart"
console.log(addToCart(123)); // "Product already in cart"
