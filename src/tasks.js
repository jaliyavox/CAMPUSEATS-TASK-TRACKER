// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

// AFTER — clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (typeof price !== "number" || typeof quantity !== "number") {
    throw new TypeError("price and quantity must be numbers");
  }
  if (price < 0 || quantity < 0) {
    throw new RangeError("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key comes from an environment variable (e.g. process.env.API_KEY)
// and is never hard-coded or logged.
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.warn("API_KEY is not set — external calls are disabled");
}

console.log(`Regular order total: ${calculateTotal(250, 2, "regular")}`);
console.log(`VIP order total:     ${calculateTotal(250, 2, "vip")}`);

module.exports = { tasks, calculateTotal, VIP_DISCOUNT };
