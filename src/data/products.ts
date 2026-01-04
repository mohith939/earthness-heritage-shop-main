export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badges: string[];
  description: string;
  origin: string;
  benefits: string[];
  ingredients: string;
  storage: string;
  farmerStory: string;
}

export const products: Product[] = [
  {
    id: "ceylon-cinnamon",
    name: "Ceylon Cinnamon Sticks",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&q=80",
    category: "Spices",
    badges: ["Organic", "Farm Fresh"],
    description: "Hand-harvested Ceylon cinnamon from the misty highlands. Known as 'true cinnamon', our sticks are delicate, sweet, and aromatic.",
    origin: "Sri Lanka, Ceylon Highlands",
    benefits: ["Supports healthy blood sugar", "Rich in antioxidants", "Natural anti-inflammatory"],
    ingredients: "100% Pure Ceylon Cinnamon (Cinnamomum verum)",
    storage: "Store in a cool, dry place. Keep sealed to preserve freshness.",
    farmerStory: "Our cinnamon is harvested by the Perera family, who have been cultivating cinnamon for four generations in the Ceylon highlands.",
  },
  {
    id: "turmeric-root",
    name: "Organic Turmeric Root",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80",
    category: "Spices",
    badges: ["Organic", "Handpicked"],
    description: "Golden turmeric root, sun-dried and hand-ground. The heart of traditional wellness, straight from Indian farms.",
    origin: "Kerala, India",
    benefits: ["Powerful antioxidant", "Supports joint health", "Aids digestion"],
    ingredients: "100% Pure Turmeric Root (Curcuma longa)",
    storage: "Store in an airtight container away from sunlight.",
    farmerStory: "Grown by cooperative farmers in Kerala using traditional methods passed down through generations.",
  },
  {
    id: "lavender-herbs",
    name: "Dried Lavender Flowers",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80",
    category: "Herbs",
    badges: ["Organic", "Artisanal"],
    description: "Fragrant lavender flowers, hand-picked at peak bloom from Provence fields. Perfect for teas, baking, and aromatherapy.",
    origin: "Provence, France",
    benefits: ["Promotes relaxation", "Natural sleep aid", "Aromatic culinary herb"],
    ingredients: "100% Pure Lavender Flowers (Lavandula angustifolia)",
    storage: "Keep in a sealed container in a dark, cool place.",
    farmerStory: "Harvested from the sun-drenched fields of the Dupont family farm in Provence, France.",
  },
  {
    id: "quinoa-grains",
    name: "Ancient Quinoa Grains",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    category: "Grains",
    badges: ["Organic", "Superfood"],
    description: "Royal quinoa from the Bolivian Andes. Nutty, protein-rich, and cultivated using ancient farming traditions.",
    origin: "Bolivian Andes",
    benefits: ["Complete protein source", "High in fiber", "Gluten-free"],
    ingredients: "100% Organic Royal Quinoa",
    storage: "Store in a cool, dry place. Use within 6 months of opening.",
    farmerStory: "Cultivated at 12,000 feet by indigenous Aymara farmers using traditional methods.",
  },
  {
    id: "dried-figs",
    name: "Sun-Dried Turkish Figs",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1601379760883-1bb497c558e0?w=600&q=80",
    category: "Dried Goods",
    badges: ["Farm Fresh", "No Sugar Added"],
    description: "Plump, honey-sweet figs, naturally sun-dried on the Aegean coast. A taste of Mediterranean tradition.",
    origin: "Izmir, Turkey",
    benefits: ["Rich in fiber", "Natural energy boost", "Source of minerals"],
    ingredients: "100% Sun-Dried Figs",
    storage: "Refrigerate after opening. Best consumed within 3 months.",
    farmerStory: "The Yilmaz family has been drying figs under the Aegean sun for over 80 years.",
  },
  {
    id: "raw-honey",
    name: "Wild Forest Raw Honey",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    category: "Artisanal",
    badges: ["Raw", "Organic"],
    description: "Unfiltered, unpasteurized honey from wild forest bees. Rich, complex, and bursting with natural enzymes.",
    origin: "Black Forest, Germany",
    benefits: ["Natural energy source", "Supports immune system", "Raw and unprocessed"],
    ingredients: "100% Raw Wild Forest Honey",
    storage: "Store at room temperature. Crystallization is natural.",
    farmerStory: "Our beekeepers maintain wild hives deep in the Black Forest, following sustainable practices.",
  },
  {
    id: "cardamom-pods",
    name: "Green Cardamom Pods",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80",
    category: "Spices",
    badges: ["Premium", "Hand-Selected"],
    description: "The 'Queen of Spices'. Intensely aromatic green cardamom, hand-picked from the Western Ghats.",
    origin: "Western Ghats, India",
    benefits: ["Aids digestion", "Freshens breath", "Rich in antioxidants"],
    ingredients: "100% Green Cardamom Pods (Elettaria cardamomum)",
    storage: "Store whole pods in an airtight container. Grind as needed.",
    farmerStory: "Harvested by tribal communities in the misty forests of the Western Ghats.",
  },
  {
    id: "chamomile-flowers",
    name: "Egyptian Chamomile",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=600&q=80",
    category: "Herbs",
    badges: ["Organic", "Whole Flowers"],
    description: "Whole chamomile flowers from the Nile Delta. Golden, fragrant, and perfect for soothing evening teas.",
    origin: "Nile Delta, Egypt",
    benefits: ["Promotes calm", "Supports sleep", "Gentle digestive aid"],
    ingredients: "100% Whole Chamomile Flowers (Matricaria chamomilla)",
    storage: "Keep in a dark, cool place. Best used within 1 year.",
    farmerStory: "Cultivated along the fertile banks of the Nile using traditional Egyptian farming methods.",
  },
];

export const categories = [
  {
    name: "Spices",
    icon: "🌿",
    description: "Aromatic treasures from around the world",
    href: "/shop?category=spices",
  },
  {
    name: "Herbs",
    icon: "🌱",
    description: "Fresh-dried botanical delights",
    href: "/shop?category=herbs",
  },
  {
    name: "Grains",
    icon: "🌾",
    description: "Ancient grains, modern nutrition",
    href: "/shop?category=grains",
  },
  {
    name: "Dried Goods",
    icon: "🍇",
    description: "Sun-kissed fruits and more",
    href: "/shop?category=dried-goods",
  },
  {
    name: "Artisanal",
    icon: "🍯",
    description: "Handcrafted farm specialties",
    href: "/shop?category=artisanal",
  },
];
