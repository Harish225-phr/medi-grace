import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual number
  const message = "Hi! I'm interested in your skincare services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-large transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;