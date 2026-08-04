'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { ALL_RECIPES, RECIPE_CATEGORIES } from '@/lib/data';

export default function RecipesPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? ALL_RECIPES : ALL_RECIPES.filter(r => r.category === active);

  return (
    <PageLayout breadcrumbs={[{ label: 'Recipes' }]}>      {/* Hero */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">From Our Kitchen</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Recipes</h1>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              Discover delicious recipes using Pasco products. From quick weeknight meals to weekend feasts, bring authentic Indian flavours to your table with our easy-to-follow recipes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#E5E2DB]">
        <div className="container-pasco">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {RECIPE_CATEGORIES.map(cat => (
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

      {/* Recipe Grid */}
      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((recipe, i) => (
              <FadeUp key={recipe.id} delay={i * 80}>
                <article className="group bg-white border border-[#E5E2DB] rounded-xl overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                  <div className="img-zoom aspect-[4/3]">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-[#B88A3B] uppercase tracking-wider">{recipe.category}</span>
                    <h3 className="mt-2 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">{recipe.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-[#6B6B6B]">
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
                        {recipe.servings}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                        {recipe.difficulty}
                      </span>
                    </div>
                    <button
                      onClick={() => alert(`Full recipe for "${recipe.title}" coming soon.`)}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors"
                    >
                      View Recipe
                      <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#214E34]">
        <div className="container-pasco py-16 md:py-20 text-center">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Have a Recipe to Share?</h2>
            <p className="mt-3 text-sm text-[#D4CFC5] max-w-lg mx-auto">We love seeing how you use Pasco products in your kitchen. Share your creations with us on social media.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.instagram.com/pascofoods/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 bg-[#B88A3B] hover:bg-[#a07a30] text-white text-sm font-semibold rounded-lg transition-colors">
                Follow Us on Instagram
              </a>
              <Link href="/products" className="inline-flex items-center justify-center h-12 px-8 border-2 border-white hover:bg-white hover:text-[#214E34] text-white text-sm font-semibold rounded-lg transition-colors">
                Shop Products
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
}
