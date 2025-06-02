import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons
import "../App.css";
import AuthModal from "./AuthModal";

const navItems = [
  { id: 1, name: "Our Menu", href: "/our-menu" },
  { id: 2, name: "How It Work", href: "/how-it-work" },
  { id: 3, name: "Become a Chef", href: "/become-a-chef" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#006A5A] w-full">
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4">
        <div className="flex items-center w-[25%]">
          <NavLink to="/">
            <img
              src="/imgs/logo-removebg-preview.png"
              alt="Logo"
              className="w-[170px] h-auto max-h-[174px] object-contain"
            />
          </NavLink>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-white w-8 h-8" />
            ) : (
              <FiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        <nav className="hidden lg:flex w-[50%] justify-center">
          <ul className="flex items-center gap-10">
            {navItems.map((curElem) => (
              <li key={curElem.id}>
                <NavLink
                  to={curElem.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold text-sm"
                      : "text-white text-sm hover:text-gray-200 transition"
                  }
                >
                  {curElem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4 w-[25%] justify-end">
          <button className="bg-[#F2FAD3] text-[#006A5A] px-4 py-2 rounded-full font-medium hover:bg-[#e0f0c0] hover:cursor-pointer">
            Order Now
          </button>
          <button
            className="text-white text-sm hover:cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Login/Signup
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#006A5A] overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((curElem) => (
            <li key={curElem.id}>
              <NavLink
                to={curElem.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-semibold text-sm"
                    : "text-white text-sm hover:text-gray-200 transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                {curElem.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <button className="bg-[#F2FAD3] text-[#006A5A] px-6 py-2 rounded-full font-medium hover:bg-[#e0f0c0]">
            Order Now
          </button>
          <button
            className="text-white text-base"
            onClick={() => {
              setMenuOpen(false);
              setIsModalOpen(true);
            }}
          >
            Login/Signup
          </button>
        </div>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};
