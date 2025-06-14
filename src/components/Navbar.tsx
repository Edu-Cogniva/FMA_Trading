import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaClock, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const NavBar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Products" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">

        {/* Top Bar */}
        <div className="bg-[#35678A] text-white text-sm py-2 px-4 flex flex-col gap-2 text-center sm:flex-row sm:justify-between sm:items-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span>FMA Trading Welcomes You</span>
          </div>
          <div className="flex flex-col gap-1 items-center sm:flex-row sm:items-center sm:gap-4 text-white">
            <div className="flex items-center gap-1">
              <FaEnvelope />
              <a href="mailto:fmatrading@gmail.com" className="hover:underline">
                fmatrading@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <span>Mon – Sat 8:00 – 6:30, Sunday – CLOSED</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4 px-4 md:px-8 border-b border-gray-300">
          {/* Logo */}
          <div>
            <img src={Logo} className="h-10" alt="FMA Trading Logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-gray-600 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path
                    ? "text-[#F0832C] font-semibold underline"
                    : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-2xl text-[#35678A]">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} />
            )}
          </div>

          {/* Call Section */}
          <div className="hidden md:flex items-center gap-2 text-[#35678A]">
            <div className="bg-[#35678A] text-white p-2 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Anytime</p>
              <p className="text-lg font-semibold">+91-7010085338</p>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 ${location.pathname === link.path
                    ? "text-[#F0832C] font-semibold"
                    : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Phone section on mobile */}
            <div className="flex items-center gap-2 px-4 py-3 text-[#35678A] border-t border-gray-200">
              <div className="bg-[#35678A] text-white p-2 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-base font-semibold">+91-7010085338</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="pt-[60px] md:pt-[52px]"></div>

    </>
  );
};

export default NavBar;
