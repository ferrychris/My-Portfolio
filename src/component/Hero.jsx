import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImg from "../assets/HeroImg.png";

const Hero = () => {
  return (
    <section className="max-w-[1024px] mx-auto md:mt-0 px-6 lg:px-0 h-[100vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Oghogho Marcus</span>
          </h1>
          <div className="text-xl md:text-3xl font-bold mb-6 text-gray-300">
            <TypeAnimation
              sequence={["Frontend Developer", 1000, "React Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
                color: "#D1D5DB", // Light gray color
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)", // Subtle shadow
              }}
              repeat={Infinity}
            />
          </div>
          <div className="space-x-4 mt-6">
            <a
              href="/file/MARKCV.pdf"
              download="MARKCV.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Download
            </a>
            <a
              href="mailto:damilolamarcus1@gmail.com"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex md:justify-end  md:mt-0 p-5">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-[80%] max-w-[400px] rounded-lg shadow-xl"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
