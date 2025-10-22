import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/layout/Header.client";
import Footer from "../components/layout/Footer";
import site from "../data/site.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://Estate.elixflare.com"),
  title: {
    default: `${site.org.brandName} — Port Elizabeth Real Estate`,
    template: `%s — ${site.org.brandName}`
  },
  description: "Real-estate sales and rentals across Gqeberha (Port Elizabeth): Summerstrand, Walmer, Humewood, Mill Park and more.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${site.org.brandName} — Port Elizabeth Real Estate`,
    description: "Sales and rentals in Gqeberha (Port Elizabeth).",
    url: "https://Estate.elixflare.com",
    siteName: site.org.brandName,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.org.brandName} — Port Elizabeth Real Estate`,
    description: "Sales and rentals in Gqeberha (Port Elizabeth).",
    images: ["/og-image.png"]
  }
};

export const viewport: Viewport = {
  themeColor: site.theme.brand,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const bodyStyle: React.CSSProperties = {
    // CSS variables from JSON theme
    ['--brand' as any]: site.theme.brand,
    ['--accent' as any]: site.theme.accent,
    ['--bg' as any]: site.theme.bg,
    ['--fg' as any]: site.theme.fg,
    ['--container' as any]: site.layout.containerMax,
    ['--sectionY' as any]: site.layout.sectionY,
  };
  return (
    <html lang={site.locale} dir={site.dir}>
      <body style={bodyStyle as any} className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}