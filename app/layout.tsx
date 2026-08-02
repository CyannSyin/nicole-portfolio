import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const baseUrl = new URL(`${protocol}://${host}`);
  const description =
    "Building products at the edge of AI. Selected work in AI agents, human-AI interaction, and product strategy.";

  return {
    metadataBase: baseUrl,
    title: "Nicole — AI Product Manager",
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Nicole — AI Product Manager",
      description,
      type: "website",
      images: [{ url: new URL("/og.png", baseUrl).toString(), width: 1200, height: 630, alt: "Building products at the edge of AI." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nicole — AI Product Manager",
      description,
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

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
