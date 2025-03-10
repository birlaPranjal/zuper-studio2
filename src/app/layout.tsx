import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import type React from "react"; // Import React
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ToastProvider } from '@/context/ToastContext'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Zuper Studio",
  description: "Nation Building Through Entrepreneurship",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-black font-sans text-white min-h-screen w-full relative overflow-x-hidden`}
      >
        <ToastProvider>
          <NavBar />
          <main className="w-full overflow-hidden">{children}</main>
          <Footer />
          <WhatsAppButton phoneNumber="+919977990520" />
        </ToastProvider>
      </body>
    </html>
  );
}
