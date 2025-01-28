import { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Merriweather, Montserrat } from "next/font/google";

interface RoomModalProps {
  room: {
    images: string[];
    icon: string;
    title: string;
    description: string[];
    orientation?: "left" | "right";
    bookLink?: string;
    detailsLink?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const montserrat = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  // const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!room) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        style={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 2rem)",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">
            {room.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {room.images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                      <Image
                        src={image || "/assets/images/rooms/room1.jpg"}
                        alt={`${room.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white/90"
              onClick={scrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h3
              className={`${montserrat.className} text-lg font-semibold text-primary`}
            >
              Price Details
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {/* Price for Two Guests */}
              <div>
                <h4 className="font-semibold text-gray-800">
                  For Two Guests:{" "}
                  <span className="text-blue-600">NPR 6,207</span>
                </h4>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                  <li>Includes taxes and charges</li>
                  <li>Continental breakfast</li>
                  <li>10% off food/drink</li>
                  <li>Parking</li>
                  <li>High-speed internet</li>
                  <li>Total cost to cancel</li>
                  <li>No prepayment needed</li>
                </ul>
              </div>
              {/* Price for One Guest */}
              <div>
                <h4 className="font-semibold text-gray-800">
                  For One Guest:{" "}
                  <span className="text-blue-600">NPR 5,586</span>
                </h4>
                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                  <li>Includes taxes and charges</li>
                  <li>Continental breakfast</li>
                  <li>10% off food/drink</li>
                  <li>Parking</li>
                  <li>High-speed internet</li>
                  <li>Total cost to cancel</li>
                  <li>No prepayment needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
