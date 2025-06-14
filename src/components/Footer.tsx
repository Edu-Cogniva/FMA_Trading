import React from "react";

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
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Our Category</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products/Basmati"
                  className="hover:text-gray-400"
                >
                  Basmati Varieties
                </a>
              </li>
              <li>
                <a
                  href="/products/NonBasmati"
                  className="hover:text-gray-400"
                >
                  Non Basmati Varieties
                </a>
              </li>
              <li>
                <a
                  href="/products/SouthIndian"
                  className="hover:text-gray-400"
                >
                  South Indian Varieties
                </a>
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
