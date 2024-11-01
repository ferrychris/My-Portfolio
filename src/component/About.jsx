import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className=" max-w-[1024px] mx-auto px-4 pt-56 md:pt-0  mt-4  lg:px-0" >
      <div>
        <h1 className="text-[30px] font-bold mb-8 text-center">ABOUT ME</h1>
        <p className="text-lg leading-relaxed mb-8 text-justify">
          I am a passionate frontend developer skilled in building responsive,
          user-friendly websites with ReactJS, Tailwind CSS, HTML, JavaScript,
          and Redux. My expertise includes creating visually appealing and
          functional interfaces that work seamlessly across devices.
          <br /> <br />
          I focus on clean, efficient code to deliver excellent user
          experiences. With ReactJS, I build dynamic applications, while
          Tailwind CSS allows for custom, responsive designs. I also manage
          state and complex UI logic with Redux to ensure scalability and
          maintainability.
          <br />
          <br />
          I’m a certified full-stack developer, accurate
          knowledge of Node.js, Express, and MySQL for backend development. I’m
          eager to tackle new challenges and create end-to-end solutions that
          meet modern web standards.
        </p>
      </div>
      <div className="mt-[140px]">
        <h1 className="text-[30px] font-bold mb-8 text-center">SKILLS</h1>
        <div className="grid grid-cols-3 md:flex justify-center gap-8">
          <FaHtml5
            size={100}
            className="border p-4 shadow-lg rounded-md text-red-500 hover:text-red-600 transition-colors duration-300"
          />
          <FaCss3Alt
            size={100}
            className="border p-4 shadow-lg rounded-md text-blue-500 hover:text-blue-600 transition-colors duration-300"
          />
          <FaBootstrap
            size={100}
            className="border p-4 shadow-lg rounded-md text-purple-500 hover:text-purple-600 transition-colors duration-300"
          />
          <IoLogoJavascript
            size={100}
            className="border p-4 shadow-lg rounded-md text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
          />
          <FaReact
            size={100}
            className="border p-4 shadow-lg rounded-md text-blue-400 hover:text-blue-500 transition-colors duration-300"
          />
          <RiTailwindCssFill
            size={100}
            className="border p-4 shadow-lg rounded-md text-teal-500 hover:text-teal-600 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
