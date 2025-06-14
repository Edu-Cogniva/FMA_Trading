import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FMA Trading</h3>
            <p className="text-sm">
              Established in 2020, FMA Trading has been a leader in the
              rice industry.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Our Category</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/Basmati"
                  className="hover:text-gray-400"
                >
                  Basmati Varieties
                </Link>
              </li>
              <li>
                <Link
                  to="/products/NonBasmati"
                  className="hover:text-gray-400"
                >
                  Non Basmati Varieties
                </Link>
              </li>
              <li>
                <Link
                  to="/products/SouthIndian"
                  className="hover:text-gray-400"
                >
                  South Indian Varieties
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Detail</h3>
            <p className="text-sm">Ahamed Marzooth</p>
            <p className="text-sm">+91-7010085338</p>
            <p className="text-sm">fmatrading@gmail.com</p>
            <p className="text-sm">
              FMA Trading, Tirupattur, Sivagangai District.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            © 2025 FMA Trading. All Rights Reserved | Developed &
            Marketing By:{"SiteSphere"}
            <a
              className="hover:text-gray-400"
            >

            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
