"use client";
import { Imperial_Script, Red_Hat_Display } from "next/font/google";
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

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
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
      <section className="relative w-full overflow-hidden h-[75vh]">
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
          <Button className="mt-8 px-8 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md text-lg transition-all duration-300">
            Book Now
          </Button>
        </div>
      </section>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1
          className={`${imperialScript.className} text-[#2C5530] text-5xl md:text-6xl mb-8`}
        >
          {ourStorySection.title}
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto ">
          {ourStorySection.description}
        </p>
      </section>

      {/* At Resort Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl`}
          >
            {atResortSection.title}
          </h2>
          <p className="text-gray-600 mb-8">{atResortSection.description}</p>
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
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl mb-8`}
          >
            {nearbyResortSection.title}
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-16">
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
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl mb-8`}
          >
            {shuttleServiceSection.title}
          </h2>
          <p className="text-gray-600 mb-4">{shuttleServiceSection.subtitle}</p>
          <p className="text-gray-700 max-w-4xl mx-auto">
            {shuttleServiceSection.description}
          </p>
        </div>
      </section>
    </main>
  );
}
