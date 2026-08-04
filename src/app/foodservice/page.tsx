'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';

const BENEFITS = [
  { title: 'Bulk Supply', description: 'Flexible ordering with competitive wholesale pricing for restaurants, takeaways, and catering businesses.', icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
  { title: 'Consistent Quality', description: 'Every batch is made to the same exacting standards in our UK factory, ensuring your dishes taste the same every time.', icon: '9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z' },
  { title: 'Product Catalogue', description: 'Access our full product catalogue with detailed specifications, allergen information, and ingredient lists.', icon: '19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { title: 'Dedicated Support', description: 'A dedicated account manager to help with orders, product enquiries, and bespoke requirements.', icon: '15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
];

export default function FoodservicePage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Foodservice' }]}>
      {/* Hero */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">For Professionals</span>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Foodservice</h1>
              <p className="mt-6 text-[#6B6B6B] leading-relaxed">
                Our products are trusted by professional kitchens across the UK — from independent curry houses and restaurants to large-scale catering operations. We understand the demands of a busy commercial kitchen and deliver consistent quality in every batch.
              </p>
              <p className="mt-4 text-[#6B6B6B] leading-relaxed">
                Whether you run a restaurant, takeaway, hotel, or catering business, our foodservice team is here to support you with competitive wholesale pricing, flexible delivery options, and dedicated account management.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors">
                  Get in Touch
                </Link>
                <a href="#" onClick={e => { e.preventDefault(); alert('Product catalogue download will be available soon.'); }} className="inline-flex items-center justify-center h-12 px-8 border-2 border-[#1A1A1A] hover:border-[#214E34] hover:text-[#214E34] text-[#1A1A1A] text-sm font-semibold rounded-lg transition-colors">
                  Download Catalogue
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="img-zoom rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&h=600&fit=crop&q=80" alt="Professional kitchen using Pasco products" width={700} height={600} className="w-full h-auto object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Why Partner With Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]">Foodservice Benefits</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b, i) => (
              <FadeUp key={b.title} delay={i * 80}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F8F5EF] text-[#214E34]">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={b.icon} /></svg>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#1A1A1A]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">{b.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#214E34]">
        <div className="container-pasco py-16 md:py-20 text-center">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Ready to Partner With Pasco?</h2>
            <p className="mt-3 text-sm text-[#D4CFC5] max-w-lg mx-auto">Contact our foodservice team today to discuss your requirements and set up a wholesale account.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center justify-center h-12 px-8 bg-[#B88A3B] hover:bg-[#a07a30] text-white text-sm font-semibold rounded-lg transition-colors">
              Contact Foodservice Team
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
}