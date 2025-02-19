"use client";
import { FC, useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page is loaded scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 hover:scale-110 flex items-center space-x-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {/* WhatsApp Icon */}
      <div className="bg-blue-400 p-4 rounded-full shadow-lg animate-bounce hover:animate-none">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
