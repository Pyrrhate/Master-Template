import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { client } from "@/sanity/client";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const defaultTitle = "GCanva | Creative Developer & Digital Craftsman";
  const defaultDescription =
    "Portfolio premium de GCanva - Artiste & Integrateur web. Expertise Next.js, React, Sanity CMS et design systems.";

  const settings = await client.fetch<{
    siteName?: string;
    faviconUrl?: string;
    faviconUpdatedAt?: string;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
    };
  }>(`*[_id == "siteSettings"][0]{
    siteName,
    "faviconUrl": favicon.asset->url,
    "faviconUpdatedAt": favicon.asset->_updatedAt,
    seo {
      metaTitle,
      metaDescription
    }
  }`);

  const title = settings?.siteName || settings?.seo?.metaTitle || defaultTitle;
  const description = settings?.seo?.metaDescription || defaultDescription;
  const faviconUrl = settings?.faviconUrl
    ? `${settings.faviconUrl}?v=${encodeURIComponent(settings.faviconUpdatedAt ?? "1")}`
    : undefined;

  return {
    title,
    description,
    icons: faviconUrl
      ? {
          icon: [{ url: faviconUrl }],
          shortcut: [{ url: faviconUrl }],
          apple: [{ url: faviconUrl }],
        }
      : undefined,
  };
}

export const viewport: Viewport = {
  themeColor: "#0f1219",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
