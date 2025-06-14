import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const images = [
    {
      src: "src/assets/fma1.png",
      className: "w-full h-full object-cover",
    },
    {
      src: "src/assets/home 3.png",
      className: "w-[100%] h-auto object-contain", // Making the second image smaller
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      <img
        src={images[currentImage].src}
        alt="Rice Manufacturers & Exporters in India"
        className={`${
          images[currentImage].className
        } transition-opacity duration-3000 ease-in-out opacity-100`}
        style={{
          opacity: 1, // Make sure the current image is visible
        }}
      />
    </section>
  );
};

export default HeroSection;
