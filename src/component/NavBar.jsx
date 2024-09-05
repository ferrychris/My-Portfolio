import React, { useState, useRef, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(null);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  return (
    <div className="bg-gray-800 fixed top-0 left-0 right-0 z-20 shadow-lg">
      <div className="max-w-[1024px] px-4 lg:px-0 py-5 mx-auto">
        <div className="flex justify-between items-center text-white">
          <a href="/" className="text-3xl font-bold font-rubik">Mark</a>

          <ul className="hidden md:flex space-x-8">
            <li><Link to="home" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">About</Link></li>
            <li><Link to="project" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Project</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
          </ul>

          <div onClick={handleClick} className="block md:hidden text-white">
            {nav ? <IoCloseOutline size={40} /> : <IoMenuOutline size={40} />}
          </div>
        </div>
      </div>

      <div
        ref={navRef}
        className={`fixed top-0 left-0 right-0 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="flex justify-end p-4">
          <div onClick={handleClick}>
            <IoCloseOutline size={40} />
          </div>
        </div>
        <ul className="ml-5 space-y-6 pt-20">
          <li><Link to="home" smooth={true} duration={500} onClick={handleClick} className="text-2xl hover:text-blue-400 cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={handleClick} className="text-2xl hover:text-blue-400 cursor-pointer">About</Link></li>
          <li><Link to="project" smooth={true} duration={500} onClick={handleClick} className="text-2xl hover:text-blue-400 cursor-pointer">Project</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={handleClick} className="text-2xl hover:text-blue-400 cursor-pointer">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
