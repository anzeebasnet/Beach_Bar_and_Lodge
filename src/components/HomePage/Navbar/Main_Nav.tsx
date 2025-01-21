"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
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
                  src="/assets/images/logo.png"
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
        <div className="bg-primary border-t border-gray-700 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-xl">BOOK ONLINE</div>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white p-2 rounded min-w-[200px]">
                  <div className="text-sm text-gray-600">Check-in</div>
                  <div className="font-semibold">21/01/2025</div>
                </div>
                <div className="bg-white p-2 rounded min-w-[200px]">
                  <div className="text-sm text-gray-600">Check-out</div>
                  <div className="font-semibold">22/01/2025</div>
                </div>
                <div className="bg-white p-2 rounded min-w-[200px]">
                  <div className="text-sm text-gray-600">Guests</div>
                  <div className="font-semibold">2 adults, 0 children</div>
                </div>
                <Button className="bg-[#006600] text-white hover:bg-[#005500] min-w-[150px]">
                  FIND ROOM
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
