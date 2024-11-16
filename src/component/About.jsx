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
         I am a self-motivated full-stack developer with expertise in building responsive, user-centric web applications using ReactJS, JavaScript, Tailwind CSS, Node.js, Express, MySQL, and MongoDB.
          <br /> <br />
         I specialize in crafting visually appealing and functional interfaces with ReactJS and Tailwind CSS, leveraging Redux for efficient state management to ensure scalable and maintainable codebases. On the backend, I use Node.js and Express to develop robust, high-performance applications, while designing efficient databases with MySQL and MongoDB for versatile data solutions.
          <br />
          <br />
          As a quick learner, I am always eager to expand my skills and take on new challenges. My focus is on delivering comprehensive, end-to-end solutions that adhere to modern web standards, ensuring exceptional user experiences and high-quality software development.
          <br/>
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
