import React from "react";
import Slideshow from "./Slideshow";
import Image from "next/image";
import Link from "next/link";
import { RxDimensions } from "react-icons/rx";
import { LiaSnowflake, LiaLandmarkSolid } from "react-icons/lia";
import { GiSwan, GiForkKnifeSpoon } from "react-icons/gi";
import { IoTvOutline } from "react-icons/io5";
import {
  Barlow_Semi_Condensed,
  Merriweather,
  Montserrat,
  Poppins,
  Red_Hat_Display,
} from "next/font/google";

type RoomCardProps = {
  images: string[];
  icon: string;
  title: string;
  description: string[];
  orientation?: "left" | "right";
  onDetailsClick?: () => void;
};

const merriWeather = Merriweather({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const redhatdisplay = Red_Hat_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const barlow = Barlow_Semi_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const RoomCard: React.FC<RoomCardProps> = ({
  images,
  icon,
  title,
  description,
  orientation = "left",
  onDetailsClick,
}) => {
  const isLeft = orientation === "left";

  const features = [
    { icon: <RxDimensions size={20} color="#336634" />, text: "40 m²" },
    {
      icon: <LiaSnowflake size={20} color="#336634" />,
      text: "Air Conditioning",
    },
    { icon: <GiSwan size={20} color="#336634" />, text: "Lake View" },
    {
      icon: <GiForkKnifeSpoon size={20} color="#336634" />,
      text: "Breakfast",
    },
    {
      icon: <LiaLandmarkSolid size={20} color="#336634" />,
      text: "Landmark View",
    },
    {
      icon: <IoTvOutline size={20} color="#336634" />,
      text: "Flat Screen TV",
    },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-2 items-stretch sm:gap-6 gap-2 w-full sm:mb-6">
        {isLeft && (
          <div className="lg:h-full h-[60vh] lg:block hidden">
            <Slideshow images={images} height="100%" />
          </div>
        )}
        <div className="lg:hidden block h-[60vh]">
          <Slideshow images={images} height="100%" />
        </div>
        <div className={`justify-self-${isLeft ? "lg:start" : "lg:end"}`}>
          <Image
            src={icon}
            alt="room icon"
            height={75}
            width={75}
            className={`${
              isLeft ? "lg:justify-self-start" : "lg:justify-self-end"
            }`}
          />
          <h2
            className={`${
              merriWeather.className
            } sm:mt-4 mt-2 sm:text-2xl text-xl font-normal text-primary ${
              isLeft ? "lg:justify-self-start" : "lg:justify-self-end"
            }`}
          >
            {title}
          </h2>
          <div
            className={`${poppins.className} mt-4 text-sm font-medium flex flex-wrap gap-3`}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                {feature.icon} <p>{feature.text}</p>
              </div>
            ))}
          </div>
          <div
            className={`${redhatdisplay.className} ${
              isLeft
                ? "lg:justify-start lg:items-start lg:text-left"
                : "lg:justify-end lg:items-end lg:text-right"
            } custom-paragraph mt-4 flex flex-col items-start justify-start sm:gap-4 gap-2`}
          >
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <div
            className={`flex flex-wrap gap-4 sm:mt-6 mt-4 items-center  ${
              isLeft ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <Link
              href={"/booking"}
              className={`${barlow.className} rounded font-thin sm:text-lg text-base px-8 py-1 bg-text_green hover:bg-primary text-white`}
            >
              Book Now
            </Link>
            <button
              onClick={onDetailsClick}
              className={`${barlow.className} rounded font-thin sm:text-lg text-base px-8 py-1 bg-text_green hover:bg-primary text-white`}
            >
              View Prices
            </button>
          </div>
        </div>
        {!isLeft && (
          <div className="lg:h-full h-[60vh] lg:block hidden">
            <Slideshow images={images} height="100%" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
