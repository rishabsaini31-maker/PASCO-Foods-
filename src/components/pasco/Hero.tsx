import Link from 'next/link';
import FadeUp from './FadeUp';
import ChatWidget from './ChatWidget';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]" aria-label="Hero">
      <div className="absolute inset-0">
        <video
          src="/advertising.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label="Premium Indian spices and ingredients arranged beautifully"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-pasco relative z-10 py-16 md:py-24 lg:py-0 lg:w-3/5">
        <FadeUp>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B] mb-4">
            Established 1990
          </span>
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-tight">
            Authentic Indian Flavours Since 1990
          </h1>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
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
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white hover:border-[#B88A3B] hover:text-[#B88A3B] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide"
            >
              Our Story
            </Link>
          </div>
        </FadeUp>
      </div>

      <ChatWidget />
    </section>
  );
}
