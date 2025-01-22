"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import BookingWidget from "../Booking_Widget/BookingWidget";
// import { VisuallyHidden } from "@/components/ui/visually-hidden";
export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "/rooms", label: "Our Rooms" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-primary text-black">
          <div className="mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              {/* Logo Image */}
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Beach Bar"
                  height={40}
                  width={40}
                  className="h-16 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Book Now Button */}
              <div className="hidden md:block">
                <Button
                  variant="secondary"
                  className="bg-black text-white hover:bg-gray-900"
                >
                  BOOK NOW
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                {" "}
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
                      <SheetTitle className="text-white text-2xl ">
                        Beach and Bar
                      </SheetTitle>
                      {/* <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription> */}
                    </SheetHeader>
                    <div className="flex flex-col space-y-6 mt-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg hover:text-gray-300 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
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
        {/* Booking Widget */}
        <BookingWidget />
      </div>
    </>
  );
}
