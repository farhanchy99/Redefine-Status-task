import React, { useEffect, useState } from 'react';
import { FaSearch, FaMoon } from 'react-icons/fa'
import { IoMdSunny } from 'react-icons/io'
import { Link } from 'react-router-dom';
import "../Shared/Header.css";
import { motion } from "framer-motion"

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : ""
      );
      useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [theme]);
    
      const handleThemeSwitch = () => {
        if (localStorage.theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.add("light");
        }
        setTheme(theme === "dark" ? "light" : "dark");
      };

    return (
        <div className='bg-gray-200/75 sticky top-0 z-[9999] backdrop-blur-sm dark:bg-[#212025]/75 '>
            <div className="navbar text-[#37352F] w-11/12 m-auto dark:text-white">
                <div className="navbar-start">
                  <motion.div animate={{ x: 10 }} transition={{ ease: "easeOut", duration: 0.85 }}>
                      <Link to="#" className="text-xl font-semibold">🌟Redefine Status</Link>
                  </motion.div>
                </div>
                <div className="navbar-center">
                    
                </div>
                <div className="navbar-end">
                      <div className='flex text-xl w-[15%] justify-between'>
                      <button onClick={handleThemeSwitch} className="text-[20px] lg:text-[25px]">
                          {theme === "light" ? (
                          <IoMdSunny className="text-amber-400"/>
                          ) : (
                          <FaMoon className=""/>
                          )}
                      </button>
                      <button className='btn rounded-full'><FaSearch></FaSearch></button>
                      </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;