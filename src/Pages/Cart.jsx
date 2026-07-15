import React from "react";
import { useState } from "react";
import { removeFromCart } from "../Utils/cart";
const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
          <p className="text-gray-500 mt-3">Add some products to your cart.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 text-black">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex flex-col sm:flex-row gap-5 border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-40 h-48 object-cover rounded-xl"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                      {item.category}
                    </p>

                    <h2 className="text-2xl font-semibold mt-2 uppercase">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-3">{item.description}</p>

                    <div className="flex flex-wrap gap-6 mt-5 text-sm">
                      <p>
                        <span className="font-semibold">Color:</span>{" "}
                        {item.selectedColor || "-"}
                      </p>

                      <p>
                        <span className="font-semibold">Size:</span>{" "}
                        {item.selectedSize || "-"}
                      </p>

                      <p>
                        <span className="font-semibold">Qty:</span>{" "}
                        {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <h3 className="text-2xl font-bold">
                      BDT {item.price * item.quantity}
                    </h3>

                    <button
                      onClick={() => {
                        const updatedCart = removeFromCart(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                        );

                        setCart(updatedCart);
                      }}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border rounded-2xl p-6 h-fit sticky top-24 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>৳ {total}</span>
            </div>

            <button className="w-full mt-8 bg-black text-white py-4 rounded-xl hover:bg-zinc-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
