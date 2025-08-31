import React, { useState, useEffect } from "react";
import backgroundimage from "../assets/5.png";

// ✅ Import feature images from assets
import feature1 from "../assets/feature_1.png";
import feature2 from "../assets/feature_2.png";
import feature3 from "../assets/feature_3.png";
import feature4 from "../assets/feature_4.png"; 
import feature5 from "../assets/feature_5.png"; 
import feature6 from "../assets/feature_6.png"; 
import feature7 from "../assets/feature_7.png"; 
import feature8 from "../assets/feature_8.png"; 

// ✅ Feature Data
const features = [
  {
    image: feature1,
    text: "7+ Years Experience",
  },
  {
    image: feature2,
    text: "240 Metric Ton Per Day Production Capacity",
  },
  {
    image: feature3,
    text: "30K Metric Tons Exported",
  },
  {
    image: feature4,
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
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-32"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* ✅ Auto-Scrolling Feature Card */}
          <div className="flex justify-center">
            <div className="w-[300px] h-[250px] min-w-[300px] min-h-[250px] flex-shrink-0 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-in-out bg-cover bg-center">
              <img
                src={features[index].image}
                alt={features[index].text}
                className="w-20 h-20 mb-4"
              />
              <p className="text-lg font-bold text-center">
                {features[index].text}
              </p>
            </div>
          </div>

          {/* ✅ About Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">FMA Trading</h2>
            <p className="text-gray-700 mb-4">
              FMA Trading is a leading rice export company committed to
              delivering premium quality grains worldwide. With a strong
              foundation in agriculture and trade, they ensure excellence from
              sourcing to distribution. Their expertise, innovation, and
              dedication to customer satisfaction make them a trusted name in the
              global rice market.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <img
                      src={feature5}
                      alt="Superior Quality Grains"
                      className="w-8 h-8 mr-2"
                    />
                    <p>Providing superior quality grains</p>
                  </li>
                  <li className="flex items-center">
                    <img
                      src={feature6}
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
                      src={feature7}
                      alt="Delivering finest rice varieties"
                      className="w-8 h-8 mr-2"
                    />
                    <p>Delivering finest rice varieties</p>
                  </li>
                  <li className="flex items-center">
                    <img
                      src={feature8}
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
