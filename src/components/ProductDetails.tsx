import React, { useState } from "react";
import { useParams } from "react-router-dom";
import basmatiBanner from "../assets/Basmati Banner.png";
import nonBasmatiBanner from "../assets/Non Basmati Banner.png";
import southIndianBanner from "../assets/South Indian Banner.png";

// Sample Product Data
const productData: Record<string, { name: string; image: string }[]> = {
  Basmati: [
    { name: "Basmati Premium", image: "9.jpeg" },
    { name: "Golden Basmati", image: "10.jpeg" },
    { name: "Taj Mahal Basmati", image: "11.jpeg" },
    { name: "Extra Long Basmati", image: "12.jpeg" },
    { name: "Royal Basmati", image: "13.jpeg" },
    { name: "Organic Basmati", image: "14.jpeg" },
    { name: "Brown Basmati", image: "15.jpeg" },
    { name: "Classic Basmati", image: "16.jpeg" },
  ],
  NonBasmati: [
    { name: "Sona Masoori", image: "1.jpeg" },
    { name: "IR64 Rice", image: "2.jpeg" },
    { name: "Ponni Rice", image: "3.jpeg" },
    { name: "Kolam Rice", image: "4.jpeg" },
    { name: "Gobindo Bhog", image: "5.jpeg" },
    { name: "Jeera Samba", image: "6.jpeg" },
    { name: "Matta Rice", image: "7.jpeg" },
    { name: "Swarna Rice", image: "8.jpeg" },
  ],
  SouthIndian: [
    { name: "NeiKitchadi Ponni Boiled Rice", image: "17.jpeg" },
    { name: "Manachanallur Ponni Rice", image: "18.jpg" },
    { name: "Rajabhogam Ponni Boiled Rice", image: "19.jpg" },
    { name: "VIP Special Ponni Boiled Rice", image: "20.jpg" },
    { name: "Akshaya Ponni Boiled Rice", image: "21.jpg" },
    { name: "Tanjore Ponni Boiled Rice", image: "22.jpg" },
    { name: "Classic Ponni Boiled Rice", image: "23.jpg" },
    { name: "Premium Ponni Boiled Rice", image: "24.jpg" },
  ],
};

const getImage = (imageName: string) => {
  return `/assets/${imageName}`;
};

const ProductDetails: React.FC = () => {
  const { productType } = useParams<{ productType?: string }>();
  const [showModal, setShowModal] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedRice, setSelectedRice] = useState("");
  const [message, setMessage] = useState("Can I get the details about this variety of rice?");

  // ✅ Now getBannerImage() is using the correct productType
  const getBannerImage = () => {
    switch (productType) {
      case "Basmati":
        return basmatiBanner;
      case "NonBasmati":
        return nonBasmatiBanner;
      case "SouthIndian":
        return southIndianBanner;
      default:
        return "";
    }
  };

  if (!productType || !productData[productType]) {
    return (
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Product Not Found</h2>
        <p className="text-lg mt-4">Please select a valid product category.</p>
      </section>
    );
  }

  const products = productData[productType];

  const handleCardClick = (productName: string) => {
    // setSelectedProduct(productName);
    setSelectedRice(productName);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "alphiyapaul003@gmail.com";
    const subject = `Rice Inquiry - ${selectedRice}`;
    const body = `Hello,\n\nMy name is ${userName}. I am interested in learning more about ${selectedRice}.\n\nMessage: ${message}\n\nYou can contact me at: ${userEmail}.\n\nThank you!`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowModal(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* ✅ Banner Section */}
      <div className="w-full mb-10">
        <img
          src={getBannerImage()}
          alt={`${productType} Banner`}
          className="w-full h-auto object-cover"
        />
      </div>


      <div className="container mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center mb-8">{productType} Rice</h2> */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(product.name)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={getImage(product.image)}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <h3 className="text-base font-semibold">{product.name}</h3>
            </div>

          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-center mb-4">Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <select
                value={selectedRice}
                onChange={(e) => setSelectedRice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select Rice Variety</option>
                {Object.values(productData)
                  .flat()
                  .map((product, idx) => (
                    <option key={idx} value={product.name}>
                      {product.name}
                    </option>
                  ))}
              </select>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded h-24"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
