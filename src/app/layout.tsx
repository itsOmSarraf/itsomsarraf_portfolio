import type { Metadata } from "next";
import './globals.css'
import { Inter } from "next/font/google";
import Resume from "@/components/Resume";
import dynamic from "next/dynamic";

// Dynamically import the CustomCursor component with no SSR
const CustomCursor = dynamic(() => import("@/components/CustomeCursor"), { ssr: false });

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Om Sarraf | FullStack Developer",
  description: "Portfolio of Om Sarraf, a FullStack Developer specializing in modern web applications.",
  keywords: ["developer", "fullstack", "portfolio", "react", "nextjs", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-black text-white min-h-screen">
        <Resume />
        <main>{children}</main>
        <CustomCursor />
      </body>
    </html>
  );
}