import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <div className="max-w-[1024px] mx-auto px-4 mt-4 lg:px-0">
      <div>
        <h1 className="text-[30px] font-bold mb-8 text-center">ABOUT ME</h1>
        <p className="text-lg leading-relaxed mb-8">
          I'm <span className="text-blue-500">Oghogho Marcus</span>, a passionate frontend developer with a keen eye for design and a knack for creating engaging user experiences. I studied Physics with Electronics, which has provided me with a strong analytical background and problem-solving skills.
          <br />
          <br />
          Having worked in various capacities as a frontend developer, I have utilized technologies like <span className="font-semibold">JavaScript, CSS, ReactJS</span> (JavaScript framework), <span className="font-semibold">Tailwind CSS</span> (CSS framework), and <span className="font-semibold">Bootstrap</span>.
          <br />
          <br />
          Apart from coding, I also love to engage in other activities like:
        </p>
        <ul className="list-disc list-inside ml-6 space-y-2 text-lg">
          <li>Playing Games</li>
          <li>Playing Table Tennis</li>
          <li>Traveling</li>
        </ul>
      </div>
      <div className="mt-[140px]">
        <h1 className="text-[30px] font-bold mb-8 text-center">SKILLS</h1>
        <div className="grid grid-cols-3 md:flex justify-center gap-8">
          <FaHtml5 size={100} className="border p-4 shadow-lg rounded-md text-red-500 hover:text-red-600 transition-colors duration-300" />
          <FaCss3Alt size={100} className="border p-4 shadow-lg rounded-md text-blue-500 hover:text-blue-600 transition-colors duration-300" />
          <FaBootstrap size={100} className="border p-4 shadow-lg rounded-md text-purple-500 hover:text-purple-600 transition-colors duration-300" />
          <IoLogoJavascript size={100} className="border p-4 shadow-lg rounded-md text-yellow-500 hover:text-yellow-600 transition-colors duration-300" />
          <FaReact size={100} className="border p-4 shadow-lg rounded-md text-blue-400 hover:text-blue-500 transition-colors duration-300" />
          <RiTailwindCssFill size={100} className="border p-4 shadow-lg rounded-md text-teal-500 hover:text-teal-600 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default About;
