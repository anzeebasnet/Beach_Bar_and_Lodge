"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Imperial_Script, Red_Hat_Display } from "next/font/google";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "/rooms", label: "Our Rooms" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <div className={`${red_hat_display.className} sticky top-0 z-50`}>
      <nav className="bg-primary text-black">
        <div className="mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Image */}
            <Link href="/" className="flex items-center ">
              <Image
                src="/assets/images/new_logo/logoTransparent.png"
                alt="Beach Bar"
                height={200}
                width={200}
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center lg:space-x-20 md:space-x-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={true}
                  className="relative text-white hover:text-gray-300 text-sm transition-colors group uppercase"
                >
                  {link.label}
                  {/* Underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Book Now Button */}
            <Link href="/booking">
              <div className="hidden md:block">
                <Button
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-900"
                >
                  BOOK NOW
                </Button>
              </div>
            </Link>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  aria-describedby="modal-description"
                  side="right"
                  className="bg-primary text-white"
                >
                  <SheetHeader>
                    <SheetTitle
                      className={`${imperialScript.className} text-white text-2xl`}
                    >
                      Beach and Bar
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-6 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative text-lg hover:text-gray-300 transition-colors group"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        {/* Underline */}
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ))}
                    <Button
                      variant="secondary"
                      className="bg-black text-white hover:bg-gray-900 w-full"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
