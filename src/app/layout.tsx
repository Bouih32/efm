import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const sairaSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FurniShop",
  description: "Creative Home Simpify your Furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sairaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
