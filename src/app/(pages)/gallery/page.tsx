"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import imagesData from "@/lib/data/images.json";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = () => {
  const [activeImage, setActiveImage] = React.useState<string>("");
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const handleNextImage = () => {
    if (activeIndex !== null && imagesData.TotalImages) {
      const nextIndex = (activeIndex + 1) % imagesData.TotalImages.length; // Loop back to the first image
      setActiveImage(imagesData.TotalImages[nextIndex]);
      setActiveIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    if (activeIndex !== null && imagesData.TotalImages) {
      const prevIndex =
        (activeIndex - 1 + imagesData.TotalImages.length) %
        imagesData.TotalImages.length; // Loop back to the last image
      setActiveImage(imagesData.TotalImages[prevIndex]);
      setActiveIndex(prevIndex);
    }
  };

  const handleImageClick = (image: string, index: number) => {
    setActiveImage(image);
    setActiveIndex(index);
  };

  return (
    <div className="sm:py-12 py-6 2xl:px-32 lg:px-20 sm:px-8 px-4 flex flex-col gap-10 items-center justify-center">
      <h1
        className={`${poppins.className} sm:text-2xl text-3xl font-extrabold`}
      >
        Gallery
      </h1>
      {activeImage ? (
        <div className="z-[120] fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center">
          <div className=" bg-white relative border-4 border-white rounded shadow-lg flex flex-col items-center">
            <Image
              src={activeImage}
              alt="img"
              height={500}
              width={500}
              className={
                "h-[100vh] sm:w-[100vw] object-contain bg-black aspect-16/9 rounded"
              }
            />
            <button
              onClick={handlePrevImage}
              className="bg-gray-200 absolute top-[50vh] left-10 px-4 py-2 rounded hover:bg-gray-300 text-black"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNextImage}
              className="bg-gray-200 absolute top-[50vh] right-10 px-4 py-2 rounded hover:bg-gray-300"
            >
              <ChevronRight />
            </button>
            <button
              onClick={() => {
                setActiveImage("");
                setActiveIndex(null);
              }}
              className="absolute top-2 right-2 bg-white  rounded-full w-10 h-10 font-medium text-xl flex items-center justify-center"
            >
              <X />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <Tabs defaultValue="all" className="">
          <TabsList className="bg-white  font-medium text-xl flex">
            <TabsTrigger
              value="all"
              className="text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:underline data-[state=active]:underline-offset-[12px] hover:underline hover:underline-offset-[12px] "
            >
              ALL
            </TabsTrigger>
            <p>/</p>
            <TabsTrigger
              value="view"
              className="text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:underline data-[state=active]:underline-offset-[12px] hover:underline hover:underline-offset-[12px] "
            >
              View
            </TabsTrigger>
            <p>/</p>
            <TabsTrigger
              value="dining"
              className="text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:underline data-[state=active]:underline-offset-[12px] hover:underline hover:underline-offset-[12px] "
            >
              Dining
            </TabsTrigger>
            <p>/</p>
            <TabsTrigger
              value="room"
              className="text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:underline data-[state=active]:underline-offset-[12px] hover:underline hover:underline-offset-[12px] "
            >
              Rooms
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="all"
            className="flex flex-wrap gap-1 items-center justify-center"
          >
            {imagesData.TotalImages?.map((item, index) => (
              <div>
                <Image
                  src={item}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-[20vw] h-[20vw]"
                  onClick={() => handleImageClick(item, index)}
                />
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="view"
            className="flex flex-wrap gap-1 items-center justify-center"
          >
            {imagesData.View?.map((item, index) => (
              <div>
                <Image
                  src={item}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-[20vw] h-[20vw]"
                  onClick={() => handleImageClick(item, index)}
                />
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="dining"
            className="flex flex-wrap gap-1 items-center justify-center"
          >
            {imagesData.Dining?.map((item, index) => (
              <div>
                <Image
                  src={item}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-[20vw] h-[20vw]"
                  onClick={() => handleImageClick(item, index)}
                />
              </div>
            ))}
          </TabsContent>{" "}
          <TabsContent
            value="room"
            className="flex flex-wrap gap-1 items-center justify-center"
          >
            {imagesData.Room?.map((item, index) => (
              <div>
                <Image
                  src={item}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-[20vw] h-[20vw]"
                  onClick={() => handleImageClick(item, index)}
                />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
