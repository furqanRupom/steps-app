import type { Metadata } from "next";
import { Inter,Sora,Blaka_Hollow,Pacifico,Exo,Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

const urbanist = Urbanist({subsets:['latin'],display:"swap", weight:['400']})

export const metadata: Metadata = {
  title: "Steps | home",
  description: "track your goals for make your day best !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
