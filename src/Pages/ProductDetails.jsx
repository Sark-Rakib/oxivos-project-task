import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FiShoppingBag, FiTruck, FiRefreshCw, FiShield } from "react-icons/fi";
import { addToCart } from "../Utils/cart";
const ProductDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/data.json");

        const product = res.data.find((item) => item.id === Number(id));

        setData(product);

        if (product) {
          setSelectedSize(product.sizes[0]);
          setSelectedColor(product.colors[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <section className=" px-5 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-[500px] lg:h-[700px] object-cover hover:scale-105 duration-700"
          />
        </div>

        {/* Details */}
        <div className="max-w-xl">
          {/* Category */}
          <p className="uppercase tracking-[4px] text-xs text-gray-500">
            {data.category}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl lg:text-4xl font-semibold mt-3 leading-tight uppercase">
            {data.name}
          </h1>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mt-6 border-b pb-6">
            <h2 className="text-3xl font-bold">BDT {data.price}</h2>

            <div className="text-sm text-gray-500">⭐ {data.rating} / 5</div>
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-600 leading-8">{data.description}</p>

          {/* Color */}
          <div className="mt-10">
            <p className="font-medium mb-4">Color</p>

            <div className="flex gap-3">
              {data.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-5 py-2 rounded border duration-300 ${
                    selectedColor === color
                      ? "bg-black text-white border-black"
                      : "hover:border-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <div className="flex justify-between mb-4">
              <p className="font-medium">Size</p>

              <button className="text-sm underline">Size Guide</button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {data.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-12 rounded-lg border duration-300 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-10 flex items-center justify-between border rounded-xl p-2 max-w-[170px]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-2xl px-4"
            >
              -
            </button>

            <span className="font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-2xl px-4"
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="space-y-4 mt-10">
            <button
              onClick={() =>
                addToCart(data, quantity, selectedSize, selectedColor)
              }
              className="w-full bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 flex items-center gap-1 justify-center"
            >
              <div>
                <FiShoppingBag></FiShoppingBag>
              </div>
              Add To Cart
            </button>

            <button className="w-full border py-4 rounded-xl hover:bg-black hover:text-white duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        <div className="border rounded-xl p-8 text-center">
          <FiTruck className="mx-auto text-4xl" />
          <h3 className="font-bold text-xl mt-4">Free Shipping</h3>
          <p className="text-gray-500 mt-3">
            Free delivery on orders over ৳3000.
          </p>
        </div>

        <div className="border rounded-xl p-8 text-center">
          <FiRefreshCw className="mx-auto text-4xl" />
          <h3 className="font-bold text-xl mt-4">Easy Returns</h3>
          <p className="text-gray-500 mt-3">Hassle-free 7-day return policy.</p>
        </div>

        <div className="border rounded-xl p-8 text-center">
          <FiShield className="mx-auto text-4xl" />
          <h3 className="font-bold text-xl mt-4">Secure Payment</h3>
          <p className="text-gray-500 mt-3">100% safe and encrypted payment.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
