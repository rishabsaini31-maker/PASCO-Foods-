import Header from '@/components/pasco/Header';
import Hero from '@/components/pasco/Hero';
import TrustBar from '@/components/pasco/TrustBar';
import Welcome from '@/components/pasco/Welcome';
import ProductCategories from '@/components/pasco/ProductCategories';
import FeaturedBundles from '@/components/pasco/FeaturedBundles';
import PascoStory from '@/components/pasco/PascoStory';
import WhyChoosePasco from '@/components/pasco/WhyChoosePasco';
import Recipes from '@/components/pasco/Recipes';
import QnaSection from '@/components/pasco/QnaSection';
import Testimonials from '@/components/pasco/Testimonials';
import News from '@/components/pasco/News';
import Newsletter from '@/components/pasco/Newsletter';
import Footer from '@/components/pasco/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Welcome />
        <ProductCategories />
        <FeaturedBundles />
        <PascoStory />
        <WhyChoosePasco />
        <Recipes />
        <QnaSection />
        <Testimonials />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}