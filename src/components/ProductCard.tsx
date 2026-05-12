import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';
import { Product, WHATSAPP_URL } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappLink = `${WHATSAPP_URL}?text=Olá! Gostaria de mais informações sobre o produto: ${product.name}`;

  return (
    <div className="premium-card group relative flex flex-col overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
        {product.isNew && (
          <span className="badge-new z-10">Lançamento</span>
        )}
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white transition-colors shadow-lg">
            <Eye size={20} />
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary hover:bg-[#25D366] hover:text-white transition-colors shadow-lg"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <p className="text-[10px] md:text-xs text-brand-primary font-bold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="font-display font-bold text-base md:text-lg text-brand-secondary line-clamp-2 mb-2 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-brand-secondary">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <span className="text-[10px] md:text-xs text-brand-text font-medium">
              10x de {(product.price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} s/ juros
            </span>
          </div>
          
          <a 
             href={whatsappLink}
             target="_blank"
             rel="noopener noreferrer"
             className="mt-4 w-full py-3 bg-brand-neutral border border-gray-200 text-brand-secondary font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-brand-secondary hover:text-white transition-all"
          >
            Orçar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
