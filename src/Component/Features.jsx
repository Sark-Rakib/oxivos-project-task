import React from "react";
import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FiTruck size={40} />,
      title: "Free Shipping",
      description:
        "Enjoy free delivery on all orders over BDT 3000 anywhere in Bangladesh.",
    },
    {
      id: 2,
      icon: <FiRefreshCw size={40} />,
      title: "Easy Returns",
      description:
        "Shop with confidence using our simple 7-day return and exchange policy.",
    },
    {
      id: 3,
      icon: <FiShield size={40} />,
      title: "Secure Payment",
      description:
        "Your payments are protected with secure and encrypted transactions.",
    },
    {
      id: 4,
      icon: <FiHeadphones size={40} />,
      title: "24/7 Support",
      description:
        "Our support team is always ready to help you with any questions.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[4px] text-sm text-gray-500">
            Why Choose OXIVOS
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-black">
            Premium Shopping Experience
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            We provide high-quality fashion products with fast delivery, secure
            payments, and outstanding customer service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-black">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
