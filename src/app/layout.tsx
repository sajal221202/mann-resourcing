import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTopButton } from "@/components/back-to-top-button";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from "next/font/google";
import { Logo } from "@/components/ui/logo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mann Resourcing Industries | Indian Export Company",
  description:
    "Mann Resourcing Industries is a private Indian import-export company specializing in handicrafts, furniture, silver, ceramics, and more for global buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}>
        <div className="bg-[#3f6b47] text-white text-center text-xs font-semibold tracking-wide uppercase font-sans py-2">
          DELIVERING QUALITY PRODUCTS AROUND THE WORLD 🌐
        </div>
        <div className="bg-white py-3 shadow-sm">
          <div className="container flex justify-center">
            <Logo className="w-[140px] md:w-[160px] lg:w-[180px]" />
          </div>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
