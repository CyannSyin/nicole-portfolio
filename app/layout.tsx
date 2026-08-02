import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/");
const description =
  "Building products at the edge of AI. Selected work in AI agents, human-AI interaction, and product strategy.";
const socialImage = new URL(`${basePath}/og.png`, siteUrl).toString();

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Nicole — AI Product Manager",
  description,
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
  openGraph: {
    title: "Nicole — AI Product Manager",
    description,
    type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Building products at the edge of AI." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicole — AI Product Manager",
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
