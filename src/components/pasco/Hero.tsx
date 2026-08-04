import Link from 'next/link';
import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="section-spacing bg-white" aria-label="Hero">
      <div className="container-pasco">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <FadeUp>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B] mb-4">
                Established 1990
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Authentic Indian Flavours Since 1990
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-lg">
                Natural, authentic Indian flavours trusted by professional kitchens across the UK, now available for your home. Made in Britain with the finest spices and herbs from around the world.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide"
                >
                  Shop Products
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center h-12 px-8 border-2 border-[#1A1A1A] hover:border-[#214E34] hover:text-[#214E34] text-[#1A1A1A] text-sm font-semibold rounded-lg transition-colors tracking-wide"
                >
                  Our Story
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right Video */}
          <FadeUp delay={200} className="lg:col-span-3">
            <div className="relative img-zoom rounded-xl overflow-hidden">
              <video
                src="/advertising.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                aria-label="Premium Indian spices and ingredients arranged beautifully"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
