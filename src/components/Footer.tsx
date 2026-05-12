import { Instagram, MapPin, Phone, MessageCircle, Shield, Truck, RotateCw } from 'lucide-react';
import { STORE_NAME, STORE_REGION, INSTAGRAM_URL, WHATSAPP_URL, LOGO_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-neutral border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <img src={LOGO_URL} alt={STORE_NAME} className="h-12 w-auto" />
            <p className="text-brand-text font-medium text-sm leading-relaxed">
              Referência regional em moda streetwear e calçados premium. 
              Qualidade e exclusividade garantidas com atendimento personalizado.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} className="p-2 bg-white rounded-full text-brand-secondary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_URL} className="p-2 bg-white rounded-full text-brand-secondary hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-tight mb-6">Institucional</h4>
            <ul className="space-y-4">
              {['Sobre a Loja', 'Como Comprar', 'Política de Troca', 'Fale Conosco', 'Depoimentos'].map(link => (
                <li key={link}>
                  <a href="#" className="text-brand-text text-sm font-medium hover:text-brand-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-tight mb-6">Categorias</h4>
            <ul className="space-y-4">
              {['Calçados Premium', 'Camisas de Time', 'Oversized Streetwear', 'Lançamentos', 'Acessórios'].map(link => (
                <li key={link}>
                  <a href="#" className="text-brand-text text-sm font-medium hover:text-brand-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-tight mb-6">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <MapPin size={18} className="text-brand-primary" />
                {STORE_REGION} (Envio Nacional)
              </li>
              <li className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <Phone size={18} className="text-brand-primary" />
                Solicite Orçamento via Zap
              </li>
              <li className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <Shield size={18} className="text-brand-primary" />
                Compra 100% Segura
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-10 border-y border-gray-200 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
          <div className="flex items-center gap-2">
            <Truck size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">Entrega Rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCw size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">Troca Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={24} />
            <span className="text-xs font-bold uppercase tracking-widest">Loja Auditada</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-text text-xs font-medium">
            © 2024 {STORE_NAME}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <img src="https://img.shields.io/badge/Credit_Card-Visa-blue" alt="Visa" />
            <img src="https://img.shields.io/badge/Credit_Card-Mastercard-red" alt="Master" />
            <img src="https://img.shields.io/badge/Payment-PIX-green" alt="PIX" />
          </div>
        </div>
      </div>
    </footer>
  );
}
