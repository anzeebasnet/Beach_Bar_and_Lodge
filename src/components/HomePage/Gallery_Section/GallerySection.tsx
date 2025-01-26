"use client";

import Image from "next/image";
import React from "react";

const GallerySection = () => {
  const [activeImage, setActiveImage] = React.useState("");

  return (
    <div className="xl:px-20 lg:px-10 px-6">
      {activeImage ? (
        <div className="z-[120] fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
          <div className=" bg-white relative border-4 border-white rounded shadow-lg lg:w-[30vw] sm:w-[50vw] w-[96vw]">
            <Image
              src={activeImage}
              alt="img"
              height={500}
              width={500}
              className={
                "h-full sm:w-full lg:w-full object-contain bg-gray-500/20 aspect-16/9 rounded"
              }
            />
            <button
              onClick={() => {
                setActiveImage("");
              }}
              className="absolute top-2 right-2 bg-white  rounded-full w-10 h-10 font-medium text-xl"
            >
              x
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="grid md:grid-cols-5 grid-cols-1 md:gap-3 md:gap-y-0 gap-y-4 justify-center items-start my-24">
        <div className="col-span-2 md:place-self-end place-self-center">
          <Image
            src={"/assets/images/hotel_view/View/building.jpg"}
            alt="building"
            width={700}
            height={1500}
            onClick={() => {
              setActiveImage("/assets/images/hotel_view/View/building.jpg");
            }}
            className="md:w-[35vw] w-[100vw] md:h-[93vh]"
          />
        </div>
        <div className="flex flex-col gap-3 col-span-3 items-center justify-center">
          <div className="flex sm:flex-row flex-col gap-3 md:place-self-start place-self-center">
            <Image
              src={"/assets/images/hotel_view/View/beach.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage("/assets/images/hotel_view/View/beach.jpg");
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
            <Image
              src={"/assets/images/hotel_view/Dining/dinnerWView.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage(
                  "/assets/images/hotel_view/Dining/dinnerWView.jpg"
                );
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-3 md:place-self-start place-self-center">
            <Image
              src={"/assets/images/hotel_view/View/lakeView.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage("/assets/images/hotel_view/View/lakeView.jpg");
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
            <Image
              src={"/assets/images/hotel_view/View/poolNightView.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage(
                  "/assets/images/hotel_view/View/poolNightView.jpg"
                );
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-3 md:place-self-start place-self-center">
            <Image
              src={"/assets/images/hotel_view/View/frontYardView.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage(
                  "/assets/images/hotel_view/View/frontYardView.jpg"
                );
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
            <Image
              src={"/assets/images/hotel_view/View/frontYard.jpg"}
              alt="wholeView"
              width={400}
              height={400}
              onClick={() => {
                setActiveImage("/assets/images/hotel_view/View/frontYard.jpg");
              }}
              className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
