import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://www.mahavirricemill.com/uploads/social/LOGOG_16957274134853.png"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
