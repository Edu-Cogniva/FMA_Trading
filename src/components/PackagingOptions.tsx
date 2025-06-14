import React from "react";

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
            src="https://www.mahavirricemill.com/uploads/img/custombanner.png"
            alt="FABRIC"
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagingOptions;
