import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

export default function ProductGrid() {
  return (
    <section id="calçados-premium" className="py-20 bg-brand-neutral">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Destaques da Semana</span>
            <h2 className="section-title uppercase">Vitrine <span className="text-brand-primary">Premium</span></h2>
          </div>
          
          <div className="flex gap-2">
            {['Tudo', 'Tênis', 'Streetwear', 'Camisas'].map((filter, i) => (
              <button 
                key={filter}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  i === 0 ? 'bg-brand-secondary text-white shadow-lg' : 'bg-white text-brand-text border border-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-5 bg-white border border-brand-secondary text-brand-secondary font-black uppercase tracking-[0.2em] rounded-xl hover:bg-brand-secondary hover:text-white transition-all shadow-sm">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
