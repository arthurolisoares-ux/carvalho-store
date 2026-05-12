import { PRODUCT_IMAGES } from '../constants';
import { motion } from 'motion/react';

export default function LifestyleSection() {
  return (
    <section className="py-24 bg-brand-secondary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-4 block">Manifesto Carvalho Store</span>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Estilo de rua, <br />
              <span className="text-brand-primary underline decoration-brand-primary underline-offset-8 italic">conforto real</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">
              Não vendemos apenas produtos. Entregamos identidade e confiança. 
              Cada par de tênis e cada peça de roupa é selecionada pensando no lifestyle urbano autêntico.
              Seja na pista ou na torcida, seu estilo é nossa prioridade.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
              <div>
                <p className="text-brand-primary text-4xl font-black font-display mb-1">+5.5k</p>
                <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-brand-primary text-4xl font-black font-display mb-1">+2k</p>
                <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Modelos Disponíveis</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              whileInView={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img src={PRODUCT_IMAGES[25]} alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border-4 border-brand-primary">
                <img src={PRODUCT_IMAGES[35]} alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              whileInView={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="space-y-4 pt-12"
            >
              <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl">
                <img src={PRODUCT_IMAGES[45]} alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img src={PRODUCT_IMAGES[12]} alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Large Text Decor */}
      <div className="absolute bottom-0 left-0 text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase">
        Streetwear
      </div>
    </section>
  );
}
