import { Imperial_Script, Red_Hat_Display } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const travelDetails = [
  { time: "6 Hrs 30 Mins Drive", from: "From Kathmandu" },
  { time: "25 Mins Drive", from: "From Pokhara Airport" },
  { time: "10 Mins Drive", from: "From Lakeside, Pokhara" },
  { time: "7 Hrs Drive", from: "From Kathmandu through Damauli" },
];

const navLinks = [
  { name: "About us", href: "/about" },
  { name: "Our Rooms", href: "/rooms" },
  { name: "Our Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Reach Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/BeachBarLodge" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <main className={`${red_hat_display.className} min-h-screen flex flex-col`}>
      {/* Header Section */}
      <section className="text-center py-4 md:py-8">
        <h2 className={`${imperialScript.className} custom-h2`}>Reach Us</h2>
        <p className="custom-text">Let's Get you to Beach Bar and Lodge</p>
      </section>

      {/* Map and Travel Details Section */}
      <section className="flex-1 relative">
        <div className="w-full h-90 sm:h-[400px] md:h-[500px] bg-gray-100 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.0!2d83.941733!3d28.2263471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995957c8822b001%3A0xfb12ead7e14a35d4!2sThe%20Beach%20Bar%20and%20Lodge!5e0!3m2!1sen!2snp!4v1612447768857!5m2!1sen!2snp&zoom=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Beach Bar and Lodge Map"
            className="rounded-lg"
          ></iframe>

          {/* Travel Time Cards */}
          <div className="absolute hidden md:block top-0 left-0 right-0 md:top-4 md:right-4 md:left-auto flex flex-col gap-3 max-w-full md:max-w-md w-full bg-white/95 md:bg-white/90 p-3 md:p-4 md:rounded-lg shadow-lg">
            {travelDetails.map((detail, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
              >
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    {detail.time}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {detail.from}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto text-xs md:text-sm"
                >
                  VIEW ROUTE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-white py-6 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start md:items-center">
            {/* Logo and Description */}
            <div className="space-y-4 mt-4">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Beach Bar and Lodge Logo"
                width={100}
                height={50}
              />
              <p className="text-xs md:text-sm opacity-80 max-w-xl">
                The Beach Bar and Lodge is a serene lakeside retreat nestled on
                the picturesque shores of Fewa Lake in Pokhara. Just a short
                10-minute drive from Lakeside and 25 minutes from Pokhara
                Airport, this lodge offers breathtaking views of the tranquil
                lake and surrounding hills. Guests can enjoy a vibrant bar,
                delicious cuisine, and a relaxing ambiance perfect for unwinding
                after a day of exploration. With its warm hospitality, cozy
                accommodations, and easy access to water activities and hiking
                trails, the Beach Bar and Lodge promises an unforgettable
                experience in the heart of nature.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-2 sm:flex sm:justify-end gap-4 sm:gap-6 text-xs md:text-sm">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-gray-300 block sm:inline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-6 md:mt-8 pt-4 border-t border-white/20 text-center text-xs md:text-sm opacity-60">
            © 2025 Beach and Bar Lodge Pvt. Ltd.
          </div>
        </div>
      </footer>
    </main>
  );
}
