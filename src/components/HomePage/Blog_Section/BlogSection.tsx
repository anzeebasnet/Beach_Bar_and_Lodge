"use client";
import React, { useState } from "react";
import { Imperial_Script, Montserrat, Red_Hat_Display } from "next/font/google";
import blogs from "../../../lib/data/blogs.json";
import Image from "next/image";
import { BlogType } from "../../../../types/types";

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

const BlogSection = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center sm:my-24 my-10 sm:mt-10 mt-6 sm:px-8 px-4">
        <h2 className={`${imperialScript.className} custom-h2`}>Blogs</h2>
        <div className="lg:w-[50vw] md:w-[60vw] w-full flex flex-col md:gap-10 sm:gap-6 gap-4">
          {blogs?.map((item: BlogType) => (
            <div
              key={item.id}
              className="flex flex-col sm:gap-6 gap-3 shadow-sm shadow-gray-500 sm:p-8 p-4 rounded"
            >
              <Image
                src={item.image}
                alt="blog image"
                width={400}
                height={400}
                className="rounded w-full"
              />
              <h2
                className={`${montserrat.className} sm:text-4xl text-xl font-medium text-primary text-center`}
              >
                {item.title}
              </h2>
              <p
                className={`${red_hat_display.className} custom-paragraph leading-7`}
              >
                {expanded[item.id]
                  ? item.desc
                  : `${item.desc.substring(0, 185)}... `}
                <button
                  className="text-blue-500 font-medium hover:underline"
                  onClick={() => toggleExpand(item.id)}
                >
                  {expanded[item.id] ? "View Less" : "View More"}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
