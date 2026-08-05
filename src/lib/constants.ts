import type {
  Images,
  NavLink,
  FooterLink,
  ProductCategoryItem,
  BundleItem,
  TimelineItem,
  Testimonial,
  NewsItem,
  ReasonItem,
  TrustItem,
  CompanyInfo,
  HeroVideoConfig,
  DetailedRecipe,
} from '@/types';

// ─── Image URLs ───────────────────────────────────────────────

export const IMAGES: Images = {
  hero: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=900&fit=crop&q=80',
  heroAlt: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&h=900&fit=crop&q=80',
  welcome: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=800&fit=crop&q=80',
  story: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=700&h=800&fit=crop&q=80',
  categories: {
    sauces: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=500&fit=crop&q=80',
    pastes: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=500&fit=crop&q=80',
    pickles: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=500&fit=crop&q=80',
    chutneys: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=500&fit=crop&q=80',
    condiments: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=500&fit=crop&q=80',
  },
  bundles: [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=400&fit=crop&q=80',
    'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=400&fit=crop&q=80',
  ],
  recipes: [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=80',
    'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&q=80',
  ],
  news: [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=260&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=260&fit=crop&q=80',
  ],
  pages: {
    products: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1200&h=500&fit=crop&q=80',
    recipes: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=500&fit=crop&q=80',
    foodservice: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=500&fit=crop&q=80',
    ourstory: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=1200&h=500&fit=crop&q=80',
    ourbrands: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=1200&h=500&fit=crop&q=80',
    contact: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&h=500&fit=crop&q=80',
  },
};

// ─── Navigation ───────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Foodservice', href: '/foodservice' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Contact', href: '/contact' },
];

// ─── Footer Links ─────────────────────────────────────────────

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Foodservice', href: '/foodservice' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_PRODUCT_LINKS: FooterLink[] = [
  { label: 'Cooking Sauces', href: '/products/cooking-sauces' },
  { label: 'Cooking Pastes', href: '/products/cooking-pastes' },
  { label: 'Pickles', href: '/products/pickles' },
  { label: 'Chutneys', href: '/products/chutneys' },
  { label: 'Condiments', href: '/products/condiments' },
];

export const FOOTER_RECIPE_LINKS: FooterLink[] = [
  { label: 'Hyderabadi Biryani', href: '/recipes/hyderabadi-biryani' },
  { label: 'Methi Chicken', href: '/recipes/methi-chicken' },
  { label: 'Lamb Bhuna Gosht', href: '/recipes/lamb-bhuna-gosht' },
  { label: 'All Recipes', href: '/recipes' },
];

export const FOOTER_SUPPORT_LINKS: FooterLink[] = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Foodservice', href: '/foodservice' },
];

// ─── Hero Video ───────────────────────────────────────────────

export const HERO_VIDEO: HeroVideoConfig = {
  src: '/advertising.mp4',
  title: 'Premium Indian spices and ingredients arranged beautifully',
  description:
    'Natural, authentic Indian flavours trusted by professional kitchens across the UK, now available for your home. Made in Britain with the finest spices and herbs from around the world.',
  ctaText: 'Shop Products',
  ctaHref: '/products',
};

// ─── Hero Content ─────────────────────────────────────────────

export const HERO_CONTENT = {
  badge: 'Established 1990',
  title: 'Authentic Indian Flavours Since 1990',
  primaryCta: { label: 'Shop Products', href: '/products' },
  secondaryCta: { label: 'Our Story', href: '/our-story' },
} as const;

// ─── Product Categories ───────────────────────────────────────

