import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sparken.studio'),
  title: "Sparken Studio | Research-Driven Brand Design for Elite Plastic Surgery Practices",
  description: "Where beauty meets behavioral science. We design luxury brands for plastic surgery practices using evidence-based research. 34% average increase in patient inquiries.",
  keywords: ["plastic surgery branding", "medical practice design", "luxury healthcare branding", "research-driven design", "behavioral science branding"],
  openGraph: {
    title: "Sparken Studio | Research-Driven Brand Design for Plastic Surgery",
    description: "Design Like Vogue, Think Like The Lancet. Evidence-based luxury branding for elite practices.",
    url: "https://sparken.studio",
    siteName: "Sparken Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparken Studio | Research-Driven Brand Design",
    description: "Where beauty meets behavioral science. Luxury branding backed by research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sparken Studio',
    description: 'Research-driven brand design agency for elite plastic surgery practices',
    url: 'https://sparken.studio',
    email: 'hello@sparken.studio',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    priceRange: '$$$',
    serviceType: ['Brand Design', 'Website Development', 'Brand Strategy', 'Research-Driven Design'],
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
