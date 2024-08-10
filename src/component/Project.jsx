import React from 'react';
import cryptoImg from "../assets/crypto.jpeg";
import movieImg from "../assets/movie.jpeg";
import HexCode from "../assets/Hexcode.jpeg";
import MedlabImg from "../assets/medlab.jpeg";

const Project = () => {
  const projects = [
    {
      img: movieImg,
      title: "Movie Search App",
      description: "Movie Search App is an application designed to allow users to search for movies of their choice, fectching data from IMDB API",
      technologies: ["Reactjs", "Tailwind CSS", "Axios"],
      github: "https://github.com/Marcusdam/movie-app",
      live: "#"
    },
    {
      img: cryptoImg,
      title: "Crypto Price Tracking App",
      description: "A Crypto Price Tracking App is an application designed to monitor and display real-time prices of various cryptocurrencies and also some relevant information about a particular cryptocurrency.",
      technologies: ["Reactjs", "Tailwind CSS", "Axios"],
      github: "https://github.com/Marcusdam/crypto-app",
      live: "#"
    },
    {
      img: MedlabImg,
      title: "Medlab Landing Page",
      description: " MedLab landing page is a hospital landing page that tells us information about Medlab hospital ",
      technologies: ["HTML", "Bootstrap"],
      github: "https://github.com/Marcusdam/Medlab",
      live: "https://marcusdam.github.io/Medlab/"
    },
    {
      img: HexCode,
      title: "HEXCODE Color Generator",
      description: "A HexCode Color Generator is a tool designed to generates color codes in the hexadecimal format, which is commonly used in web design and development",
      technologies: ["Reactjs", "Tailwind CSS"],
      github: "https://github.com/Marcusdam/hexcode",
      live: "https://main--frabjous-gelato-05b5d5.netlify.app/"
    },
  ];

  return (
    <div className="max-w-[1024px] mx-auto mt-[140px] px-4 lg:px-0">
      <h1 className="text-[30px] text-center font-bold mb-8">PROJECTS</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-md shadow-lg p-4">
            <img src={project.img} alt={project.title} className="rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <p className="text-lg mb-2 font-semibold">Technologies:</p>
            <ul className="list-disc list-inside mb-4">
              {project.technologies.map((tech, id) => (
                <li key={id}>{tech}</li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
