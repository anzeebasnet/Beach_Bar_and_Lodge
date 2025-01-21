import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MainNav } from "@/components/HomePage/Navbar/Main_Nav";

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
        <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
          <MainNav />
        </div>
        <ScrollArea className="h-[calc(100vh-60px)] mt-[60px]">
          {children}
        </ScrollArea>
      </body>
    </html>
  );
}
