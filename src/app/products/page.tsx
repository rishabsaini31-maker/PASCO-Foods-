'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import type { CatalogueProduct } from '@/types';

export default function ProductsPage() {
  const [active, setActive] = useState('All');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const { addToCart } = useCart();

  const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

  const handleAddToCart = (product: CatalogueProduct) => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      weight: product.weight,
    });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <PageLayout breadcrumbs={[{ label: 'Products' }]}>
      {/* Hero Banner */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Our Range</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Products</h1>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              Explore our complete range of authentic Indian cooking products, all made in the UK with natural ingredients and free from artificial additives. From cooking sauces and pastes to pickles, chutneys, and condiments.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-[#E5E2DB] sticky top-16 lg:top-[72px] z-30">
        <div className="container-pasco">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {PRODUCT_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  active === cat
                    ? 'bg-[#214E34] text-white'
                    : 'bg-[#F5F5F5] text-[#6B6B6B] hover:bg-[#E5E2DB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-[#214E34]">
        <div className="container-pasco py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="bg-[#B88A3B] text-white text-xs font-bold px-3 py-1 rounded">SPECIAL OFFER</span>
              <span className="text-white text-sm font-medium">10 for £10 — Mix & Match across our range</span>
            </div>
            <Link href="#products-grid" className="text-[#B88A3B] hover:text-white text-sm font-semibold transition-colors">
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products-grid" className="section-spacing bg-white">
        <div className="container-pasco">
          <p className="text-sm text-[#6B6B6B] mb-6">Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <FadeUp key={product.id} delay={i * 50}>
                <div className="group">
                  <div className="img-zoom aspect-square rounded-xl overflow-hidden bg-[#F8F5EF]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-[#B88A3B] font-medium uppercase tracking-wider">{product.category}</p>
                    <h3 className="mt-1 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors leading-snug">{product.name}</h3>
                    <p className="mt-1.5 text-xs text-[#6B6B6B] line-clamp-2">{product.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold text-[#1A1A1A]">{product.price}</span>
                        <span className="text-xs text-[#6B6B6B] ml-1.5">{product.weight}</span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`h-9 px-4 text-xs font-semibold rounded-lg transition-all ${
                          addedToCart === product.id
                            ? 'bg-[#214E34] text-white'
                            : 'border border-[#E5E2DB] text-[#1A1A1A] hover:border-[#214E34] hover:text-[#214E34]'
                        }`}
                      >
                        {addedToCart === product.id ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-[#F8F5EF] text-[#6B6B6B] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles CTA */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Save More</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]">Product Bundles</h2>
            <p className="mt-4 text-[#6B6B6B] max-w-lg mx-auto leading-relaxed">
              Try our curated bundles — perfect for tasting a range of flavours or stocking up on your favourites at a special price.
            </p>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Curry in a Hurry', desc: 'Mild Cooking Sauce Taster Bundle', price: '£10.00', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop&q=80' },
              { name: 'BBQ Bundle', desc: 'Tandoori & Kebab Paste Pack', price: '£12.00', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=400&fit=crop&q=80' },
              { name: 'Tickle the Pickle', desc: 'The Perfect Curry Accompaniments', price: '£10.00', image: 'https://images.unsplash.com/photo-1545247181-516773cae754?w=400&h=400&fit=crop&q=80' },
            ].map((bundle, i) => (
              <FadeUp key={bundle.name} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                  <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden bg-[#F8F5EF] mb-4">
                    <img src={bundle.image} alt={bundle.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{bundle.name}</h3>
                  <p className="mt-2 text-sm text-[#6B6B6B]">{bundle.desc}</p>
                  <p className="mt-4 text-xl font-semibold text-[#9C3A28]">{bundle.price}</p>
                  <button
                    onClick={() => {
                      addToCart({
                        id: `bundle-${i}`,
                        name: bundle.name,
                        category: bundle.desc,
                        price: bundle.price,
                        image: bundle.image,
                      });
                    }}
                    className="mt-4 h-10 px-6 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
