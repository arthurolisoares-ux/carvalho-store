import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_IMAGES } from '../constants';

const COLLECTIONS = [
  { name: 'Calçados Premium', img: PRODUCT_IMAGES[0], color: 'bg-brand-primary' },
  { name: 'Streetwear Essentials', img: PRODUCT_IMAGES[5], color: 'bg-brand-secondary' },
  { name: 'Camisas de Time', img: PRODUCT_IMAGES[11], color: 'bg-brand-accent' },
];

export default function CollectionGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Curadoria Exclusiva</span>
            <h2 className="section-title uppercase leading-none">Navegue pelas <br/> nossas <span className="text-brand-primary">coleções</span></h2>
          </div>
          <p className="text-brand-text font-medium max-w-sm text-sm">
            Produtos selecionados a dedo para quem não abre mão de qualidade e autenticidade. 
            Do lifestyle urbano ao alto padrão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.map((col, idx) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] md:h-[600px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={col.img} 
                alt={col.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              
              <div className="absolute inset-x-8 bottom-8">
                <p className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-2">Explorar agora</p>
                <h3 className="text-white text-3xl md:text-4xl font-black font-display uppercase tracking-tighter leading-tight mb-6">
                  {col.name}
                </h3>
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b-2 border-brand-primary pb-2 w-fit group-hover:gap-4 transition-all">
                  Ver Coleção
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
