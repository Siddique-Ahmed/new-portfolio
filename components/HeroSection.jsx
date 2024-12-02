"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
              Hi Im <span className="text-gray-400">SIDDIQUE AHMED</span> a
              Passionate Web Developer <br className="hidden lg:inline-block" />
              <ReactTyped
                strings={[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "ES6",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Firebase",
                  "React Js",
                  "Next Js",
                  "Mongo DB",
                  "Next Auth",
                  "Cloudinary",
                  "React Native",
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                loop
                showCursor
              />
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi Im Siddique Ahmed a passionate web developer exploring the MERN
              stack. I specialize in building user-friendly dynamic applications
              with skills in HTML CSS JavaScript React.js and Next.js. I enjoy
              crafting clean responsive designs using Tailwind CSS and
              Bootstrap. On the back end I work with MongoDB Firebase Next Auth
              and Cloudinary. Currently Im diving into Node.js Express.js and
              React Native to enhance my full-stack development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Download CV
              </button>
              <Link href={"#about"}>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  About Me
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={450}
              height={450}
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
