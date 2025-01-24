import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MainNav } from "@/components/HomePage/Navbar/Main_Nav";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter", // Use the variable you want
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ScrollArea className="h-[100vh]">
          {/* <MainNav /> */}
          <NextTopLoader color="#fdfefc" showSpinner={false} />
          {children}
        </ScrollArea>
      </body>
    </html>
  );
}
