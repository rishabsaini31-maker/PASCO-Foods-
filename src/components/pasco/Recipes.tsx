import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { RECIPES } from '@/lib/constants';

export default function Recipes() {
  return (
    <section className="section-spacing bg-[#F8F5EF]" aria-labelledby="recipes-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
                From Our Kitchen
              </span>
              <h2
                id="recipes-heading"
                className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
              >
                Recipes to Inspire
              </h2>
              <p className="mt-3 text-[#6B6B6B] max-w-lg leading-relaxed">
                Make your favourite dishes with Pasco products. Tried and tested recipes from our family kitchen.
              </p>
            </div>
            <Link
              href="/recipes"
              className="shrink-0 text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors inline-flex items-center gap-1"
            >
              View All Recipes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECIPES.map((recipe, i) => (
            <FadeUp key={recipe.title} delay={i * 100}>
              <article className="group bg-white rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="img-zoom aspect-[4/3] relative">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[#6B6B6B]">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                      </svg>
                      {recipe.servings}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      {recipe.difficulty}
                    </span>
                  </div>
                  <Link
                    href={recipe.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors"
                  >
                    View Recipe
                    <svg className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
