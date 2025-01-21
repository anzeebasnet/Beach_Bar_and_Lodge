"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import BookingWidget from "../Booking_Widget/BookingWidget";
export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {" "}
      <div className="sticky top-0 z-50">
        <nav className="bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              {/* Logo Image */}
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Rupakot Resort Logo"
                  height={40}
                  width={40}
                  className="h-16 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/rooms"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  OUR ROOMS
                </Link>
                <Link
                  href="/packages"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  PACKAGES
                </Link>
                <Link
                  href="/gallery"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  GALLERY
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  CONTACT US
                </Link>
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

              {/* Mobile Menu Button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#003300] text-white">
                  <div className="flex flex-col space-y-6 mt-6">
                    <Link
                      href="/rooms"
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      OUR ROOMS
                    </Link>
                    <Link
                      href="/packages"
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      PACKAGES
                    </Link>
                    <Link
                      href="/gallery"
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      GALLERY
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      ABOUT US
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      CONTACT US
                    </Link>
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
        </nav>
        {/* Booking Widget */}
        <BookingWidget />
      </div>
    </>
  );
}
