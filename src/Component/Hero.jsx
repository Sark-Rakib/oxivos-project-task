import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center my-10">
      <div className="px-5 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-4">
            New Collection 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Elevate Your
            <br />
            Everyday Style
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-lg">
            Discover premium fashion designed for comfort, confidence, and
            everyday elegance. Explore our latest arrivals and timeless
            essentials.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              to="/products"
              className="bg-black text-white px-8 py-4 rounded hover:scale-105 transition"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="border border-black px-8 py-4 rounded hover:bg-black hover:text-white transition"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900"
            alt="Fashion"
            className="rounded-xl h-[650px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
