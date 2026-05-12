/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import CollectionGrid from './components/CollectionGrid';
import ProductGrid from './components/ProductGrid';
import LifestyleSection from './components/LifestyleSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from './constants';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <TrustBanner />
        <CollectionGrid />
        
        {/* Why Choose Us */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.imgur.com/nLF1c1Q.jpeg" 
                    alt="Authority" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                  <p className="text-5xl font-black font-display uppercase tracking-tighter">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-1">Garantido <br/> Canoas - RS</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <span className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2 block">Autoridade Carvalho Store</span>
                  <h2 className="section-title uppercase leading-tight">Por que ser um <br/> cliente <span className="text-brand-primary">premium</span>?</h2>
                  <p className="text-brand-text font-medium text-lg leading-relaxed mt-6">
                    Nascemos em Canoas - RS com a missão de trazer o melhor do streetwear mundial 
                    para a nossa região. Hoje, enviamos para todo o Brasil, mas mantemos o 
                    atendimento próximo e humano que nos fez crescer.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { t: 'Produtos Selecionados', d: 'Cada par de tênis e peça de roupa passa por uma curadoria rigorosa.' },
                    { t: 'Atendimento via WhatsApp', d: 'Fale direto com quem entende. Sem robôs, atendimento humano e rápido.' },
                    { t: 'Entrega Segura e Rastreável', d: 'Enviamos com seguro e código de rastreio para todo o território nacional.' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-brand-neutral transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                      <div>
                        <h4 className="font-bold text-brand-secondary uppercase text-sm tracking-widest mb-1">{item.t}</h4>
                        <p className="text-brand-text text-sm font-medium">{item.d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="cta-button">
                  Conhecer Nossa História
                </button>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        <LifestyleSection />
        <Testimonials />

        {/* Call to Action Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-brand-secondary rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 max-w-3xl mx-auto leading-tight">
                  Pronto para elevar o seu <br/> <span className="text-brand-primary">estilo</span> ao próximo nível?
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                  Não perca as últimas unidades das nossas coleções exclusivas. 
                  Reserve agora seu calçado premium pelo WhatsApp com atendimento prioritário.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={WHATSAPP_URL} className="cta-button w-full sm:w-auto px-12 py-5 text-lg">
                    <MessageCircle size={24} />
                    Falar agora no WhatsApp
                  </a>
                  <button className="px-12 py-5 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-brand-secondary transition-all w-full sm:w-auto text-lg uppercase tracking-widest">
                    Ver Catálogo
                  </button>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-20 blur-[120px]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

