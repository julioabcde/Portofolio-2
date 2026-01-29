import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julio | Junior Front End Engineer",
  description: "Crafting Pixels into Experiences - Portfolio of Julio, a passionate Junior Front End Engineer specializing in React, TypeScript, Next.js, and Tailwind CSS.",
  keywords: ["Front End Developer", "React", "TypeScript", "Next.js", "Tailwind CSS", "Web Developer", "Portfolio"],
  authors: [{ name: "Julio" }],
  openGraph: {
    title: "Julio | Junior Front End Engineer",
    description: "Crafting Pixels into Experiences - Portfolio showcasing modern web development skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
