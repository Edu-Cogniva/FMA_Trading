import React from "react";
import packs from "../assets/packaging.png"; 

const PackagingOptions: React.FC = () => {
  return (
    <section className="py-10 bg-[#fdf7f0] text-center">
      <h3 className="text-lg text-gray-600">
        FROM 500GM TO 1 METRIC TON JUMBO BAGS
      </h3>
      <h2 className="text-3xl font-bold text-brown-700 my-3">
        Offer Custom Sizes Packaging
      </h2>

      <div className="flex flex-col items-center mt-8">
        <div className="relative flex justify-center items-center">
          <img
            src={packs}
            alt="FABRIC"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagingOptions;
