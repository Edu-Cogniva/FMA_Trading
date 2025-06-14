
import React, { useState, useEffect } from "react";

// ✅ Feature Data
const features = [
  {
    image: "https://www.mahavirricemill.com/uploads/img/years.png",
    text: "7+ Years Experience",
  },
  {
    image: "https://www.mahavirricemill.com/uploads/img/productioon.png",
    text: "240 Metric Ton Per Day Production Capacity",
  },
  {
    image: "https://www.mahavirricemill.com/uploads/img/exports.png",
    text: "30K Metric Tons Exported",
  },
  {
    image: "https://www.mahavirricemill.com/uploads/img/countries.png",
    text: "50+ Export Countries",
  },
];

const FeaturesSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  // ✅ Auto-scroll every second
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-32" style={{ backgroundImage: "url('src/assets/5.png')" }} >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* ✅ Auto-Scrolling Feature Card (Left Side) */}
          <div className="flex justify-center">
          <div
            className="w-[300px] h-[250px] min-w-[300px] min-h-[250px] flex-shrink-0 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out bg-cover bg-center">
            <img
              src={features[index].image}
              alt={features[index].text}
              className="w-20 h-20 mb-4"
            />
            <p className="text-lg font-bold text-center">{features[index].text}</p>
          </div>
        </div>


          {/* ✅ About Section (Right Side) */}
          <div>
            <h2 className="text-3xl font-bold mb-4">FMA Trading </h2>
            <p className="text-gray-700 mb-4">
            FMA Trading is a leading rice export company committed to delivering premium quality grains worldwide. With a strong foundation in agriculture and trade, they ensure excellence from sourcing to distribution. Their expertise, innovation, and dedication to customer satisfaction make them a trusted name in the global rice market.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <img
                      src="https://www.mahavirricemill.com/uploads/img/grain.png"
                      alt="Superior Quality Grains"
                      className="w-8 h-8 mr-2"
                    />
                    <p>Providing superior quality grains</p>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://www.mahavirricemill.com/uploads/img/sust.png"
                      alt="Focus on Sustainability"
                      className="w-8 h-8 mr-2"
                    />
                    <p>Focus on sustainability</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <img
                      src="https://www.mahavirricemill.com/uploads/img/fine.png"
                      alt="Delivering finest rice varieties"
                      className="w-8 h-8 mr-2"
                    />
                    <p>Delivering finest rice varieties</p>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://www.mahavirricemill.com/uploads/img/cus.png"
                      alt="100% customer satisfaction"
                      className="w-8 h-8 mr-2"
                    />
                    <p>100% customer satisfaction</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
