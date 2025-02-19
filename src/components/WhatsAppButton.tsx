import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 transition-transform duration-300 hover:scale-110 flex items-center space-x-2"
    >
      {/* WhatsApp Icon */}
      <div className="bg-blue-400 p-4 rounded-full shadow-lg animate-bounce hover:animate-none">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
