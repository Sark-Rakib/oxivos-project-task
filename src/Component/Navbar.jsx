import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white text-black border-b">
      <div className="px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl tracking-widest">
          OXIVOS
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black font-bold border-b-2 border-black" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-black font-bold border-b-2 border-black" : ""
            }
          >
            Products
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FiShoppingBag size={24} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t bg-white">
          <div className="flex flex-col p-5 gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black font-bold  border-black" : ""
              }
              onClick={() => setOpen(false)}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-black font-bold  border-black" : ""
              }
              onClick={() => setOpen(false)}
              to="/products"
            >
              Products
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
