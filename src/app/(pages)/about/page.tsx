"use client";
import { Imperial_Script, Montserrat, Red_Hat_Display } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import aboutData from "@/lib/data/about.json";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const heroData = [
  {
    image: "/assets/images/hotel_view/View/lakeView.jpg",
    title: "Tranquility by the Lake",
  },
  {
    image: "/assets/images/hotel_view/View/beach.jpg",
    title: "Breathtaking Mountain Peaks",
  },
  {
    image: "/assets/images/hotel_view/View/frontYardView.jpg",
    title: "Luxury and Serenity Combined",
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = heroData[currentIndex];
  const {
    heroSection,
    ourStorySection,
    atResortSection,
    nearbyResortSection,
    shuttleServiceSection,
  } = aboutData;

  return (
    <main className={`${red_hat_display.className}`}>
      <section className="relative w-full overflow-hidden h-[calc(100vh-4rem)] ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('${currentHero.image}')`,
          }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            className={`${imperialScript.className} font-semibold sm:text-8xl text-6xl text-white transition-all duration-500`}
          >
            {currentHero.title}
          </h1>
          <Link href={"/booking"} className="custom-button">
            Book Now
          </Link>
        </div>
      </section>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className={`${imperialScript.className} custom-h2`}>
          {ourStorySection.title}
        </h1>
        <p className="custom-paragraph leading-7 max-w-4xl mx-auto ">
          {ourStorySection.description}
        </p>
      </section>

      {/* At Resort Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${imperialScript.className} custom-h2`}>
            {atResortSection.title}
          </h2>
          <p className={`${montserrat.className} custom-text mb-8`}>
            {atResortSection.description}
          </p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {atResortSection.images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Resort view ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Nearby Resort Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${imperialScript.className} custom-h2`}>
            {nearbyResortSection.title}
          </h2>
          <p
            className={`${montserrat.className} custom-text sm:text-base text-xs max-w-4xl mx-auto mb-16`}
          >
            {nearbyResortSection.description}
          </p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {nearbyResortSection.images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Nearby view ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Shuttle Service Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${imperialScript.className} custom-h2`}>
            {shuttleServiceSection.title}
          </h2>
          <p className={`${montserrat.className} custom-text mb-4`}>
            {shuttleServiceSection.subtitle}
          </p>
          <p className="custom-paragraph max-w-4xl mx-auto">
            {shuttleServiceSection.description}
          </p>
        </div>
      </section>
    </main>
  );
}
