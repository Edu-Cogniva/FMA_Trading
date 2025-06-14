import React from "react";
import {
  FaShippingFast,
  FaCubes,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const Reasons: React.FC = () => {
  const reasons = [
    {
      title: "Unmatched Sourcing & Quality Control",
      icon: <FaShieldAlt className="text-orange-500 text-5xl" />,
      description:
        "We meticulously source premium grains and products from trusted global suppliers. Our stringent quality control ensures that only the finest products reach our customers.",
    },
    {
      title: "Innovative & Secure Packaging",
      description:
        "Our advanced packaging technology preserves freshness and ensures durability. Every shipment is secured to maintain product integrity from origin to destination.",
      icon: <FaCubes className="text-orange-500 text-6xl" />,
    },
    {
      title: "Seamless Global Logistics",
      description:
        "From strategic warehousing to timely shipping, our efficient logistics network ensures smooth and hassle-free delivery worldwide.",
      icon: <FaShippingFast className="text-orange-500 text-5xl" />,
    },
    {
      title: "Customer-First Philosophy",
      description:
        "At FMA Trading, we build lasting relationships by prioritizing customer needs. Our dedicated support team is always ready to assist, ensuring a seamless experience.",
      icon: <FaUsers className="text-orange-500 text-6xl" />,
    },
  ];

  return (
    <section
      className="py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 bg-cover bg-center bg-no-repeat text-black"
      style={{
        backgroundImage: "url('/src/assets/FMA3.png')",
      }}
    >
      {/* Left Side - Bigger Image */}
      <div className="w-full lg:w-2/3">
        <img
          src="src/assets/reason poster.png"
          alt="Trade Excellence"
          // className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold text-orange-400 mb-6">
          Why FMA Trading?
        </h2>
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start gap-4 mb-6">
            {reason.icon}
            <div>
              <h3 className="text-xl font-semibold text-blue-300">
                {reason.title}
              </h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
