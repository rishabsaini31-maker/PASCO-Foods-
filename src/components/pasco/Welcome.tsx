import Image from 'next/image';
import Link from 'next/link';
import FadeUp from './FadeUp';
import { IMAGES } from '@/lib/constants';

export default function Welcome() {
  return (
    <section className="section-spacing bg-white" aria-labelledby="welcome-heading">
      <div className="container-pasco">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Left */}
          <FadeUp>
            <div className="img-zoom rounded-xl overflow-hidden">
              <Image
                src={IMAGES.welcome}
                alt="Traditional Indian cooking with fresh spices and ingredients"
                width={700}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Content Right */}
          <div>
            <FadeUp>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
                Welcome to Pasco Foods
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2
                id="welcome-heading"
                className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A] leading-tight"
              >
                Traditional Recipes.<br />Modern Convenience.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-[#6B6B6B] leading-relaxed">
                Our products have been created using only the finest blends of herbs and spices
                sourced to create that homemade authentic flavour. Since 1990, we have been
                committed to natural, honest cooking — free from additives, preservatives, and
                artificial ingredients. What began in a family kitchen in Wigan has grown into a
                brand trusted by homes and professional kitchens across the United Kingdom.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-4 text-[#6B6B6B] leading-relaxed">
                We grow our own spices on farm plantations in India and work in partnership with
                farmers, allowing us to be in control of the best spices and herbs from day one.
                Every jar is made with care in our UK factory, ensuring the authentic taste of
                traditional Indian cooking reaches your table.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide mt-8"
              >
                Learn More
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
