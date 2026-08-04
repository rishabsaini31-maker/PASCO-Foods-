'use client';

import FadeUp from './FadeUp';

export default function Newsletter() {
  return (
    <section className="bg-[#214E34]" aria-labelledby="newsletter-heading">
      <div className="container-pasco py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
                Stay Connected
              </span>
              <h2
                id="newsletter-heading"
                className="mt-3 text-2xl md:text-3xl font-semibold text-white"
              >
                Join Our Mailing List
              </h2>
              <p className="mt-3 text-sm text-[#D4CFC5] leading-relaxed">
                Sign up to receive the latest Pasco promotions, recipes, and product news delivered to your inbox.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 h-12 px-4 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-[#D4CFC5] focus:outline-none focus:border-[#B88A3B] focus:ring-1 focus:ring-[#B88A3B]"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-[#B88A3B] hover:bg-[#a07a30] text-white text-sm font-semibold rounded-lg transition-colors tracking-wide shrink-0"
              >
                Subscribe
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
