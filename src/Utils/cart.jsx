export const addToCart = (
  product,
  quantity = 1,
  selectedSize = "",
  selectedColor = "",
) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) =>
      item.id === product.id &&
      item.selectedSize === selectedSize &&
      item.selectedColor === selectedColor,
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const removeFromCart = (id, selectedSize, selectedColor) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCart = cart.filter(
    (item) =>
      !(
        item.id === id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
      ),
  );

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  return updatedCart;
};
