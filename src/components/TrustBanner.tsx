import { Truck, RotateCcw, MessageSquare, ShieldCheck } from 'lucide-react';
import { TRUST_ITEMS } from '../constants';

export default function TrustBanner() {
  const icons: Record<string, any> = {
    Truck: Truck,
    RotateCcw: RotateCcw,
    MessageSquare: MessageSquare,
    ShieldCheck: ShieldCheck,
  };

  return (
    <div className="bg-brand-secondary text-white py-6 md:py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div key={item.title} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Icon className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