export const CATEGORIES: ProductCategoryItem[] = [
  {
    id: 'cooking-sauces',
    title: 'Cooking Sauces',
    description: 'Crafted with the finest blend of herbs and spices for authentic curry at home.',
    image: IMAGES.categories.sauces,
    href: '/products?category=cooking-sauces',
  },
  {
    id: 'cooking-pastes',
    title: 'Cooking Pastes',
    description: 'Secret family blends perfect as a curry base or marinade for grilling.',
    image: IMAGES.categories.pastes,
    href: '/products?category=cooking-pastes',
  },
  {
    id: 'pickles',
    title: 'Pickles',
    description: 'Made with the freshest fruits and vegetables for the perfect curry accompaniment.',
    image: IMAGES.categories.pickles,
    href: '/products?category=pickles',
  },
  {
    id: 'chutneys',
    title: 'Chutneys',
    description: 'Selected fruits sourced to create that homemade authentic flavour.',
    image: IMAGES.categories.chutneys,
    href: '/products?category=chutneys',
  },
  {
    id: 'condiments',
    title: 'Condiments',
    description: 'Fresh vegetables and herbs to spice up any dish with ease.',
    image: IMAGES.categories.condiments,
    href: '/products?category=condiments',
  },
];

// ─── Bundles ──────────────────────────────────────────────────

export const BUNDLES: BundleItem[] = [
  {
    title: 'Curry in a Hurry',
    subtitle: 'Mild Cooking Sauce Taster Bundle',
    price: '£10.00',
    image: IMAGES.bundles[0],
    href: '/products?bundle=curry-in-a-hurry',
  },
  {
    title: 'BBQ Bundle',
    subtitle: 'Tandoori & Kebab Paste Pack',
    price: '£12.00',
    image: IMAGES.bundles[1],
    href: '/products?bundle=bbq-bundle',
  },
  {
    title: 'Tickle the Pickle',
    subtitle: 'The Perfect Curry Accompaniments',
    price: '£10.00',
    image: IMAGES.bundles[2],
    href: '/products?bundle=tickle-the-pickle',
  },
];

// ─── Timeline ─────────────────────────────────────────────────

export const TIMELINE: TimelineItem[] = [
  { year: '1990', title: 'Family Kitchen', description: 'Our journey began in a family kitchen with four curry pastes supplied to the local curry house.' },
  { year: '1995', title: 'Retail Expansion', description: 'We launched our retail range so everyone could enjoy authentic Indian cooking at home.' },
  { year: '2000', title: 'Natural Products', description: 'After years of development, we created our 100% natural cooking sauce free from additives.' },
  { year: '2005', title: 'Farm Partnerships', description: 'We established our own spice farm plantations in India, partnering directly with farmers.' },
  { year: 'Now', title: 'Award Winning', description: 'Today our award-winning range is trusted by homes and professional kitchens across the UK.' },
];

// ─── Reasons (Why Choose) ─────────────────────────────────────

export const REASONS: ReasonItem[] = [
  {
    title: '100% Natural',
    description: 'Free from additives, preservatives, and artificial ingredients. Pure, honest flavours in every jar.',
  },
  {
    title: 'Family Business',
    description: 'A family-owned company since 1990, built on passion for authentic Indian cuisine and traditional recipes.',
  },
  {
    title: 'Premium Ingredients',
    description: 'We grow our own spices on farm plantations in India, partnering directly with farmers for the finest quality.',
  },
  {
    title: 'Authentic Taste',
    description: 'Recipes rooted in tradition, first created in our family kitchen and perfected over three decades.',
  },
];

// ─── Trust Bar ────────────────────────────────────────────────

export const TRUST_ITEMS: TrustItem[] = [
  { title: 'Made in UK' },
  { title: '30+ Years Experience' },
  { title: 'Natural Ingredients' },
  { title: 'Award Winning Recipes' },
];

