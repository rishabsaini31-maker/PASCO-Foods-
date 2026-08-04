import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { NEWS } from '@/lib/constants';

export default function News() {
  return (
    <section className="section-spacing bg-[#F8F5EF]" aria-labelledby="news-heading">
      <div className="container-pasco">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <FadeUp>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
                Latest News
              </span>
              <h2
                id="news-heading"
                className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
              >
                News &amp; Announcements
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <Link
              href="/news"
              className="shrink-0 text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors inline-flex items-center gap-1"
            >
              View All News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 100}>
              <article className="group bg-white rounded-xl overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="img-zoom aspect-[16/10] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#6B6B6B]">{item.date}</span>
                  <h3 className="mt-1 text-lg font-semibold text-[#1A1A1A] group-hover:text-[#214E34] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-[#214E34] hover:text-[#9C3A28] transition-colors"
                  >
                    Read More
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
