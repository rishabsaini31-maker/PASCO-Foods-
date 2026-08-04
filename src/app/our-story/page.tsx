import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/pasco/PageLayout';
import FadeUp from '@/components/pasco/FadeUp';
import { TIMELINE } from '@/lib/constants';

const FULL_TIMELINE = [
  { year: '1990', title: 'A Family Kitchen', description: 'Our story began in a small family kitchen in Wigan, Lancashire. With a passion for authentic Indian cooking and a desire to share the flavours we grew up with, we created four curry pastes and began supplying them to our local curry house. Word spread quickly, and soon we were delivering to restaurants across the North West of England.' },
  { year: '1995', title: 'The Retail Range', description: 'Demand grew beyond the restaurant trade, and in 1995 we made the decision to launch a retail range. We wanted everyone to be able to enjoy the joys of authentic Indian food and cooking in their own homes. But we noticed something troubling — everything on the market was mass produced and contained saturated fats, E numbers, additives, preservatives, thick starches and far too much water.' },
  { year: '2000', title: '100% Natural Commitment', description: 'From that day we made it our mission to create natural, honest flavours. After five years and countless hours of recipe development and curry making, we created a 100% natural cooking sauce that was free from additives and preservatives, gluten free, and genuinely authentic. It was a breakthrough moment that defined the Pasco brand.' },
  { year: '2005', title: 'Farm Partnerships in India', description: 'But natural products were not enough for us. We decided to go further — to grow our own spices on our own farm plantations in India and work in partnership with farmers. This allowed us to be in control of the best spices and herbs from day one, ensuring quality and authenticity from seed to shelf.' },
  { year: '2010', title: 'Award Recognition', description: 'Our unwavering commitment to quality and natural ingredients began to gain industry recognition. Awards followed for our cooking sauces and pastes, validating the approach we had taken since the very beginning. These accolades drove us to continue innovating and expanding our range.' },
  { year: '2015', title: 'Factory Expansion', description: 'Continued growth meant we needed larger premises. We expanded our Wigan-based factory, investing in modern production equipment while maintaining our handmade approach to spice blending. Our capacity increased, allowing us to serve more homes and foodservice customers across the entire UK.' },
  { year: '2020', title: 'Dhal-icious Launch', description: 'We launched our newest brand, Dhal-icious — a range of nutritious heat-and-eat meals made with chickpeas, lentils, and black-eyed beans. High in protein and fibre, these meals brought plant-based Indian cuisine to a new audience looking for convenient yet wholesome options.' },
  { year: 'Now', title: 'Three Decades of Flavour', description: 'Today, Pasco Foods is a third-generation family business with products trusted by homes and professional kitchens across the UK. Our range encompasses cooking sauces, pastes, pickles, chutneys, and condiments — all made in Britain with the finest natural ingredients and the same passion that started it all in 1990.' },
];

export default function OurStoryPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Our Story' }]}>
      {/* Hero */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">Heritage</span>
              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1A1A1A]">Our Story</h1>
              <p className="mt-6 text-[#6B6B6B] leading-relaxed">
                What began as a family passion project in 1990 has grown into one of the UK&apos;s most trusted names in authentic Indian food products. This is our journey.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="img-zoom rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=700&h=600&fit=crop&q=80" alt="Spice farm in India" width={700} height={600} className="w-full h-auto object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Full Timeline */}
      <section className="section-spacing bg-white">
        <div className="container-pasco max-w-3xl">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">The Journey</h2>
            </div>
          </FadeUp>
          <div>
            {FULL_TIMELINE.map((item, i) => (
              <FadeUp key={item.year} delay={i * 80}>
                <div className="flex gap-8 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#214E34] shrink-0" />
                    {i < FULL_TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-[#E5E2DB] mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-sm font-semibold text-[#B88A3B]">{item.year}</span>
                    <h3 className="mt-1 text-xl font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F5EF] section-spacing">
        <div className="container-pasco">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88A3B]">What Drives Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#1A1A1A]">Our Values</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Authenticity', text: 'Every recipe is rooted in tradition. We stay true to the flavours and techniques passed down through generations of our family.' },
              { title: 'Natural Quality', text: 'We never compromise on ingredients. No additives, no preservatives, no shortcuts — just pure, natural flavours in every jar.' },
              { title: 'Family First', text: 'We treat every customer like family. From our kitchen to yours, we put care and passion into everything we make.' },
            ].map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 text-center">
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{v.title}</h3>
                  <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">{v.text}</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Taste the Difference</h2>
            <p className="mt-3 text-sm text-[#D4CFC5] max-w-lg mx-auto">Experience three decades of authentic Indian flavour. Browse our range and bring Pasco into your kitchen.</p>
            <Link href="/products" className="mt-8 inline-flex items-center justify-center h-12 px-8 bg-white hover:bg-[#F8F5EF] text-[#214E34] text-sm font-semibold rounded-lg transition-colors">
              Shop Our Range
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
}
