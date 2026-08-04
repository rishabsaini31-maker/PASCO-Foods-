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

export const CATEGORIES = [
  {
    title: 'Cooking Sauces',
    description: 'Crafted with the finest blend of herbs and spices for authentic curry at home.',
    image: IMAGES.categories.sauces,
    href: '/products/cooking-sauces',
  },
  {
    title: 'Cooking Pastes',
    description: 'Secret family blends perfect as a curry base or marinade for grilling.',
    image: IMAGES.categories.pastes,
    href: '/products/cooking-pastes',
  },
  {
    title: 'Pickles',
    description: 'Made with the freshest fruits and vegetables for the perfect curry accompaniment.',
    image: IMAGES.categories.pickles,
    href: '/products/pickles',
  },
  {
    title: 'Chutneys',
    description: 'Selected fruits sourced to create that homemade authentic flavour.',
    image: IMAGES.categories.chutneys,
    href: '/products/chutneys',
  },
  {
    title: 'Condiments',
    description: 'Fresh vegetables and herbs to spice up any dish with ease.',
    image: IMAGES.categories.condiments,
    href: '/products/condiments',
  },
];

export const BUNDLES = [
  {
    title: 'Curry in a Hurry',
    subtitle: 'Mild Cooking Sauce Taster Bundle',
    price: '£10.00',
    image: IMAGES.bundles[0],
    href: '/products/curry-in-a-hurry-bundle',
  },
  {
    title: 'BBQ Bundle',
    subtitle: 'Tandoori & Kebab Paste Pack',
    price: '£12.00',
    image: IMAGES.bundles[1],
    href: '/products/bbq-bundle',
  },
  {
    title: 'Tickle the Pickle',
    subtitle: 'The Perfect Curry Accompaniments',
    price: '£10.00',
    image: IMAGES.bundles[2],
    href: '/products/tickle-the-pickle-bundle',
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
  },
  {
    title: 'Methi Chicken',
    description: 'Enhance the flavour of chicken dishes with aromatic fenugreek and Pasco Tikka Masala.',
    time: '50 mins',
    servings: 'Serves 4',
    difficulty: 'Easy',
    image: IMAGES.recipes[1],
    href: '/recipes/methi-chicken',
  },
  {
    title: 'Lamb Bhuna Gosht',
    description: 'Rich and deeply spiced lamb curry made with Pasco Madras Curry Paste.',
    time: '1 hr 20 mins',
    servings: 'Serves 4',
    difficulty: 'Medium',
    image: IMAGES.recipes[2],
    href: '/recipes/lamb-bhuna-gosht',
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
