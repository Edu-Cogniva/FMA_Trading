// export default App;
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsSection from "./components/ProductsSection";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />

      {/* Main Content */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/products/:productType" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
