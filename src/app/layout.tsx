import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NANDI REALTY DUBAI - Premium Real Estate in Dubai, UAE",
  description: "Find your next address in Dubai with NANDI REALTY LLC. Premium properties in Dubai Marina, Downtown Dubai, JBR. Villas, apartments, and townhouses for sale.",
  keywords: "Dubai real estate, Dubai properties, Dubai Marina, Downtown Dubai, JBR, villa, apartment, townhouse, NANDI REALTY Dubai",
  authors: [{ name: "NANDI REALTY LLC" }],
  openGraph: {
    title: "NANDI REALTY DUBAI - Premium Real Estate in Dubai, UAE",
    description: "Find your next address in Dubai with NANDI REALTY LLC. Premium properties across Dubai.",
    type: "website",
    locale: "en_US",
    url: "https://nandirealtydubai.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}