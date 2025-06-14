import React from "react";
import { FaGlobe, FaSeedling, FaWarehouse, FaTags } from "react-icons/fa";
import bannerImage from "../assets/About banner.jpg";
import backgroundimage from "../assets/5.png"

const About: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: backgroundimage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "4rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "2rem",
    color: "#F7740C",
    minWidth: "40px",
  };

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flex: "1 1 280px",
    margin: "1rem",
    maxWidth: "400px",
  };

  return (
    <>
      {/* Banner */}
      <div style={{ width: "100%", marginTop: "60px" }}>
        <img
          src={bannerImage}
          alt="About Us Banner"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Content */}
      <section style={sectionStyle}>
        <h2
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            fontWeight: "300",
            color: "#F7740C",
            margin: "2rem 0 1rem",
            textAlign: "center",
            fontStyle: "italic",
            lineHeight: "1.4",
          }}
        >
          Discover who we are, what we do, and how we deliver excellence across global rice markets.
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#333",
            lineHeight: "1.8",
            marginBottom: "2rem",
            textAlign: "center",
            padding: "0 1rem",
            maxWidth: "900px",
          }}
        >
          FMA Trading is a leading rice export house based in India, known for its premium-quality grains,
          advanced processing, and worldwide network. From paddy to packaging, we manage every detail to ensure
          quality and trust. We also specialize in private-label and custom rebranding for global clients — making your product truly yours.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* Card 1 */}
          <div style={cardStyle}>
            <FaSeedling style={iconStyle} />
            <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "0.5rem" }}>
              Diverse Rice Portfolio
            </h3>
            <p style={{ marginTop: "0.5rem" }}>
              From fragrant Basmati to robust Non-Basmati varieties like Sona Masoori, IR64, and Ponni — available in both Parboiled and Raw formats — our range is curated for kitchens worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <FaWarehouse style={iconStyle} />
            <h3 style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: "0.5rem" }}>
              Our Vision
            </h3>
            <p style={{ marginTop: "0.5rem" }}>
              To empower farmers, promote sustainability, and deliver world-class rice to every household globally.
            </p>
          </div>

          {/* Card 3 */}
          <div style={cardStyle}>
            <FaTags style={iconStyle} />
            <h3 style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop: "0.5rem" }}>
              Our Mission
            </h3>
            <p style={{ marginTop: "0.5rem" }}>
              With cutting-edge milling and hygienic packaging, we maintain the flavor and shelf-life of every grain — from field to table.
            </p>
          </div>

          {/* Card 4 */}
          <div style={cardStyle}>
            <FaGlobe style={iconStyle} />
            <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginTop: "0.5rem" }}>
              Global Reach & Rebranding
            </h3>
            <p style={{ marginTop: "0.5rem" }}>
              Our rice reaches kitchens across the Middle East, Europe, Africa, and North America. With our
              tailored private labeling & rebranding services, we help businesses launch their own rice brand with
              confidence and authenticity.
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            marginTop: "3rem",
            fontStyle: "italic",
            textAlign: "center",
            color: "#555",
            padding: "0 1rem",
          }}
        >
          “From Our Fields to Your Table – The Taste of Tradition & Purity!”
        </p>
      </section>
    </>
  );
};

export default About;
