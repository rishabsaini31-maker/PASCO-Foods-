'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/data';

export default function ProductsPage() {
  const [active, setActive] = useState('All');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const filtered = active === 'All' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    window.dispatchEvent(new CustomEvent('pasco:cart-add'));
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
              Explore our complete range of authentic Indian cooking products, all made in the UK with natural ingredients and free from artificial additives.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
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

      {/* Product Grid */}
      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <p className="text-sm text-[#6B6B6B] mb-6">Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <FadeUp key={product.id} delay={i * 50}>
                <div className="group">
                  <div className="img-zoom aspect-square relative rounded-xl overflow-hidden bg-[#F8F5EF]">
                    <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
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
                        onClick={() => handleAddToCart(product.id)}
                        className={`h-9 px-4 text-xs font-semibold rounded-lg transition-all ${
                          addedToCart === product.id
                            ? 'bg-[#214E34] text-white'
                            : 'border border-[#E5E2DB] text-[#1A1A1A] hover:border-[#214E34] hover:text-[#214E34]'
                        }`}
                      >
                        {addedToCart === product.id ? 'Added' : 'Add to Cart'}
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
    </PageLayout>
  );
}