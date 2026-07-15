import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="px-5 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black tracking-widest text-white">
            OXIVOS
          </h2>

          <p className="mt-4 text-sm leading-7">
            Discover timeless fashion with premium quality, modern style, and
            everyday comfort.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/products" className="hover:text-white transition">
                All Products
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white transition">
                New Arrivals
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white transition">
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="#">About Us</Link>
            </li>

            <li>
              <Link to="#">Contact</Link>
            </li>

            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <p className="text-sm">support@oxivos.com</p>
          <p className="text-sm mt-2">+880 1700-000000</p>
          <p className="text-sm mt-2">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>© 2026 OXIVOS. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="#">Terms</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
