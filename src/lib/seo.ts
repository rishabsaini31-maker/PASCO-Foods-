import { COMPANY } from './constants';
import type { Metadata } from 'next';

export const SITE_URL = 'https://www.pascofoods.co.uk';

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: COMPANY.tagline,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Premium Indian cooking sauces, pastes, pickles, chutneys, and condiments made in the UK. Natural ingredients, award-winning recipes, and authentic flavours trusted for over 30 years.',
  keywords: [
    'Pasco Foods',
    'Indian cooking sauces',
    'curry paste',
    'Indian pickles',
    'chutneys',
    'authentic Indian food UK',
    'natural curry sauces',
    'Indian condiments',
    'cooking pastes',
  ],
  authors: [{ name: COMPANY.legalName }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: COMPANY.name,
    title: COMPANY.tagline,
    description:
      'Premium Indian cooking sauces, pastes, pickles, chutneys, and condiments made in the UK with natural ingredients.',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: COMPANY.tagline,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.tagline,
    description:
      'Premium Indian cooking sauces, pastes, pickles, chutneys, and condiments made in the UK.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const HOMEPAGE_METADATA: Metadata = {
  ...DEFAULT_METADATA,
  title: COMPANY.tagline,
  description:
    'Premium Indian cooking sauces, pastes, pickles, and chutneys made in the UK with natural ingredients. Since 1990, authentic flavours trusted by homes and professional kitchens across the UK.',
  openGraph: {
    ...DEFAULT_METADATA.openGraph,
    title: COMPANY.tagline,
    description:
      'Premium Indian cooking sauces, pastes, pickles, and chutneys made in the UK with natural ingredients.',
  },
};
