import type { ReactNode } from 'react';

// ─── Navigation ───────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ─── Footer ───────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export type FooterLinkGroup = Record<string, FooterLink[]>;

// ─── Products ─────────────────────────────────────────────────

export type ProductCategory =
  | 'cooking-sauces'
  | 'cooking-pastes'
  | 'pickles'
  | 'chutneys'
  | 'condiments';

export type HeatLevel = 'Mild' | 'Medium' | 'Hot';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: string;
  heatLevel?: HeatLevel;
}

export interface ProductCategoryItem {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface BundleItem {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  href: string;
}

export interface CatalogueProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  weight: string;
  image: string;
  description: string;
  tags: string[];
}

// ─── Recipes ──────────────────────────────────────────────────

export interface Recipe {
  id: number;
  title: string;
  description: string;
  time: string;
  servings: string;
  difficulty: string;
  category: string;
  image: string;
  href: string;
}

export interface DetailedRecipe {
  title: string;
  description: string;
  time: string;
  servings: string;
  difficulty: string;
  image: string;
  href: string;
  ingredients: string[];
  steps: string[];
}

// ─── Story ────────────────────────────────────────────────────

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// ─── Testimonials ─────────────────────────────────────────────

export interface Testimonial {
  text: string;
  name: string;
  source: string;
}

// ─── News ─────────────────────────────────────────────────────

export interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

// ─── Trust Bar ────────────────────────────────────────────────

export interface TrustItem {
  title: string;
  icon?: ReactNode;
}

// ─── Why Choose ───────────────────────────────────────────────

export interface ReasonItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

// ─── Company ──────────────────────────────────────────────────

export interface CompanyInfo {
  name: string;
  legalName: string;
  founded: number;
  tagline: string;
  address: {
    street: string;
    city: string;
    county: string;
    postcode: string;
    country: string;
  };
  phone: string;
  phoneFull: string;
  email: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

// ─── Brands ───────────────────────────────────────────────────

export interface Brand {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

// ─── Generic ──────────────────────────────────────────────────

export interface Images {
  hero: string;
  heroAlt: string;
  welcome: string;
  story: string;
  categories: Record<string, string>;
  bundles: string[];
  recipes: string[];
  news: string[];
  pages: Record<string, string>;
}

export interface HeroVideoConfig {
  src: string;
  poster?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface CartItem {
  id: string;
  productId: number | string;
  name: string;
  category?: string;
  price: string;
  image: string;
  quantity: number;
  weight?: string;
}
