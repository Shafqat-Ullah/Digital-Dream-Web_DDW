import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { asset, site } from "@/lib/site";
import { RevealEngine } from "@/components/reveal-engine";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const title = {
  default: `${site.name} — Websites, Apps & Software`,
  template: `%s | ${site.name}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "software development company",
    "web development agency",
    "mobile app development",
    "UI UX design",
    "AI solutions",
    "SaaS development",
    "e-commerce development",
    "SEO",
    "Next.js development",
    "MERN stack",
    site.name,
  ],
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: site.name,
    title: title.default,
    description: site.description,
    images: [{ url: asset("/opengraph-image"), width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: title.default,
    description: site.description,
    images: [asset("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: asset("/logo.png"), sizes: "500x500", type: "image/png" }],
    apple: [{ url: asset("/logo.png"), sizes: "180x180" }],
  },
  manifest: asset("/manifest.webmanifest"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.domain,
  logo: `${site.domain}/logo.png`,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Peshawar",
    addressCountry: "PK",
  },
  sameAs: [site.social.linkedin, site.social.github],
  description: site.description,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.domain,
  description: site.description,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: site.name, logo: `${site.domain}/logo.png` },
};

export const viewport: Viewport = {
  themeColor: "#2684FC",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          Skip to content
        </a>
        <main id="main">
          <RevealEngine />
          {children}
        </main>
      </body>
    </html>
  );
}