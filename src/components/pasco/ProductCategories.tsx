import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { CATEGORIES } from '@/lib/constants';

export default function ProductCategories() {
  return (
    <section className="section-spacing bg-[#F8F5EF]" aria-labelledby="categories-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Our Range
            </span>
            <h2
              id="categories-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              Product Categories
            </h2>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              Explore our complete range of authentic Indian cooking products, all made in the UK with natural ingredients.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, i) => (
            <FadeUp key={cat.title} delay={i * 80}>
              <Link href={cat.href} className="group block bg-white rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="img-zoom aspect-[4/5] relative">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-semibold text-[#214E34] group-hover:text-[#9C3A28] transition-colors">
                    View Collection
                    <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
