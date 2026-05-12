import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL, WHATSAPP_URL, CATEGORIES } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 text-brand-secondary"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Carvalho Store" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat} 
              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium uppercase tracking-wider hover:text-brand-primary transition-colors"
            >
              {cat}
            </a>
          ))}
          <a href="#sobre" className="text-sm font-medium uppercase tracking-wider hover:text-brand-primary transition-colors">Sobre</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-1 right-1 bg-brand-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-brand-secondary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-lg"
          >
            <MessageCircle size={16} />
            Suporte
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white z-[70] p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <img src={LOGO_URL} alt="Carvalho Store" className="h-8 w-auto" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {CATEGORIES.map((cat) => (
                  <a 
                    key={cat} 
                    href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest border-b border-gray-100 pb-2"
                  >
                    {cat}
                  </a>
                ))}
                <a 
                  href="#sobre" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest border-b border-gray-100 pb-2"
                >
                  Sobre
                </a>
              </nav>

              <div className="mt-auto space-y-4">
                <a 
                  href={WHATSAPP_URL}
                  className="w-full bg-brand-primary text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest shadow-xl"
                >
                  <MessageCircle size={20} />
                  Fale no WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
