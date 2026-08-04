export const IMAGES = {
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

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Foodservice', href: '/foodservice' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Full Product Catalogue (from pascofoods.co.uk) ─── */

export interface Product {
  id: string;
  name: string;
  category: 'cooking-sauces' | 'cooking-pastes' | 'pickles' | 'chutneys' | 'condiments';
  description: string;
  price: string;
  heatLevel?: 'Mild' | 'Medium' | 'Hot';
}

export const ALL_PRODUCTS: Product[] = [
  // ── Cooking Sauces ──
  { id: 'goanese-vindaloo', name: 'Goanese Vindaloo', category: 'cooking-sauces', description: 'A fiery and tangy curry sauce inspired by the vibrant flavours of Goa, blending roasted spices with vinegar and garlic for an authentic vindaloo experience.', price: '£2.49', heatLevel: 'Hot' },
  { id: 'rajastani-jalfrezi', name: 'Rajastani Jalfrezi', category: 'cooking-sauces', description: 'A colourful, stir-fry style curry sauce from the royal kitchens of Rajasthan, packed with capsicum, onions, and aromatic spices.', price: '£2.49', heatLevel: 'Medium' },
  { id: 'punjabi-butter-chicken', name: 'Punjabi Butter Chicken', category: 'cooking-sauces', description: 'A rich, creamy tomato-based sauce with butter and aromatic spices, recreating the iconic taste of Punjab\'s most beloved curry.', price: '£2.49', heatLevel: 'Mild' },
  { id: 'navratan-korma', name: 'Navratan Korma', category: 'cooking-sauces', description: 'A mild, creamy curry sauce with a delicate blend of nine gems — mixed vegetables, fruits, and nuts in a luxurious sauce base.', price: '£2.49', heatLevel: 'Mild' },
  { id: 'delhi-tikka-masala', name: 'Delhi Tikka Masala', category: 'cooking-sauces', description: 'A smooth, spiced tomato-cream sauce inspired by the bustling streets of Delhi, perfect for marinated meats and paneer.', price: '£2.49', heatLevel: 'Medium' },

  // ── Cooking Pastes ──
  { id: 'tandoori-marinade-paste', name: 'Tandoori Marinade Paste', category: 'cooking-pastes', description: 'A vibrant red marinade paste with traditional tandoori spices, ideal for grilling, barbecuing, or oven-baking meats and vegetables.', price: '£2.29' },
  { id: 'kashmiri-masala-paste', name: 'Kashmiri Masala Paste', category: 'cooking-pastes', description: 'A fragrant, mildly spiced paste inspired by the rich culinary heritage of Kashmir, using whole spices and dried fruits.', price: '£2.29', heatLevel: 'Mild' },
  { id: 'tikka-marinade-paste', name: 'Tikka Marinade Paste', category: 'cooking-pastes', description: 'A classic yoghurt-based marinade paste with garlic, ginger, and aromatic spices for perfect tikka every time.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'kebab-paste', name: 'Kebab Paste', category: 'cooking-pastes', description: 'A bold, herby paste specially blended for making succulent kebabs, whether grilled, pan-fried, or cooked in the oven.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'curry-paste-mild', name: 'Curry Paste (Mild)', category: 'cooking-pastes', description: 'A gentle, family-friendly curry paste with a mellow blend of spices that delivers flavour without overwhelming heat.', price: '£2.29', heatLevel: 'Mild' },
  { id: 'balti-curry-paste', name: 'Balti Curry Paste', category: 'cooking-pastes', description: 'A robust paste that captures the distinctive Balti style of cooking — fast, flavoursome, and served in the traditional karahi.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'biryani-paste', name: 'Biryani Paste', category: 'cooking-pastes', description: 'A fragrant paste with saffron, cardamom, and bay leaves, crafted to layer flavours into the perfect biryani.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'madras-paste', name: 'Madras Paste', category: 'cooking-pastes', description: 'A fiery, south Indian-inspired paste with a bold combination of chilli, black pepper, and mustard seeds for a truly punchy curry.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'curry-paste-hot', name: 'Curry Paste (Hot)', category: 'cooking-pastes', description: 'An intense, full-bodied curry paste for those who crave serious heat alongside deep, complex spice flavours.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'garam-masala', name: 'Garam Masala', category: 'cooking-pastes', description: 'A warm, aromatic blend of ground spices including cinnamon, cardamom, and cloves — the essential foundation of Indian cooking.', price: '£2.29' },
  { id: 'korma-curry-paste', name: 'Korma Curry Paste', category: 'cooking-pastes', description: 'A mild, creamy paste with coconut and almond undertones for a rich, gently spiced korma that the whole family will enjoy.', price: '£2.29', heatLevel: 'Mild' },
  { id: 'rogan-josh-paste', name: 'Rogan Josh Paste', category: 'cooking-pastes', description: 'A deeply aromatic Kashmiri-style paste with a rich, dark sauce base featuring fennel, ginger, and Kashmiri chillies.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'green-masala-paste', name: 'Green Masala Paste', category: 'cooking-pastes', description: 'A fresh, herbaceous paste made with green chillies, coriander, and mint — perfect for creating vibrant green curries and marinades.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'vindaloo-curry-paste', name: 'Vindaloo Curry Paste', category: 'cooking-pastes', description: 'A pungent, tangy paste with a fiery kick of chilli and the sharpness of vinegar, true to the Goan vindaloo tradition.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'tikka-masala-paste', name: 'Tikka Masala Paste', category: 'cooking-pastes', description: 'A versatile paste that delivers the signature creamy, spiced tikka masala flavour — ideal for marinating and cooking.', price: '£2.29', heatLevel: 'Medium' },

  // ── Pickles ──
  { id: 'mango-pickle-hot', name: 'Mango Pickle (Hot)', category: 'pickles', description: 'A fiery mango pickle made with raw mango pieces in a spicy oil base with chilli, fenugreek, and mustard seeds.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'mango-pickle-mild', name: 'Mango Pickle (Mild)', category: 'pickles', description: 'A milder version of the classic mango pickle, retaining all the authentic flavour with a gentler heat.', price: '£2.29', heatLevel: 'Mild' },
  { id: 'lime-pickle-hot', name: 'Lime Pickle (Hot)', category: 'pickles', description: 'A tangy, spicy lime pickle with fresh lime pieces preserved in oil with red chilli and aromatic spices.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'lime-pickle-mild', name: 'Lime Pickle (Mild)', category: 'pickles', description: 'A milder lime pickle that delivers tangy flavour without excessive heat, perfect as an everyday accompaniment.', price: '£2.29', heatLevel: 'Mild' },
  { id: 'chilli-pickle-hot', name: 'Chilli Pickle (Hot)', category: 'pickles', description: 'A bold, fiery pickle made with whole green chillies in a spiced oil base — for those who love serious heat.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'garlic-chilli-pickle', name: 'Garlic and Chilli Pickle', category: 'pickles', description: 'A pungent combination of garlic cloves and green chillies in a spiced oil, delivering a double punch of flavour.', price: '£2.29', heatLevel: 'Hot' },
  { id: 'garlic-pickle', name: 'Garlic Pickle', category: 'pickles', description: 'Whole garlic cloves preserved in a carefully spiced oil with mustard and fenugreek seeds for a rich, aromatic pickle.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'mixed-pickle', name: 'Mixed Pickle', category: 'pickles', description: 'A traditional Indian mixed pickle combining mango, lime, carrot, and cauliflower in a flavoursome spiced oil base.', price: '£2.29', heatLevel: 'Medium' },

  // ── Chutneys ──
  { id: 'hot-mango-chutney', name: 'Hot Mango Chutney', category: 'chutneys', description: 'A spiced mango chutney with a warming kick of chilli, made from selected fruits for that authentic homemade flavour.', price: '£2.29', heatLevel: 'Medium' },
  { id: 'sweet-mango-chutney', name: 'Sweet Mango Chutney', category: 'chutneys', description: 'A lusciously sweet mango chutney made with ripe mangoes, perfect as a condiment or accompaniment to any Indian meal.', price: '£2.29', heatLevel: 'Mild' },

  // ── Condiments ──
  { id: 'garlic-puree', name: 'Garlic Puree', category: 'condiments', description: 'A smooth, ready-to-use garlic puree made from fresh garlic — the perfect time-saving shortcut for any curry or stir-fry.', price: '£1.79' },
  { id: 'ginger-puree', name: 'Ginger Puree', category: 'condiments', description: 'A fresh ginger puree that delivers authentic ginger flavour without the hassle of peeling and grating.', price: '£1.79' },
  { id: 'garlic-ginger-puree', name: 'Garlic & Ginger Puree', category: 'condiments', description: 'A convenient blend of fresh garlic and ginger puree, combining the two most essential ingredients of Indian cooking.', price: '£1.79' },
  { id: 'classic-mint-sauce', name: 'Classic Mint Sauce', category: 'condiments', description: 'A refreshing mint sauce with a tangy edge, ideal as a condiment for curries, kebabs, and grilled meats.', price: '£1.79' },
];

export const CATEGORIES = [
  {
    id: 'cooking-sauces' as const,
    title: 'Cooking Sauces',
    description: 'Crafted with the finest blend of herbs and spices for authentic curry at home.',
    image: IMAGES.categories.sauces,
    href: '/products?category=cooking-sauces',
  },
  {
    id: 'cooking-pastes' as const,
    title: 'Cooking Pastes',
    description: 'Secret family blends perfect as a curry base or marinade for grilling.',
    image: IMAGES.categories.pastes,
    href: '/products?category=cooking-pastes',
  },
  {
    id: 'pickles' as const,
    title: 'Pickles',
    description: 'Made with the freshest fruits and vegetables for the perfect curry accompaniment.',
    image: IMAGES.categories.pickles,
    href: '/products?category=pickles',
  },
  {
    id: 'chutneys' as const,
    title: 'Chutneys',
    description: 'Selected fruits sourced to create that homemade authentic flavour.',
    image: IMAGES.categories.chutneys,
    href: '/products?category=chutneys',
  },
  {
    id: 'condiments' as const,
    title: 'Condiments',
    description: 'Fresh vegetables and herbs to spice up any dish with ease.',
    image: IMAGES.categories.condiments,
    href: '/products?category=condiments',
  },
];

export const BUNDLES = [
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

export const TIMELINE = [
  { year: '1990', title: 'Family Kitchen', description: 'Our journey began in a family kitchen with four curry pastes supplied to the local curry house.' },
  { year: '1995', title: 'Retail Expansion', description: 'We launched our retail range so everyone could enjoy authentic Indian cooking at home.' },
  { year: '2000', title: 'Natural Products', description: 'After years of development, we created our 100% natural cooking sauce free from additives.' },
  { year: '2005', title: 'Farm Partnerships', description: 'We established our own spice farm plantations in India, partnering directly with farmers.' },
  { year: 'Now', title: 'Award Winning', description: 'Today our award-winning range is trusted by homes and professional kitchens across the UK.' },
];

export const RECIPES = [
  {
    title: 'Hyderabadi Biryani',
    description: 'Traditionally made using lamb with fragrant basmati rice and Pasco Biryani Paste.',
    time: '50 mins',
    servings: 'Serves 4',
    difficulty: 'Medium',
    image: IMAGES.recipes[0],
    href: '/recipes/hyderabadi-biryani',
    ingredients: ['500g lamb, diced', '400g basmati rice', '3 tbsp Pasco Biryani Paste', '2 onions, sliced', '4 cardamom pods', '2 bay leaves', '1 cinnamon stick', 'Fresh coriander to garnish', 'Ghee or oil'],
    steps: ['Marinate the lamb with Pasco Biryani Paste for at least 30 minutes.', 'Parboil the basmati rice until 70% cooked, then drain.', 'In a heavy-bottomed pan, fry the sliced onions until golden brown.', 'Add the marinated lamb and cook until sealed on all sides.', 'Layer the parboiled rice over the lamb, add whole spices.', 'Cover tightly and cook on low heat for 25-30 minutes.', 'Gently mix before serving, garnish with fresh coriander.'],
  },
  {
    title: 'Methi Chicken',
    description: 'Enhance the flavour of chicken dishes with aromatic fenugreek and Pasco Tikka Masala.',
    time: '50 mins',
    servings: 'Serves 4',
    difficulty: 'Easy',
    image: IMAGES.recipes[1],
    href: '/recipes/methi-chicken',
    ingredients: ['600g chicken thighs, boneless', '3 tbsp Pasco Tikka Masala Paste', '2 tbsp dried fenugreek leaves (kasuri methi)', '200ml natural yoghurt', '1 onion, finely chopped', '2 tomatoes, chopped', '1 tsp ginger-garlic paste', 'Fresh coriander to garnish'],
    steps: ['Marinate the chicken in yoghurt and Pasco Tikka Masala Paste for 20 minutes.', 'Heat oil in a pan and cook the marinated chicken until lightly browned.', 'Remove chicken and sauté the onion until soft, then add ginger-garlic paste.', 'Add the chopped tomatoes and cook until they form a thick paste.', 'Return the chicken to the pan, crumble in the dried fenugreek leaves.', 'Simmer for 15-20 minutes until the chicken is cooked through.', 'Serve garnished with fresh coriander alongside rice or naan.'],
  },
  {
    title: 'Lamb Bhuna Gosht',
    description: 'Rich and deeply spiced lamb curry made with Pasco Madras Curry Paste.',
    time: '1 hr 20 mins',
    servings: 'Serves 4',
    difficulty: 'Medium',
    image: IMAGES.recipes[2],
    href: '/recipes/lamb-bhuna-gosht',
    ingredients: ['750g lamb shoulder, diced', '3 tbsp Pasco Madras Curry Paste', '2 large onions, finely sliced', '3 tomatoes, chopped', '1 tsp cumin seeds', '1 tsp garam masala', 'Fresh chillies to taste', 'Coriander leaves to garnish'],
    steps: ['Heat oil in a large pan and fry the cumin seeds for 30 seconds.', 'Add the sliced onions and cook until deeply golden brown.', 'Add the Pasco Madras Curry Paste and stir for 1-2 minutes until fragrant.', 'Add the diced lamb and sear on all sides until browned.', 'Add the chopped tomatoes and enough water to cover the meat.', 'Cover and simmer on low heat for 1 hour until the lamb is tender.', 'Sprinkle with garam masala and fresh coriander before serving.'],
  },
];

export const TESTIMONIALS = [
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

export const NEWS = [
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

/* ─── Company Info (from pascofoods.co.uk) ─── */

export const COMPANY = {
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
