import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { BRANDS } from '@/lib/data';

export default function OurBrandsPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Our Brands' }]}>      {/* Hero */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco text-center">
          <FadeUp>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Portfolio</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Our Brands</h1>
            <p className="mt-4 text-[#6B6B6B] max-w-xl mx-auto leading-relaxed">
              From our flagship Pasco range to our newest venture Dhal-icious, every brand shares the same commitment to natural, authentic Indian flavours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="section-spacing bg-white">
        <div className="container-pasco">
          <div className="space-y-16">
            {BRANDS.map((brand, i) => (
              <FadeUp key={brand.name} delay={i * 100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="img-zoom rounded-xl overflow-hidden aspect-[5/4]">
                      <Image src={brand.image} alt={brand.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Brand</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#1A1A1A]">{brand.name}</h2>
                    <p className="mt-2 text-base text-[#9C3A28] font-medium">{brand.tagline}</p>
                    <p className="mt-4 text-[#6B6B6B] leading-relaxed">{brand.description}</p>
                    <Link
                      href="/products"
                      className="mt-6 inline-flex items-center justify-center h-12 px-8 bg-[#214E34] hover:bg-[#1a3f2a] text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
