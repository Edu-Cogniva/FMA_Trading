import React from "react";

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Certifications
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img
            src="https://www.mahavirricemill.com/uploads/img/gallery/16957903968791.jpg"
            alt="Certification"
            className="w-full"
          />
          <img
            src="https://www.mahavirricemill.com/uploads/img/gallery/16957904022000.jpg"
            alt="Certification"
            className="w-full"
          />
          <img
            src="https://www.mahavirricemill.com/uploads/img/gallery/16957904994001.jpg"
            alt="Certification"
            className="w-full"
          />
          <img
            src="https://www.mahavirricemill.com/uploads/img/gallery/16957905107631.jpg"
            alt="Certification"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
