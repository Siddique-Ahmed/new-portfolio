import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image width={450} height={450}
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 ml-10 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
              Hi Im <span className="text-gray-400">SIDDIQUE AHMED</span> a
              Passionate Web Developer <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi Im Siddique Ahmed a passionate web developer exploring the
              MERN stack. I specialize in building user-friendly dynamic
              applications with skills in HTML CSS JavaScript React.js and
              Next.js. I enjoy crafting clean responsive designs using Tailwind
              CSS and Bootstrap. On the back end I work with MongoDB Firebase
              Next Auth and Cloudinary. Currently Im diving into Node.js
              Express.js and React Native to enhance my full-stack development
              expertise.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
