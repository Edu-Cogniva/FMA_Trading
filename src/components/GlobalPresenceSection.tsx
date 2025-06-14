import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple } from "leaflet";  // ✅ Import LatLngTuple

// 🔹 Custom blinking marker style
const blinkingIcon = new L.DivIcon({
  className: "blinking-marker",
  html: `<div class="marker-dot"></div>`,
  iconSize: [20, 20],
});

const locations: { name: string; position: LatLngTuple }[] = [
  { name: "Saudi Arabia", position: [23.8859, 45.0792] },
  { name: "UAE", position: [25.276987, 55.296249] },
  { name: "Iran", position: [32.4279, 53.688] },
  { name: "Iraq", position: [33.3152, 44.3661] },
  { name: "Kuwait", position: [29.3759, 47.9774] },
  { name: "Qatar", position: [25.3548, 51.1839] },
  { name: "Bahrain", position: [26.0667, 50.5577] },
  { name: "Serbia", position: [44.0165, 21.0059] },
  { name: "Europe", position: [50.1109, 8.6821] },
  { name: "Egypt", position: [26.8206, 30.8025] },
];

const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="pt-32 py-16 bg-gray-100 scroll-margin-top">

      {/* 🔹 Content Section */}
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Global Dominance
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
          With over a decade of expertise, FMA Trading has rapidly built a reputation for excellence, earning the trust of customers worldwide. 
          Our unwavering commitment to quality and service has fostered strong, lasting partnerships with both new and long-standing clients. 
          Today, our market presence spans the Kingdom of Saudi Arabia, UAE, Iran, Iraq, Kuwait, Qatar, Bahrain, Serbia, Europe, and Egypt. 
          We are continuously expanding into new markets, driven by trust, innovation, and an unrelenting pursuit of perfection.
        </p>
      </div>

      {/* 🔹 Map Section */}
      <div className="relative z-0 w-full max-w-6xl mx-auto border-4 border-gray-300 shadow-lg rounded-lg overflow-hidden mt-12">
      <MapContainer
          center={[25, 50]} // Initial map center
          zoom={3}
          className="h-[500px] w-full"
          scrollWheelZoom={true} // Disable scrolling
          dragging={true} // Disable dragging
          doubleClickZoom={true} // Prevent double-click zooming
          zoomControl={true} // Hide zoom controls
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc, index) => (
            <Marker key={index} position={loc.position} icon={blinkingIcon}>
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                <span className="font-semibold text-gray-900">{loc.name}</span>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* 🔹 Additional Styling */}
      <style>{`
        .blinking-marker .marker-dot {
          width: 15px;
          height: 15px;
          background-color: #32CD32;
          border-radius: 50%;
          animation: blink 1s infinite;
          box-shadow: 0 0 10px rgba(50, 205, 50, 0.8);
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default GlobalPresenceSection;

// import React from "react";
// import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L, { LatLngTuple } from "leaflet";

// // 🔹 Blinking marker icon (pure HTML string inside DivIcon)
// const blinkingIcon = new L.DivIcon({
//   className: "blinking-marker",
//   html: '<div class="marker-dot"></div>', // ✅ Use string not JSX
//   iconSize: [20, 20],
//   iconAnchor: [10, 10],
// });

// const locations: { name: string; position: LatLngTuple }[] = [
//   { name: "Saudi Arabia", position: [23.8859, 45.0792] },
//   { name: "UAE", position: [25.276987, 55.296249] },
//   { name: "Iran", position: [32.4279, 53.688] },
//   { name: "Iraq", position: [33.3152, 44.3661] },
//   { name: "Kuwait", position: [29.3759, 47.9774] },
//   { name: "Qatar", position: [25.3548, 51.1839] },
//   { name: "Bahrain", position: [26.0667, 50.5577] },
//   { name: "Serbia", position: [44.0165, 21.0059] },
//   { name: "Europe", position: [50.1109, 8.6821] },
//   { name: "Egypt", position: [26.8206, 30.8025] },
// ];

// const GlobalPresenceSection: React.FC = () => {
//   return (
//     <section className="pt-32 py-16 bg-gray-100 scroll-margin-top">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-6 text-gray-800">Global Dominance</h2>
//         <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
//           With over a decade of expertise, FMA Trading has rapidly built a reputation for excellence, earning the trust of customers worldwide.
//           Our unwavering commitment to quality and service has fostered strong, lasting partnerships with both new and long-standing clients.
//           Today, our market presence spans the Kingdom of Saudi Arabia, UAE, Iran, Iraq, Kuwait, Qatar, Bahrain, Serbia, Europe, and Egypt.
//           We are continuously expanding into new markets, driven by trust, innovation, and an unrelenting pursuit of perfection.
//         </p>
//       </div>

//       <div className="relative z-0 w-full max-w-6xl mx-auto border-4 border-gray-300 shadow-lg rounded-lg overflow-hidden mt-12">

//         <MapContainer
//           center={[25, 50]}
//           zoom={3}
//           className="h-[500px] w-full"
//           scrollWheelZoom={true}
//           dragging={true}
//           doubleClickZoom={true}
//           zoomControl={true}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           {locations.map((loc, index) => (
//             <Marker key={index} position={loc.position} icon={blinkingIcon}>
//               <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
//                 <span className="font-semibold text-gray-900">{loc.name}</span>
//               </Tooltip>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       {/* 🔹 Inline CSS for blinking effect */}
//       {/* Inline CSS for blinking marker */}
//       <style>
//         {`
//           .blinking-marker .marker-dot {
//             width: 15px;
//             height: 15px;
//             background-color: #32CD32;
//             border-radius: 50%;
//             animation: blink 1s infinite;
//             box-shadow: 0 0 10px rgba(50, 205, 50, 0.8);
//           }

//           @keyframes blink {
//             0% { opacity: 1; }
//             50% { opacity: 0.2; }
//             100% { opacity: 1; }
//           }
//         `}
//       </style>

//     </section>
//   );
// };

// export default GlobalPresenceSection;
