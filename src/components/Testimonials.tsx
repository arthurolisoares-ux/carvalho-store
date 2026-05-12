import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIAL_IMAGES, STORE_NAME } from '../constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">O que dizem sobre nós</span>
          <h2 className="section-title uppercase">Clientes que confiam na <span className="text-brand-primary">{STORE_NAME}</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="premium-card p-8 flex flex-col items-center text-center">
              <div className="flex gap-1 text-brand-primary mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              
              <Quote size={24} className="text-brand-primary/20 mb-4" />
              
              <p className="text-brand-text font-medium mb-6 italic leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="mt-auto">
                <p className="font-bold text-brand-secondary uppercase tracking-widest text-xs">{t.name}</p>
                <p className="text-brand-text opacity-60 text-[10px] font-bold uppercase tracking-widest">{t.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Delivery Photos Carrousel Simulation */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter">Entregamos em todo <span className="text-brand-primary">Brasil</span></h3>
            <p className="text-brand-text font-bold text-xs uppercase tracking-widest border-b border-brand-primary pb-1">Siga no Instagram @carvalhostore_rs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
            {TESTIMONIAL_IMAGES.slice(0, 10).map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-primary transition-all cursor-zoom-in">
                <img src={img} alt="Client Photo" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
