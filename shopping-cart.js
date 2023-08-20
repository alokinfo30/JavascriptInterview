// Create a product object
function createProduct(name, price, inventory) {
  return {
    name: name,
    price: price,
    inventory: inventory,
  };
}

// Create a shopping cart object
function createShoppingCart() {
  return {
    products: [],
    totalPrice: 0,
  };
}

// Add a product to the shopping cart
function addProduct(cart, product, quantity) {
  if (product.inventory >= quantity) {
    cart.products.push({ product: product, quantity: quantity });
    cart.totalPrice += product.price * quantity;
    product.inventory -= quantity;
  } else {
    console.log(`Not enough inventory for ${product.name}`);
  }
}

// Remove a product from the shopping cart
function removeProduct(cart, productName, quantity) {
  const productIndex = cart.products.findIndex(
    (item) => item.product.name === productName
  );

  if (productIndex !== -1) {
    const product = cart.products[productIndex].product;
    const productQuantity = cart.products[productIndex].quantity;

    if (productQuantity <= quantity) {
      cart.products.splice(productIndex, 1);
      cart.totalPrice -= product.price * productQuantity;
      product.inventory += productQuantity;
    } else {
      cart.products[productIndex].quantity -= quantity;
      cart.totalPrice -= product.price * quantity;
      product.inventory += quantity;
    }
  } else {
    console.log(`Product ${productName} not found in the cart.`);
  }
}

// Calculate the total price of the shopping cart
function calculateTotalPrice(cart) {
  return cart.totalPrice;
}

// Display the contents of the shopping cart
function displayCart(cart) {
  console.log("Shopping Cart Contents:");
  for (const item of cart.products) {
    console.log(
      `${item.product.name} x ${item.quantity} - $${item.product.price.toFixed(
        2
      )} each`
    );
  }
  console.log(`Total Price: $${calculateTotalPrice(cart).toFixed(2)}`);
}

// Create a shopping cart
const myCart = createShoppingCart();

// Create products
const product1 = createProduct("Laptop", 999.99, 10);
const product2 = createProduct("Phone", 599.99, 20);

// Add products to the cart
addProduct(myCart, product1, 2);
addProduct(myCart, product2, 1);

// Remove a product from the cart
removeProduct(myCart, "Laptop", 1);

// Display the cart
displayCart(myCart);
