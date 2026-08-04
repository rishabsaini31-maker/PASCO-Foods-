'use client';

import { useState, useEffect, useCallback } from 'react';
import FadeUp from './FadeUp';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-spacing bg-white" aria-labelledby="testimonials-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              What Our Customers Say
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div
            className="max-w-2xl mx-auto text-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" fill="#B88A3B" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote>
              <p
                key={current}
                className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed min-h-[120px]"
                style={{
                  animation: 'fadeUp 0.5s ease-out',
                }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-[#1A1A1A]">{testimonial.name}</p>
              <p className="text-xs text-[#6B6B6B] mt-0.5">{testimonial.source}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E5E2DB] flex items-center justify-center text-[#6B6B6B] hover:border-[#214E34] hover:text-[#214E34] transition-colors"
                aria-label="Previous testimonial"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-[#214E34]' : 'bg-[#D4CFC5]'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E5E2DB] flex items-center justify-center text-[#6B6B6B] hover:border-[#214E34] hover:text-[#214E34] transition-colors"
                aria-label="Next testimonial"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
