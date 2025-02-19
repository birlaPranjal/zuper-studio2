"use client";
import { FC, useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 transition-opacity duration-300 z-40 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* WhatsApp Button and Dialog */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center group"
        >
          {/* Dialog Box */}
          <div className={`absolute bottom-full left-0 mb-4 bg-white rounded-lg shadow-xl p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className="text-lg font-semibold text-gray-800 whitespace-nowrap">
              Click here to crack a deal! 🎯
            </div>
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45" />
          </div>

          {/* WhatsApp Icon */}
          <div className={`bg-[#01a2fd] p-4 rounded-full shadow-lg transition-transform duration-300 ${
            isHovered ? 'scale-110 animate-none' : 'animate-bounce hover:animate-none'
          }`}>
            <FaWhatsapp className="text-white text-3xl font-bold" />
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
