import type { Metadata } from "next";
import './globals.css'
export const metadata: Metadata = {
  title: "Om Sarraf",
  description: "Om Sarraf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
