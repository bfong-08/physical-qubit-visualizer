import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const gabarito = Hanken_Grotesk({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qubit State Visualizer",
  description: "Paired with physical bloch sphere model using Arduino motors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gabarito.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
