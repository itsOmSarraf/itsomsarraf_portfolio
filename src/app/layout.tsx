import type { Metadata } from "next";
import './globals.css'
import CustomCursor from "@/components/CustomeCursor";

export const metadata: Metadata = {
  title: "Om Sarraf | FullStack Developer",
  description: "Om Sarraf has worked with brands across the globe. Web, mobile, AI agents, workflows and everything in between.",
  openGraph: {
    title: "Om Sarraf | FullStack Developer",
    description: "Om Sarraf has worked with brands across the globe. Web, mobile, AI agents, workflows and everything in between.",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Sarraf | FullStack Developer",
    description: "Om Sarraf has worked with brands across the globe. Web, mobile, AI agents, workflows and everything in between.",
    images: ["/opengraph-image.png"],
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
        className={`antialiased bg-gradient-to-b from-transparent to-background`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}