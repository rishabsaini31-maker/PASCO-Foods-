import FadeUp from './FadeUp';

const REASONS = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: '100% Natural',
    description: 'Free from additives, preservatives, and artificial ingredients. Pure, honest flavours in every jar.',
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 8.63 18.38a.75.75 0 0 0 1.06 0L21.75 8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.73-3.559" />
      </svg>
    ),
    title: 'Family Business',
    description: 'A family-owned company since 1990, built on passion for authentic Indian cuisine and traditional recipes.',
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: 'Premium Ingredients',
    description: 'We grow our own spices on farm plantations in India, partnering directly with farmers for the finest quality.',
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: 'Authentic Taste',
    description: 'Recipes rooted in tradition, first created in our family kitchen and perfected over three decades.',
  },
];

export default function WhyChoosePasco() {
  return (
    <section className="section-spacing bg-white" aria-labelledby="why-heading">
      <div className="container-pasco">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">
              Our Promise
            </span>
            <h2
              id="why-heading"
              className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]"
            >
              Why Choose Pasco
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 80}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F8F5EF] text-[#214E34] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
