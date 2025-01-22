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

interface RoomDetailsModalProps {
  room: {
    id: number;
    title: string;
    images: string[];
    price: number;
    currency: string;
    priceInterval: string;
    description: string;
    amenities: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function RoomDetailsModal({
  room,
  isOpen,
  onClose,
}: RoomDetailsModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  if (!room) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="rounded-lg p-10"
        style={{
          overflowY: "auto",
          height: "calc(100vh - 2rem)",
          maxWidth: "calc(40vw - 2rem)",
        }}
      >
        <DialogHeader>
          <DialogTitle>{room.title}</DialogTitle>
          <DialogDescription>
            ${room.price.toFixed(2)} {room.currency} / {room.priceInterval}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {room.images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                      <Image
                        src={image || "/assets/images/room.jpg"}
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
          <div className="flex justify-center mt-2">
            {room.images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  currentSlide === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 my-4">{room.description}</p>
          <h4 className="font-semibold mb-2">Amenities:</h4>
          <ul className="list-disc list-inside text-sm text-gray-500">
            {room.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
