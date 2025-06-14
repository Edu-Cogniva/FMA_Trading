// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductsSection from "./components/ProductsSection";
// import ProductDetails from "./components/ProductDetails";
// import NavBar from "./components/Navbar"; // Import NavBar component

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         {/* Render NavBar on all pages */}
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductsSection />} />
//           <Route path="/products/:productType" element={<ProductDetails />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsSection from "./components/ProductsSection";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";
// import Price from "./pages/Price";
// import Blog from "./pages/Blog";
import NavBar from "./components/Navbar"; // ✅ Navbar remains on all pages
import Footer from "./components/Footer"; // ✅ Footer remains on all pages

const App: React.FC = () => {
  return (
    <Router>
      {/* Global Navbar (Always Visible) */}
      <NavBar />

      {/* Main Content */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/products/:productType" element={<ProductDetails />} />

          {/* <Route path="/price" element={<Price />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
