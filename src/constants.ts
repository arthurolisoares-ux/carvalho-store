
export const STORE_NAME = "CARVALHO STORE";
export const STORE_REGION = "CANOAS - RS";
export const INSTAGRAM_URL = "https://www.instagram.com/carvalhostore_rs/";
export const WHATSAPP_URL = "https://w.app/carvalhostorers";
export const WHATSAPP_TEXT = "Fale no WhatsApp";
export const LOGO_URL = "https://i.imgur.com/lwFzQgm.png";

export const BRAND_COLORS = {
  primary: "#ED4956",
  secondary: "#2A2A2A",
  neutral: "#F9F9F9",
  accent: "#1E90FF",
  text: "#555555",
};

export const PRODUCT_IMAGES = [
  "https://i.imgur.com/nLF1c1Q.jpeg",
  "https://i.imgur.com/c9HRvm3.jpeg",
  "https://i.imgur.com/NbotcUZ.png",
  "https://i.imgur.com/hBKuQMC.png",
  "https://i.imgur.com/BRiGcqs.png",
  "https://i.imgur.com/eU8eC3I.jpeg",
  "https://i.imgur.com/F8yTBD8.png",
  "https://i.imgur.com/hDZcPoc.jpeg",
  "https://i.imgur.com/L1CeQ15.png",
  "http://i.imgur.com/ups6Ul4.png",
  "https://i.imgur.com/VnIhJwt.png",
  "https://i.imgur.com/ulvQ0qR.jpeg",
  "https://i.imgur.com/3LwziUn.png",
  "https://i.imgur.com/jH6xD6d.png",
  "https://i.imgur.com/PAUj6zJ.jpeg",
  "https://i.imgur.com/OUgO9kt.jpeg",
  "http://i.imgur.com/4L5lqfi.png",
  "https://i.imgur.com/ydefCGd.jpeg",
  "https://i.imgur.com/D6KbFqM.jpeg",
  "https://i.imgur.com/cxzuStX.png",
  "http://i.imgur.com/BTfUTNj.jpeg",
  "https://i.imgur.com/VBCusuV.png",
  "https://i.imgur.com/TGoed23.png",
  "https://i.imgur.com/JiPZdUp.png",
  "https://i.imgur.com/FJCnmcc.jpeg",
  "https://i.imgur.com/5MwnoTd.png",
  "https://i.imgur.com/UsorooG.png",
  "https://i.imgur.com/CQbr0PM.png",
  "https://i.imgur.com/5Fd3198.png",
  "https://i.imgur.com/cr1qOp5.jpeg",
  "https://i.imgur.com/Vu15tbE.png",
  "https://i.imgur.com/5yOfQbH.png",
  "https://i.imgur.com/3gGhL5m.png",
  "https://i.imgur.com/1sQmnZo.png",
  "http://i.imgur.com/3yf14cq.jpeg",
  "https://i.imgur.com/WziRIbw.jpeg",
  "https://i.imgur.com/p64MSfo.jpeg",
  "https://i.imgur.com/J7uClV9.png",
  "https://i.imgur.com/WLE0uRn.png",
  "https://i.imgur.com/3CViLyc.png",
  "https://i.imgur.com/Mq0aZ0n.png",
  "https://i.imgur.com/t9jinda.png",
  "https://i.imgur.com/BsG8HYD.png",
  "https://i.imgur.com/gZHm4HE.png",
  "https://i.imgur.com/CGB8an2.png",
  "https://i.imgur.com/8tSfTLz.png",
  "https://i.imgur.com/tBai45N.png",
  "https://i.imgur.com/WeBWeUL.png",
  "https://i.imgur.com/b4znzuu.png",
  "https://i.imgur.com/wwo06q3.png",
  "https://i.imgur.com/OhFxkvb.png",
  "https://i.imgur.com/f8YOegL.png",
  "https://i.imgur.com/n3LofSH.png",
  "https://i.imgur.com/LRhg0C1.png",
  "https://i.imgur.com/fd9kQVo.png",
  "https://i.imgur.com/o8ImfMt.png",
];

export const TESTIMONIAL_IMAGES = [
  "https://i.imgur.com/QlR7087.png",
  "https://i.imgur.com/Jja5rus.png",
  "https://i.imgur.com/U6iWxDF.png",
  "https://i.imgur.com/6BozdFc.png",
  "https://i.imgur.com/OtLFdg5.png",
  "https://i.imgur.com/TOd0ZK1.png",
  "https://i.imgur.com/os7rur4.png",
  "https://i.imgur.com/2cz3qHS.png",
  "https://i.imgur.com/k0lYsdw.png",
  "https://i.imgur.com/IfrbBJy.png",
  "https://i.imgur.com/7vVPzAX.png",
  "https://i.imgur.com/avjqfcg.png",
  "https://i.imgur.com/8vBTiib.png",
  "https://i.imgur.com/ttEhl2J.png",
  "https://i.imgur.com/gMsSmCx.png",
  "https://i.imgur.com/kdQIM8B.png",
  "https://i.imgur.com/fan43E9.png",
  "https://i.imgur.com/aYulyU2.png",
  "https://i.imgur.com/gYQKpRe.png",
  "https://i.imgur.com/greMKkP.png",
];

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  { id: "1", name: "Tênis Premium Heritage", price: 499.9, category: "Calçados Premium", image: PRODUCT_IMAGES[0], isNew: true },
  { id: "2", name: "Camiseta Streetwear Oversized", price: 189.9, category: "Streetwear", image: PRODUCT_IMAGES[5] },
  { id: "3", name: "Camisa de Time 2024", price: 299.9, category: "Camisas de Time", image: PRODUCT_IMAGES[11], isNew: true },
  { id: "4", name: "Sneaker Urban X", price: 549.9, category: "Calçados Premium", image: PRODUCT_IMAGES[2] },
  { id: "5", name: "Blusa Moletom Essentials", price: 259.9, category: "Streetwear", image: PRODUCT_IMAGES[15] },
  { id: "6", name: "Camisa Seleção Edição Luxo", price: 349.9, category: "Camisas de Time", image: PRODUCT_IMAGES[20] },
  { id: "7", name: "Tênis Sport Elite", price: 429.9, category: "Calçados Premium", image: PRODUCT_IMAGES[30] },
  { id: "8", name: "Calça Cargo Street", price: 219.9, category: "Streetwear", image: PRODUCT_IMAGES[40] },
];

export const CATEGORIES = [
  "Calçados Premium",
  "Streetwear",
  "Camisas de Time",
  "Promoções",
];

export const TRUST_ITEMS = [
  { title: "Frete Grátis", desc: "Acima de R$299", icon: "Truck" },
  { title: "Troca em 14 dias", desc: "Sem burocracia", icon: "RotateCcw" },
  { title: "Suporte 24h", desc: "Via WhatsApp", icon: "MessageSquare" },
  { title: "100% Confiável", desc: "Entrega Garantida", icon: "ShieldCheck" },
];

export const TESTIMONIALS = [
  { name: "Lucas Melo", text: "Melhor atendimento que já tive! O tênis chegou muito rápido e a qualidade é absurda.", city: "Porto Alegre" },
  { name: "Ana Paula", text: "As camisas de time são perfeitas, todos os detalhes idênticos. Com certeza vou pedir mais.", city: "Canoas" },
  { name: "Gabriel Silva", text: "Entrega super rápida para Canoas. O atendimento via zap tira todas as dúvidas.", city: "São Leopoldo" },
  { name: "Mariana Costa", text: "Sou fã da Carvalho Store! Sempre antenados nos lançamentos streetwear.", city: "Novo Hamburgo" },
];
