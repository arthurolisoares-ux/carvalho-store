import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, WHATSAPP_TEXT } from '../constants';

export default function WhatsAppFloat() {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label={WHATSAPP_TEXT}
    >
      <div className="absolute right-full mr-4 bg-white text-brand-secondary px-4 py-2 rounded-lg shadow-xl font-bold text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        {WHATSAPP_TEXT}
      </div>
      <MessageCircle size={32} />
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
