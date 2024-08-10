import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#091242] text-white py-8 mt-20">
      <div className="max-w-[1024px] mx-auto px-4 md:px-0 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Oghogho Marcus</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Marcusdam" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/marcus-oghogho-868b03212" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/Marcus05387837" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
