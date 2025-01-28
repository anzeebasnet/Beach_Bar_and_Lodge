"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Imperial_Script,
  Montserrat,
  Poppins,
  Red_Hat_Display,
} from "next/font/google";
import imagesData from "@/lib/data/images.json";
import { ChevronDown, ChevronLeft, ChevronRight, Copy, X } from "lucide-react";
import DownloadButton from "@/components/Buttons/DownloadButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const imperialScript = Imperial_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const red_hat_display = Red_Hat_Display({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const page = () => {
  const [activeImage, setActiveImage] = React.useState<string>("");
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [totalImages, setTotalImages] = React.useState<number | null>(null);
  const [selectedTab, setSelectedTab] = React.useState<string>("all");

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

  const handleImageClick = (
    image: string,
    index: number,
    totalImages: number
  ) => {
    setActiveImage(image);
    setActiveIndex(index);
    setTotalImages(totalImages);
  };

  const handleCopyImage = async () => {
    if (!activeImage) return;

    try {
      // Fetch the image as a Blob
      const response = await fetch(activeImage);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      const blob = await response.blob();

      // Convert Blob to Data URL
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64DataUrl = reader.result as string;

        // Copy the Data URL to the clipboard
        await navigator.clipboard.writeText(base64DataUrl);
        alert("Image copied to clipboard as a Data URL!");
      };
      reader.readAsDataURL(blob); // Start reading the Blob
    } catch (error) {
      console.error("Failed to copy image:", error);
      alert("Failed to copy image. Please try again.");
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeImage) {
        if (event.key === "ArrowRight") {
          handleNextImage();
        } else if (event.key === "ArrowLeft") {
          handlePrevImage();
        } else if (event.key === "Escape") {
          setActiveImage("");
          setActiveIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener when the component unmounts or activeImage changes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, activeIndex]);

  return (
    <div>
      <div
        className="bg-cover bg-center h-[calc(100vh-4rem)] flex flex-col justify-center items-center "
        style={{
          backgroundImage:
            "url('/assets/images/hotel_view/View/nightView.jpg')",
          // boxShadow: "30px 30px 10px rgb(26, 26, 240)",
        }}
      >
        <h2
          className={`${imperialScript.className} font-semibold sm:text-6xl text-4xl text-white text-center`}
        >
          Capture <br /> Unforgettable Moments <br /> at <br /> Beach Bar &
          Lodge
        </h2>
        <Button
          className={`${red_hat_display.className} mt-8 px-8 py-6 bg-transparent hover:bg-primary text-white border-2 border-white rounded-md text-lg transition-all duration-300`}
        >
          Book Now
        </Button>
      </div>
      <div className="sm:py-12 py-6 2xl:px-32 lg:px-20 sm:px-8 px-4 flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:gap-4 gap-2">
          <h1 className={`${imperialScript.className} custom-h2`}>
            Our Gallery
          </h1>
          <p className={`${montserrat.className} custom-text`}>
            Step into the Serenity of Nature
          </p>
        </div>
        {activeImage ? (
          <div className="z-[120] fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center">
            <div className=" bg-black relative rounded shadow-lg flex flex-col items-center">
              <div className="relative">
                <Image
                  src={activeImage}
                  alt="img"
                  height={500}
                  width={500}
                  className={
                    "h-[100vh] sm:w-[100vw] object-contain bg-black aspect-16/9 rounded"
                  }
                />
                <div className="absolute top-0 bg-black bg-opacity-60 w-full  px-8 py-2 flex justify-between items-center">
                  <div>
                    {activeIndex !== null && totalImages !== null && (
                      <p className="text-base font-medium text-white">
                        {activeIndex + 1} / {totalImages}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 justify-end items-center">
                    <button
                      onClick={handleCopyImage}
                      className="text-gray-400 hover:text-white  hover:bg-gray-600 p-2 rounded-full"
                    >
                      <Copy />
                    </button>
                    <DownloadButton imageUrl={activeImage} />
                    <button
                      onClick={() => {
                        setActiveImage("");
                        setActiveIndex(null);
                      }}
                      className="rounded-full w-10 h-10 font-medium text-xl flex items-center justify-center text-gray-400 hover:text-white  hover:bg-gray-600"
                    >
                      <X className="" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handlePrevImage}
                className="bg-gray-200 absolute top-[50vh] left-10 p-2 rounded-full hover:bg-gray-300 text-black"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="bg-gray-200 absolute top-[50vh] right-10 p-2 rounded-full hover:bg-gray-300"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <Tabs defaultValue="all" className="">
            <TabsList className="bg-white sm:flex hidden font-medium text-xl">
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
              <p>/</p>
              <TabsTrigger
                value="food"
                className="text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:underline data-[state=active]:underline-offset-[12px] hover:underline hover:underline-offset-[12px] "
              >
                Food
              </TabsTrigger>
            </TabsList>
            <Accordion
              type="single"
              collapsible
              className="sm:hidden block mb-6"
            >
              <AccordionItem
                value="item-1"
                className="flex flex-col items-center justify-center h-full border-none"
              >
                <AccordionTrigger
                  iconClassName="text-black"
                  className="border border-gray-300 text-black flex-none capitalize text-lg font-medium text-center px-2 py-1 rounded"
                >
                  {selectedTab}
                </AccordionTrigger>
                <AccordionContent className="h-max max-h-[300px] w-[80vw] overflow-auto p-2 mt-4 bg-muted rounded">
                  <TabsList className="flex flex-col gap-2 bg-muted h-max max-h-[300px] mb-0">
                    <TabsTrigger
                      value="all"
                      onClick={() => setSelectedTab("all")}
                      className="w-full text-base bg-white data-[state=active]:bg-primary data-[state=active]:bg-opacity-80 data-[state=active]:text-white data-[state=active]:shadow-none hover:underline hover:underline-offset-[12px] "
                    >
                      ALL
                    </TabsTrigger>

                    <TabsTrigger
                      value="view"
                      onClick={() => setSelectedTab("view")}
                      className="w-full text-base bg-white data-[state=active]:bg-primary data-[state=active]:bg-opacity-80 data-[state=active]:text-white data-[state=active]:shadow-none hover:underline hover:underline-offset-[12px] "
                    >
                      View
                    </TabsTrigger>
                    <TabsTrigger
                      value="dining"
                      onClick={() => setSelectedTab("dining")}
                      className="w-full text-base bg-white data-[state=active]:bg-primary data-[state=active]:bg-opacity-80 data-[state=active]:text-white data-[state=active]:shadow-none hover:underline hover:underline-offset-[12px] "
                    >
                      Dinner
                    </TabsTrigger>
                    <TabsTrigger
                      value="room"
                      onClick={() => setSelectedTab("room")}
                      className="w-full text-base bg-white data-[state=active]:bg-primary data-[state=active]:bg-opacity-80 data-[state=active]:text-white data-[state=active]:shadow-none hover:underline hover:underline-offset-[12px] "
                    >
                      Rooms
                    </TabsTrigger>
                    <TabsTrigger
                      value="food"
                      onClick={() => setSelectedTab("food")}
                      className="w-full text-base bg-white data-[state=active]:bg-primary data-[state=active]:bg-opacity-80 data-[state=active]:text-white data-[state=active]:shadow-none hover:underline hover:underline-offset-[12px] "
                    >
                      Food
                    </TabsTrigger>
                  </TabsList>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                    onClick={() =>
                      handleImageClick(
                        item,
                        index,
                        imagesData.TotalImages.length
                      )
                    }
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
                    onClick={() =>
                      handleImageClick(item, index, imagesData.View.length)
                    }
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
                    onClick={() =>
                      handleImageClick(item, index, imagesData.Dining.length)
                    }
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
                    onClick={() =>
                      handleImageClick(item, index, imagesData.Room.length)
                    }
                  />
                </div>
              ))}
            </TabsContent>
            <TabsContent
              value="food"
              className="flex flex-wrap gap-1 items-center justify-center"
            >
              {imagesData.Food?.map((item, index) => (
                <div>
                  <Image
                    src={item}
                    alt="image"
                    width={400}
                    height={400}
                    className="w-[20vw] h-[20vw]"
                    onClick={() =>
                      handleImageClick(item, index, imagesData.Food.length)
                    }
                  />
                </div>
              ))}
            </TabsContent>{" "}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