// ─── Testimonials ─────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    text: 'I have tried Pasco\'s mango chutney, chilli garlic pickle and hot curry paste. Very authentic Indian taste. The hot curry paste is my favourite now — it gives amazing taste to my curries whether it\'s veg or non-veg.',
    name: 'Mrs. Shinde',
    source: 'Google Review',
  },
  {
    text: 'We have tried the pickles and the spices — they are very tasty. Just like Indian home taste. Really awesome! Thank you Pasco Foods!',
    name: 'Kirti Paik',
    source: 'Google Review',
  },
  {
    text: 'Delicious taste, authentic Indian flavours! I recommend everyone to try Pasco pickles and curry pastes.',
    name: 'Swapnil Khandekar',
    source: 'Google Review',
  },
  {
    text: 'I tried the curry paste and also mixed pickle. Both taste delicious and authentic. Will definitely be ordering again.',
    name: 'Vandana Aparanti',
    source: 'Google Review',
  },
  {
    text: 'Very authentic and superb spices. Now on, I will always have all the Pasco spices in my kitchen.',
    name: 'Abhi Kaninde',
    source: 'Google Review',
  },
];

// ─── News ─────────────────────────────────────────────────────

export const NEWS: NewsItem[] = [
  {
    title: 'DEFRA Factory Visit and Tour',
    excerpt: 'We were delighted to recently host a factory visit and tour for the Department for Environment, Food and Rural Affairs.',
    date: '2024',
    image: IMAGES.news[0],
    href: '/news/defra-factory-visit',
  },
  {
    title: 'Award-Winning Recipes Recognised',
    excerpt: 'Our commitment to natural, authentic flavours has been recognised with multiple industry awards.',
    date: '2024',
    image: IMAGES.news[1],
    href: '/news/awards',
  },
];

// ─── Q&A ────────────────────────────────────────────────

export const QNA_ITEMS = [
  {
    question: 'Are your products suitable for vegetarians and vegans?',
    answer: 'Yes, the majority of our products are vegetarian and vegan-friendly. We clearly label each product with dietary information on the packaging. Our cooking sauces, pastes, pickles, chutneys, and condiments are all free from animal-derived ingredients.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship within the UK only. Free UK delivery is available on orders over £15. We are working on expanding our international shipping in the future — stay tuned for updates.',
  },
  {
    question: 'How long do your products last?',
    answer: 'Our products have a shelf life of 12 months from the date of manufacture when stored in a cool, dry place. Each jar is printed with a best-before date for your convenience.',
  },
  {
    question: 'Are your products free from artificial additives?',
    answer: 'Absolutely. All Pasco products are made with 100% natural ingredients and are free from artificial preservatives, additives, and colourings. We believe in honest, clean labelling so you know exactly what is in every jar.',
  },
  {
    question: 'Can I return a product if I am not satisfied?',
    answer: 'We want you to love every product you buy. If you are not completely satisfied, please contact our customer service team within 30 days of purchase and we will be happy to arrange a replacement or refund.',
  },
  {
    question: 'Do you offer foodservice or wholesale options?',
    answer: 'Yes, we supply our products to restaurants, cafés, and food businesses across the UK. Our foodservice team can create tailored solutions for your business. Get in touch via our contact page or call us on 01942 493220.',
  },
  {
    question: 'Where are your products manufactured?',
    answer: 'All Pasco products are made in our factory in Wigan, Lancashire, UK. We grow our own spices on farm plantations in India and partner directly with farmers to ensure the finest quality ingredients.',
  },
  {
    question: 'How can I place a bulk order?',
    answer: 'For bulk or wholesale orders, please email us at sales@pascofoods.com or call 01942 493220. Our team will be happy to discuss your requirements and provide a quote.',
  },
];

