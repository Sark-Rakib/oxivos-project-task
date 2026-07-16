import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { addToCart } from "../Utils/cart";
import Loading from "../Component/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/data.json");
        // console.log(res.data);
        setProducts(res.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="min-h-screen px-5 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/products-details/${product.id}`}
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 uppercase">
                  {product.category}
                </p>

                <h2 className="text-xl text-black font-semibold mt-2 line-clamp-1 uppercase">
                  {product.name}
                </h2>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-black">
                    BDT {product.price}
                  </span>

                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
