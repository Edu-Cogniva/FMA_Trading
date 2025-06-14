import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import productBanner from "../assets/Product Banner.jpg";
import pageImage from "../assets/Page 2.png"
import basmatiImage from "../assets/Basmati.jpeg"
import nonBasatiImage from "../assets/NonBasmati.jpg"
import rice3Image from "../assets/rice 03.jpg"

const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = (productType: string) => {
    const card = document.getElementById(productType);
    if (card) {
      card.classList.add("animate-burst");
      setTimeout(() => navigate(`/products/${productType}`), 300);
    }
  };

  return (
    <>
      {/* ✅ Banner just below navbar */}
      <div className="w-full mt-[64px]"> {/* Adjust margin-top if navbar height changes */}
        <img
          src={productBanner}
          alt="Product Banner"
          className="w-full max-h-[300px] object-cover"
        />
      </div>

      {/* Product Cards Section with fade animation */}
      <section
        ref={sectionRef}
        className="py-16 px-4 sm:px-6 lg:px-8 -mt-10 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"

        // className="min-h-[100px] py-[6.5rem] px-8 -mt-10 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out opacity-0 translate-y-10"
        style={{
          backgroundImage: pageImage,
          minHeight: "calc(100vh - 300px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Basmati Card */}
            <div
              id="Basmati"
              className="bg-white p-6 rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:brightness-110 active:scale-95 transform"
              onClick={() => handleClick("Basmati")}
            >
              <img
                src={basmatiImage}
                alt="Basmati Rice"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">Basmati Rice</h3>
              <p className="text-gray-600 text-sm">
                Long grains with a delicate texture.
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Perfect for biryanis, pulao, and exotic dishes.
              </p>
              <div className="flex justify-center">
                <div className="arrow-container">
                  <span className="arrow-icon">→</span>
                </div>
              </div>
            </div>

            {/* Non-Basmati Card */}
            <div
              id="NonBasmati"
              className="bg-white p-6 rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:brightness-110 active:scale-95 transform"
              onClick={() => handleClick("NonBasmati")}
            >
              <img
                src={nonBasatiImage}
                alt="Non-Basmati Rice"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">Non-Basmati Rice</h3>
              <p className="text-gray-600 text-sm">
                Affordable, versatile rice with a soft texture.
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Suitable for daily meals, fried rice, and more.
              </p>
              <div className="flex justify-center">
                <div className="arrow-container">
                  <span className="arrow-icon">→</span>
                </div>
              </div>
            </div>

            {/* ✅ South Indian Rice Card */}
            <div
              id="SouthIndian"
              className="bg-white p-6 rounded-xl shadow-xl cursor-pointer transition-transform duration-300 hover:brightness-110 active:scale-95 transform"
              onClick={() => handleClick("SouthIndian")}
            >
              <img
                src={rice3Image} // Make sure this image exists
                alt="South Indian Rice"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-black">South Indian Rice</h3>
              <p className="text-gray-600 text-sm">
                Traditional rice with rich aroma.
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Ideal for sambar rice, curd rice, and regional delicacies.
              </p>
              <div className="flex justify-center">
                <div className="arrow-container">
                  <span className="arrow-icon">→</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Animations & Arrow Styling */}
        <style>
          {`
            .animate-burst {
              animation: burst 0.3s ease-out forwards;
            }
            @keyframes burst {
              0% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.2); opacity: 0.5; }
              100% { transform: scale(1); opacity: 0; }
            }

            .arrow-container {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
            }

            .arrow-icon {
              font-size: 30px;
              color: #ff7f00;
              transition: color 0.3s ease-in-out;
            }

            .arrow-container:hover {
              background-color: #ff7f00;
              transform: scale(1.1);
            }

            .arrow-container:hover .arrow-icon {
              color: white;
            }
          `}
        </style>
      </section>
      <div className="pb-10"></div>

    </>
  );
};

export default ProductsSection;
