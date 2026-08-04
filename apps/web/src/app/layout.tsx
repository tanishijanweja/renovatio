import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import "../index.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Renovatio",
  description:
    "Renovatio — an architecture studio crafting minimal, enduring spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
