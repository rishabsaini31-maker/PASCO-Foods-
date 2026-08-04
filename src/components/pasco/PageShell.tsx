import Header from './Header';
import Footer from './Footer';
import FadeUp from './FadeUp';
import Link from 'next/link';
import { ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageShellProps {
  children: ReactNode;
  title: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage?: string;
  heroOverlay?: boolean;
}

export default function PageShell({ children, title, breadcrumbs, heroImage, heroOverlay = true }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content">
        {/* Page Hero Banner */}
        {heroImage && (
          <section className="relative h-[220px] md:h-[280px] overflow-hidden">
            <div className="absolute inset-0 img-zoom">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            {heroOverlay && <div className="absolute inset-0 bg-[#214E34]/60" />}
            <div className="relative z-10 container-pasco h-full flex flex-col justify-center">
              <FadeUp>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {title}
                </h1>
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
                  {breadcrumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-2">
                      {i > 0 && (
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="text-white/50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      )}
                      {crumb.href ? (
                        <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-white font-medium">{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              </FadeUp>
            </div>
          </section>
        )}

        {children}
      </main>
      <Footer />
    </div>
  );
}
