"use client";

import { Button } from "@/components/ui/button";
import { Red_Hat_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const red_hat_display = Red_Hat_Display({
  weight: "400",
  subsets: ["latin"],
});

const GallerySection = () => {
  return (
    // <div className="grid md:grid-cols-5 grid-cols-1 justify-center items-start my-24 xl:px-20 lg:px-10 px-6">
    //   <div className="col-span-2 md:place-self-end place-self-center">
    //     <Image
    //       src={"/assets/images/hotel_view/View/building.jpg"}
    //       alt="building"
    //       width={700}
    //       height={1500}
    //       className="md:w-[35vw] w-[100vw] md:h-[90vh]"
    //     />
    //   </div>
    //   <div className="flex flex-col col-span-3 items-center justify-center">
    //     <div className="flex sm:flex-row flex-col md:place-self-start place-self-center">
    //       <Image
    //         src={"/assets/images/hotel_view/View/P1515499.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //       <Image
    //         src={"/assets/images/hotel_view/Dining/dinnerWView.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //     </div>
    //     <div className="flex sm:flex-row flex-col md:place-self-start place-self-center">
    //       <Image
    //         src={"/assets/images/hotel_view/View/relaxingonHammock.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //       <Image
    //         src={"/assets/images/hotel_view/View/balconyView.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //     </div>
    //     <div className="flex sm:flex-row flex-col md:place-self-start place-self-center">
    //       <Image
    //         src={"/assets/images/hotel_view/Dining/dining.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //       <Image
    //         src={"/assets/images/hotel_view/View/lakeView.jpg"}
    //         alt="wholeView"
    //         width={400}
    //         height={400}
    //         className="md:w-[26vw] sm:w-[46vw] w-[95vw] h-full sm:h-[30vh]"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="relative grid grid-cols-3 items-center justify-center md:my-24 my-10 xl:px-16 lg:px-10 px-2">
      <div className="flex flex-col">
        <Image
          src={"/assets/images/hotel_view/View/P1515499.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
        <Image
          src={"/assets/images/hotel_view/Dining/dinnerWView.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
      </div>
      <div className="flex flex-col">
        <Image
          src={"/assets/images/hotel_view/View/relaxingonHammock.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
        <Image
          src={"/assets/images/hotel_view/View/balconyView.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
      </div>
      <div className="flex flex-col">
        <Image
          src={"/assets/images/hotel_view/Dining/dining.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
        <Image
          src={"/assets/images/hotel_view/View/lakeView.jpg"}
          alt="wholeView"
          width={400}
          height={400}
          className="w-[32vw] md:h-[43vh] sm:h-[33vh] h-[20vh]"
        />
      </div>
      {/* Link in the lower center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          href={"/gallery"}
          className={`${red_hat_display.className} px-8 py-2 bg-opacity-70 bg-black hover:bg-primary text-white border border-white rounded text-base transition-all duration-300`}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default GallerySection;