export const RECIPES: DetailedRecipe[] = [
  {
    title: 'Hyderabadi Biryani',
    description: 'Traditionally made using lamb with fragrant basmati rice and Pasco Biryani Paste.',
    time: '50 mins',
    servings: 'Serves 4',
    difficulty: 'Medium',
    image: IMAGES.recipes[0],
    href: '/recipes/hyderabadi-biryani',
    ingredients: [
      '500g lamb, diced',
      '400g basmati rice',
      '3 tbsp Pasco Biryani Paste',
      '2 onions, sliced',
      '4 cardamom pods',
      '2 bay leaves',
      '1 cinnamon stick',
      'Fresh coriander to garnish',
      'Ghee or oil',
    ],
    steps: [
      'Marinate the lamb with Pasco Biryani Paste for at least 30 minutes.',
      'Parboil the basmati rice until 70% cooked, then drain.',
      'In a heavy-bottomed pan, fry the sliced onions until golden brown.',
      'Add the marinated lamb and cook until sealed on all sides.',
      'Layer the parboiled rice over the lamb, add whole spices.',
      'Cover tightly and cook on low heat for 25-30 minutes.',
      'Gently mix before serving, garnish with fresh coriander.',
    ],
  },
  {
    title: 'Methi Chicken',
    description: 'Enhance the flavour of chicken dishes with aromatic fenugreek and Pasco Tikka Masala.',
    time: '50 mins',
    servings: 'Serves 4',
    difficulty: 'Easy',
    image: IMAGES.recipes[1],
    href: '/recipes/methi-chicken',
    ingredients: [
      '600g chicken thighs, boneless',
      '3 tbsp Pasco Tikka Masala Paste',
      '2 tbsp dried fenugreek leaves (kasuri methi)',
      '200ml natural yoghurt',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tsp ginger-garlic paste',
      'Fresh coriander to garnish',
    ],
    steps: [
      'Marinate the chicken in yoghurt and Pasco Tikka Masala Paste for 20 minutes.',
      'Heat oil in a pan and cook the marinated chicken until lightly browned.',
      'Remove chicken and sauté the onion until soft, then add ginger-garlic paste.',
      'Add the chopped tomatoes and cook until they form a thick paste.',
      'Return the chicken to the pan, crumble in the dried fenugreek leaves.',
      'Simmer for 15-20 minutes until the chicken is cooked through.',
      'Serve garnished with fresh coriander alongside rice or naan.',
    ],
  },
  {
    title: 'Lamb Bhuna Gosht',
    description: 'Rich and deeply spiced lamb curry made with Pasco Madras Curry Paste.',
    time: '1 hr 20 mins',
    servings: 'Serves 4',
    difficulty: 'Medium',
    image: IMAGES.recipes[2],
    href: '/recipes/lamb-bhuna-gosht',
    ingredients: [
      '750g lamb shoulder, diced',
      '3 tbsp Pasco Madras Curry Paste',
      '2 large onions, finely sliced',
      '3 tomatoes, chopped',
      '1 tsp cumin seeds',
      '1 tsp garam masala',
      'Fresh chillies to taste',
      'Coriander leaves to garnish',
    ],
    steps: [
      'Heat oil in a large pan and fry the cumin seeds for 30 seconds.',
      'Add the sliced onions and cook until deeply golden brown.',
      'Add the Pasco Madras Curry Paste and stir for 1-2 minutes until fragrant.',
      'Add the diced lamb and sear on all sides until browned.',
      'Add the chopped tomatoes and enough water to cover the meat.',
      'Cover and simmer on low heat for 1 hour until the lamb is tender.',
      'Sprinkle with garam masala and fresh coriander before serving.',
    ],
  },
];

// ─── Company ──────────────────────────────────────────────────

export const COMPANY: CompanyInfo = {
  name: 'Pasco Foods',
  legalName: 'Pasco Foods Limited',
  founded: 1990,
  tagline: 'Authentic Indian Flavours Since 1990',
  address: {
    street: 'Pasco House, Makerfield Way, Ince',
    city: 'Wigan',
    county: 'Lancashire',
    postcode: 'WN2 2PR',
    country: 'UK',
  },
  phone: '01942 493220',
  phoneFull: '+44 (0) 1942 493220',
  email: 'sales@pascofoods.com',
  social: {
    facebook: 'https://www.facebook.com/pascofoods',
    twitter: 'https://twitter.com/pascofoods',
    instagram: 'https://www.instagram.com/pascofoods/',
  },
};
