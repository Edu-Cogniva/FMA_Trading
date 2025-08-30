import React from "react";
import rice1 from "../assets/raw rice.png"
import rice2 from "../assets/steam rice.png"
import rice3 from "../assets/white sella.png"
import rice4 from "../assets/golden sella.png"

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Best Varieties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "sepia(100%)";
                img.style.transition = "filter 0.3s ease in";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "grayscale(0%)";
              }
            }}
          >
            <img
              src={rice1}
              alt="Raw"
              className="w-full rounded-lg mb-4 hover-zoom"
            />
            <h3 className="text-xl font-bold mb-2">Raw</h3>
            <p className="text-gray-700">
              Experience the unadulterated essence of Basmati rice with our
              premium raw variety.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "sepia(100%)";
                img.style.transition = "filter 0.3s ease in";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "grayscale(0%)";
              }
            }}
          >

            <img
              src={rice2}
              alt="Steam"
              className="w-full rounded-lg mb-4 hover-zoom"
            />
            <h3 className="text-xl font-bold mb-2">Steam</h3>
            <p className="text-gray-700">
              Globally cherished for its extra-long, slender grains that double
              in size when cooked.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "sepia(100%)";
                img.style.transition = "filter 0.3s ease in";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "grayscale(0%)";
              }
            }}
          >
            <img
              src={rice3}
              alt="White Sella"
              className="w-full rounded-lg mb-4 hover-zoom"
            />
            <h3 className="text-xl font-bold mb-2">White Sella</h3>
            <p className="text-gray-700">
              This variety is renowned for its unparalleled quality and
              delightful aroma.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "sepia(100%)";
                img.style.transition = "filter 0.3s ease in";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              const img = e.currentTarget.querySelector("img");
              if (img) {
                img.style.filter = "grayscale(0%)";
              }
            }}
          >
            <img
              src={rice4}
              alt="Golden Sella"
              className="w-full rounded-lg mb-4 hover-zoom"
            />
            <h3 className="text-xl font-bold mb-2">Golden Sella</h3>
            <p className="text-gray-700">
              This a premium parboiled variety that undergoes a meticulous
              process.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
