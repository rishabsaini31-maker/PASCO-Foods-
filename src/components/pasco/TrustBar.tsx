import FadeUp from './FadeUp';

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: 'Made in UK',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: '30+ Years Experience',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: 'Natural Ingredients',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m4.5-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3.75 3.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    ),
    title: 'Award Winning Recipes',
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#E5E2DB] bg-[#F8F5EF]" aria-label="Trust indicators">
      <div className="container-pasco py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <FadeUp key={item.title} delay={i * 100}>
              <div className="flex flex-col items-center text-center gap-2.5">
                <div className="text-[#1A1A1A] opacity-70">{item.icon}</div>
                <span className="text-sm font-semibold text-[#1A1A1A] tracking-wide">{item.title}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
