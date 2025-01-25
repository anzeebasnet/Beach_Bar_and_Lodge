import { Imperial_Script } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main
      className={`${red_hat_display.className} container mx-auto px-4 py-8 max-w-6xl`}
    >
      {/* Subscribe Section */}
      <section className="mb-20">
        <h1
          className={`${imperialScript.className} text-[#2C5530] text-center text-6xl md:text-7xl mb-8`}
        >
          Subscribe
        </h1>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-gray-600 text-lg mb-4">
            Stay ahead with exclusive deals and updates! Be the first to know
            about prime offers and promotions tailored just for you. Enhance
            your experience by subscribing today and never miss out on the
            latest news and benefits.
          </p>
          <p className="text-[#B8860B] text-sm">
            Join us now for unparalleled perks!
          </p>
        </div>

        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First Name"
            className="border-gray-300"
          />
          <Input
            type="text"
            placeholder="Last Name"
            className="border-gray-300"
          />
          <Input
            type="text"
            placeholder="Country Name"
            className="border-gray-300"
          />
          <Input
            type="email"
            placeholder="E-mail Address"
            className="border-gray-300"
          />

          <div className="md:col-span-2 flex justify-center my-4">
            <Link href="/book_now" passHref>
              <div className="border border-gray-300 rounded p-4 w-full max-w-[304px] h-[78px] flex items-center justify-center text-gray-500">
                JOIN NOW
              </div>
            </Link>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <Button className="bg-[#45813C] hover:bg-[#3a6d33] text-white px-8 py-2 rounded">
              Subscribe
            </Button>
          </div>
        </form>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2
          className={`${imperialScript.className} text-[#2C5530] text-6xl md:text-7xl mb-4`}
        >
          Contact Us
        </h2>
        <p className="text-gray-600 text-xl mb-12">Get In Touch With Us</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Resort Contact */}
          <div className="space-y-4">
            <h3 className="text-[#2C5530] text-2xl font-semibold mb-6">
              Beach Lodge
            </h3>
            <p className="flex items-start justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Khapaudi,30007, Pokhara, Nepal, 3007
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              980-2803370
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              thebeachpokhara@gmail.com
            </p>
          </div>

          {/* Sales Office */}
          <div className="space-y-4">
            <h3 className="text-[#2C5530] text-2xl font-semibold mb-6">
              Sales Office
            </h3>
            <p className="flex items-start justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Khapaudi,30007, Pokhara, Nepal, 3007
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              980-2803370
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#45813C] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              thebeachpokhara@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
