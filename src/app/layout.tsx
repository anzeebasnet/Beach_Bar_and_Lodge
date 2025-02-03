import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MainNav } from "@/components/Navbar/Main_Nav";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/HomePage/Footer/Footer";
import StoreProvider from "./StoreProvider";

const inter = Inter({
  variable: "--font-inter", // Use the variable you want
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beach Bar and Lodge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StoreProvider>
          <ScrollArea className="h-[100vh]">
            <MainNav />
            <NextTopLoader color="#fdfefc" showSpinner={false} />
            {children}
            <Footer />
          </ScrollArea>
        </StoreProvider>
      </body>
    </html>
  );
}
