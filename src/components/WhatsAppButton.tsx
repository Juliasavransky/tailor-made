"use client";
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "33659149899"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your tailoring services. Can we discuss?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="floating-whatsapp group  fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle 
        size={24} 
        className="group-hover:animate-bounce transition-all duration-300" 
      />
    </button>
  );
};

export default WhatsAppButton;