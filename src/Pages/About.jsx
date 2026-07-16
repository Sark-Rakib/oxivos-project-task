import React from "react";
const About = () => {
  return (
    <section className="px-5 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050"
            alt="Fashion"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div className="absolute bottom-5 left-5 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-black">1+</h3>
            <p className="text-gray-500">Years of Fashion Experience</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            About OXIVOS
          </p>

          <h2 className="text-4xl lg:text-5xl font-semibold mt-5 leading-tight uppercase">
            Redefining Modern Fashion With Confidence
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            OXIVOS is a modern fashion brand focused on creating premium
            clothing that blends comfort, quality, and timeless style. Every
            piece is designed for people who want to express their personality
            with confidence.
          </p>

          <p className="text-gray-600 leading-8 mt-4">
            From everyday essentials to statement outfits, we carefully select
            fabrics, designs, and details to deliver a better shopping
            experience.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-gray-500 mt-1">Premium Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-500 mt-1">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-gray-500 mt-1">Customer Support</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-gray-500 mt-1">Quality Fabric</p>
            </div>
          </div>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
