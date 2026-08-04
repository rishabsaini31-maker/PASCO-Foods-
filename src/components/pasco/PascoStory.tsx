import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { IMAGES, TIMELINE } from '@/lib/constants';

export default function PascoStory() {
  return (
    <section className="section-spacing bg-[#F8F5EF]" aria-labelledby="story-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Heritage
            </span>
            <h2
              id="story-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              The Pasco Story
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <FadeUp>
            <div className="img-zoom rounded-xl overflow-hidden">
              <Image
                src={IMAGES.story}
                alt="Spice farm plantation in India"
                width={700}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Timeline */}
          <div>
            {TIMELINE.map((item, i) => (
              <FadeUp key={item.year} delay={i * 100}>
                <div className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#214E34] mt-1.5 shrink-0" />
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-[#D4CFC5] mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <span className="text-sm font-semibold text-[#B88A3B]">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mt-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}

            <FadeUp delay={500}>
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide mt-4"
              >
                Read Our Story
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
