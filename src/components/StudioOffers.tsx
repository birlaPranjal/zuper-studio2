import Link from "next/link";
import React from "react";


const services = [
  { id: "01", title: "Personal Branding" },
  { id: "02", title: "Social Media Content Creation" },
  { id: "03", title: "Podcast Setup" },
  { id: "04", title: "World-Class Studio" },
  { id: "05", title: "All Types of Advertising" },
  { id: "06", title: "Product Photoshoot" },
  { id: "07", title: "Visual Branding" },
];

const ZuperStudioOffers = () => {
  return (
    <section className="text-white flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">WHAT ZUPERSTUDIO OFFERS</h2>
      
      <div className="flex items-center justify-center flex-wrap gap-10 max-w-6xl">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group p-6 border border-gray-700 rounded-2xl text-center hover:bg-gray-800/40 transition min-w-[300px] md:min-w-[250px] relative overflow-hidden"
          >
            {/* Circular Gradient Backdrop */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(1,162,253,0.15) 0%, transparent 100%)',
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <span className="block text-2xl font-semibold mb-2 text-blue-400">{service.id}</span>
              <p className="text-base">{service.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/services" className="mt-10 px-6 py-3 bg-[#01a2fd] text-white font-semibold rounded-lg hover:bg-[#01a2fd]/80 transition">
        View More
      </Link>
    </section>

  );
};

export default ZuperStudioOffers;
