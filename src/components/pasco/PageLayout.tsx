import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Breadcrumb[];
}

export default function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="bg-[#F8F5EF] border-b border-[#E5E2DB]">
            <div className="container-pasco py-3">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-[#6B6B6B] hover:text-[#214E34] transition-colors">
                  Home
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="#9C9690" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    {crumb.href ? (
                      <Link href={crumb.href} className="text-[#6B6B6B] hover:text-[#214E34] transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-[#1A1A1A] font-medium">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}