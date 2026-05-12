import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, PRODUCT_IMAGES } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-neutral -skew-x-12 transform origin-top-right z-0 hidden lg:block" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-brand-secondary text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
                Estilo Urbano • Entrega Nacional
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-brand-secondary leading-[0.9] tracking-tighter mb-6 uppercase">
                Calçados <br />
                <span className="text-brand-primary">Premium</span> & <br />
                Streetwear
              </h1>
              <p className="text-brand-text text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Sua referência regional em moda exclusiva com alcance em todo o Brasil. 
                Atendimento premium sob medida para o seu estilo.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="#calçados-premium" className="cta-button w-full sm:w-auto">
                  Ver Coleção
                  <ArrowRight size={20} />
                </a>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 border-2 border-brand-secondary text-brand-secondary font-bold rounded-lg hover:bg-brand-secondary hover:text-white transition-all w-full sm:w-auto justify-center"
                >
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl skew-y-2 lg:skew-y-0 lg:-rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src={PRODUCT_IMAGES[4]} 
                  alt="Premium Sneaker" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm uppercase tracking-widest font-bold mb-1">Último Lançamento</p>
                  <p className="text-3xl font-display font-black uppercase">Air Urban Max</p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
              >
                <p className="text-brand-primary text-4xl font-black font-display leading-none">14</p>
                <p className="text-brand-text text-[10px] font-bold uppercase tracking-widest mt-1">Dias de <br/> Garantia</p>
              </motion.div>
            </motion.div>

            {/* Decorative Background Image Overlay */}
            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-brand-primary opacity-10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
