import type { Metadata } from "next";
import './globals.css'
import CustomCursor from "@/components/CustomeCursor";
import RoamingDuck from "@/components/RoamingDuck";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Om Sarraf | FullStack Developer",
  description: "Om Sarraf is a FullStack Developer from India, currently based in Bangalore. Web, mobile, AI agents, workflows and everything in between.",
  openGraph: {
    title: "Om Sarraf | FullStack Developer",
    description: "Om Sarraf is a FullStack Developer from India, currently based in Bangalore. Web, mobile, AI agents, workflows and everything in between.",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Sarraf | FullStack Developer",
    description: "Om Sarraf is a FullStack Developer from India, currently based in Bangalore. Web, mobile, AI agents, workflows and everything in between.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Om Sarraf",
              "url": "https://itsomsarraf.com",
              "jobTitle": "FullStack Developer",
              "nationality": { "@type": "Country", "name": "India" },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/itsomsarraf",
                "https://in.linkedin.com/in/itsomsarraf",
                "https://x.com/itsOmSarraf_",
                "https://instagram.com/itsomsarraf"
              ],
              "email": "itsomsarraf@gmail.com",
              "knowsAbout": ["Web Development", "Mobile Development", "AI Agents", "Automation"]
            }),
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
          <div className="sr-only" aria-hidden="true">
            Om Sarraf is a FullStack Developer from India, currently based in Bangalore, sometimes in Delhi.
            Contact: itsomsarraf@gmail.com. Available for freelance, contract, and full-time roles.
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
