// app/layout.tsx (SESUDAH)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahmi Nashruddin | Web Developer Portfolio",
  description:
    "Portofolio pribadi Fahmi Nashruddin sebagai seorang web developer dan digital creator.",
};

// app/layout.tsx (BENAR)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* Baris yang berisi spasi sudah dihapus */}
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
