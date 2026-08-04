import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasco Foods — Authentic Indian Flavours Since 1990",
  description:
    "Premium Indian cooking sauces, pastes, pickles, and chutneys made in the UK. Natural ingredients, award-winning recipes, and authentic flavours trusted for over 30 years.",
  keywords: [
    "Pasco Foods",
    "Indian cooking sauces",
    "curry paste",
    "Indian pickles",
    "chutneys",
    "authentic Indian food UK",
    "natural curry sauces",
    "Indian condiments",
  ],
  authors: [{ name: "Pasco Foods Ltd" }],
  openGraph: {
    title: "Pasco Foods — Authentic Indian Flavours Since 1990",
    description:
      "Premium Indian cooking sauces, pastes, pickles, and chutneys made in the UK with natural ingredients.",
    url: "https://www.pascofoods.co.uk",
    siteName: "Pasco Foods",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasco Foods — Authentic Indian Flavours Since 1990",
    description:
      "Premium Indian cooking sauces, pastes, pickles, and chutneys made in the UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pasco Foods",
              url: "https://www.pascofoods.co.uk",
              logo: "https://www.pascofoods.co.uk/images/pasco-logo-500.png",
              description:
                "Premium Indian cooking sauces, pastes, pickles and chutneys made in the UK since 1990.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pasco House, Makerfield Way, Ince",
                addressLocality: "Wigan",
                addressRegion: "Lancashire",
                postalCode: "WN2 2PR",
                addressCountry: "GB",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 (0) 1942 493220",
                contactType: "customer support",
                areaServed: "GB",
              },
              sameAs: [
                "https://www.facebook.com/pascofoods",
                "https://twitter.com/pascofoods",
                "https://www.instagram.com/pascofoods/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
