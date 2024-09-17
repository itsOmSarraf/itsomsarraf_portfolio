import type { Metadata } from "next";
import './globals.css'
import CustomCursor from "@/components/CustomeCursor";

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
        className={`antialiased bg-gradient-to-b from-transparent to-background`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}