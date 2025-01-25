import { Imperial_Script, Red_Hat_Display } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${red_hat_display.className} relative w-full overflow-hidden`}
    >
      {/* Hero Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/hotel_view/View/lakeView.jpg')`,
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1
          className={`${imperialScript.className} font-semibold sm:text-8xl text-6xl text-white`}
        >
          Create Unforgettable
          <br />
          Memories
          <br />
          <span
            className={`${imperialScript.className} font-semibold sm:text-8xl text-6xl text-white`}
          >
            at Beach And Bar Lodge
          </span>
        </h1>

        <Button className="mt-8 px-8 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md text-lg transition-all duration-300">
          Book Now
        </Button>
      </div>
      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1
          className={`${imperialScript.className} text-[#2C5530] text-5xl md:text-6xl mb-8`}
        >
          Our Story
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto mb-16">
          Escape to the pristine beauty of the Nilgiri Mountains, green hills,
          and village life. Situated Resort is the perfect place to discover the
          tranquil tales of Nepal's rural life activities. From a private
          veranda overlooking the lakes, feel stress-relieved gentle mountain
          paradise on the hilltop in the middle of nature.
        </p>
      </section>

      {/* At Resort Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl mb-8`}
          >
            At Resort
          </h2>
          <p className="text-gray-600 mb-8">Splendid View of Hills & Lakes</p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
              ].map((src, index) => (
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
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl mb-8`}
          >
            Nearby Resort
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-16">
            Situated Resort is famous for the breathtaking views and far the
            famous hills located around the resort. Situated in the midst of
            nature, our resort resort provides SPA services along with long trek
            routes. Some of the famous routes are the Bright Trek, Sangam, Bird
            View Tower, and so on.
          </p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kUsDZMDyJtLZIB7pOFEGQOaejhyapD.png",
              ].map((src, index) => (
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`${imperialScript.className} text-[#2C5530] text-4xl md:text-5xl mb-8`}
          >
            Shuttle Service
          </h2>
          <p className="text-gray-600 mb-4">Regular transfer service</p>
          <p className="text-gray-700 max-w-4xl mx-auto">
            The resort has recently started its own shuttle service at better
            price for its in-house and valued guests for commute easily to and
            fro from the resort daily. The shuttle service consists of two
            carrier deluxe buses which will be starting from resort to popular
            hotspots in daily basis. For more information, please contact our
            front desk.
          </p>
        </div>
      </section>
    </main>
  );
}
