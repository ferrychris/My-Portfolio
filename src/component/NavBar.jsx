import React, { useState, useRef, useEffect } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

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
        <div className='bg-gray-800 sticky top-0 z-20 shadow-lg'>
            <div className='max-w-[1024px] px-4 lg:px-0 py-5 mx-auto '>
                <div className='flex justify-between items-center text-white'>
                    <h1 className='text-3xl font-bold font-rubik'>Mark</h1>
                    
                    <ul className='hidden md:flex space-x-8'>
                        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400">About</a></li>
                        <li><a href="#project" className="hover:text-blue-400">Project</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>

                    <div onClick={handleClick} className='block md:hidden text-white'>
                        {nav ? <IoCloseOutline size={40} /> : <IoMenuOutline size={40} />}
                    </div>
                </div>
            </div>

            <div 
                ref={navRef} 
                className={nav ? 'fixed left-0 right-0 w-[60%] h-full bg-gray-900 text-white duration-500 ease-in-out md:hidden block' : 'fixed left-[-100%]'}
            >
                <ul className='ml-5 space-y-6 pt-5'>
                    <li><a href="#home" onClick={handleClick} className="text-2xl hover:text-blue-400">Home</a></li>
                    <li><a href="#about" onClick={handleClick} className="text-2xl hover:text-blue-400">About</a></li>
                    <li><a href="#project" onClick={handleClick} className="text-2xl hover:text-blue-400">Project</a></li>
                    <li><a href="#contact" onClick={handleClick} className="text-2xl hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
