import React from "react";
import { Imperial_Script, Red_Hat_Display } from "next/font/google";
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

const BlogSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center sm:my-24 my-10 sm:px-8 px-4">
        <h2
          className={`${imperialScript.className} font-semibold sm:text-8xl text-6xl text-black`}
        >
          Blogs
        </h2>
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
                className={`${red_hat_display.className} sm:text-4xl text-xl font-medium text-primary text-center`}
              >
                {item.title}
              </h2>
              <p className="sm:text-base text-xs text-black text-justify sm:leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
