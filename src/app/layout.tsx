import type { Metadata } from "next";
import './globals.css'
import CustomCursor from "@/components/CustomeCursor";
import RoamingDuck from "@/components/RoamingDuck";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" data-theme="brutalist" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme');if(t&&['brutalist','editorial','neon','luxury'].indexOf(t)!==-1){document.documentElement.setAttribute('data-theme',t)}})();`,
          }}
        />
      </head>
      <body className="antialiased font-body relative">
        <ThemeProvider>
          <div className="relative z-10">
            {children}
          </div>
          <CustomCursor />
          <RoamingDuck />
        </ThemeProvider>
      </body>
    </html>
  );
}
