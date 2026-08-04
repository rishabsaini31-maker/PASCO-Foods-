'use client';

import Image from 'next/image';
import FadeUp from './FadeUp';
import { BUNDLES } from '@/lib/constants';

export default function FeaturedBundles() {
  return (
    <section className="section-spacing bg-white" aria-labelledby="bundles-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Value Packs
            </span>
            <h2
              id="bundles-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              Featured Bundles
            </h2>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              Curated taster packs and bundle deals to help you explore our range.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {BUNDLES.map((bundle, i) => (
            <FadeUp key={bundle.title} delay={i * 100}>
              <div className="group bg-white border border-[#E5E2DB] rounded-xl overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                <div className="img-zoom aspect-square relative">
                  <Image
                    src={bundle.image}
                    alt={bundle.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors">
                    {bundle.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#6B6B6B]">
                    {bundle.subtitle}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#9C3A28]">
                      {bundle.price}
                    </span>
                    <button
                      onClick={() => { window.dispatchEvent(new CustomEvent('pasco:cart-add')); alert(`${bundle.title} bundle added to cart!`); }}
                      className="inline-flex items-center justify-center h-10 px-5 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-xs font-semibold rounded-lg transition-colors tracking-wide"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
