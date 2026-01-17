import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
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
    <html lang="en">
      <body
        className={`${gabarito.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
