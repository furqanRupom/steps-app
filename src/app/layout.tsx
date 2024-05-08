import type { Metadata } from "next";
import { Inter, Sora, Blaka_Hollow, Pacifico, Exo, Urbanist,Poppins,Roboto,Baloo_Bhai_2,Barlow} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Toaster } from "sonner";
import { NextAuthProvider } from "@/provider/NextAuthProvider";
import { ThemeProvider } from "@/provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const urbanist = Urbanist({ subsets: ['latin'], display: "swap", weight: ['400'] })
const balooBhai = Baloo_Bhai_2({ subsets: ['latin'], display: "swap", weight: ['400','500','600','700','800'] })
const poppins = Poppins({ subsets: ['latin'], display: "swap", weight: ['400','500','600','700'] })
const roboto = Roboto({ subsets: ['latin'], display: "swap", weight: ['400','500','700','900'] })
const barlow = Barlow({ subsets: ['latin'], display: "swap", weight: ['400','500','700','900'] })

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
      <body className={barlow.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextAuthProvider>
            {children}
            <Toaster position="top-center" toastOptions={{
              style: {
                border: '1px solid transparent'
              },
              classNames: {
                toast: 'bg-gray-900',
                title: 'text-red-400',
                icon: 'text-white',
              }
            }} />
          </NextAuthProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
