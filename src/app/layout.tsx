import type { Metadata } from "next";
import { Inter,Sora,Blaka_Hollow,Pacifico,Exo,Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Toaster } from "sonner";
import { NextAuthProvider } from "@/provider/NextAuthProvider";

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

        <NextAuthProvider>
        {children}
        <Toaster position="top-center" toastOptions={{
          style:{
            border:'1px solid transparent'
          },
          classNames:{
            toast:'bg-gray-900',
            title:'text-red-400',
            icon:'text-white',
          }
        }} />
        </NextAuthProvider>
      </body>
    </html>
  );
}
