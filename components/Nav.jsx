"use client";
import { menuItems, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { PiMoonStars, PiSun } from 'react-icons/pi';
import { useTheme } from 'next-themes';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY >= 90)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <nav
      className={`fixed w-full z-50 transition-shadow duration-300 overflow-hidden ${hasShadow ? "shadow-xl" : ""
        }`}
      style={{ backgroundColor: "#ecf0f3" }}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="">
            <Image 
              src="/logo2.png" 
              alt="Logo Image" 
              width={210} 
              height={64} 
              className="w-[150px] h-[100px] sm:w-[200px] sm:h-[100px]" 
            />
          </Link>
          <div className="hidden md:block">
            <div className="flex items-baseline gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.target}
                  className="text-gray-800 hover:text-[#5651e5] text-md font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="hidden md:block">
            <button
              onClick={handleChangeTheme}
              className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-lg border-1 border-[#E5E6E6] dark:border-[#1F273D] px-0"
            >
              {theme === 'light' ? (
                <PiMoonStars size={20} className=" text-yellow-400" />
              ) : (
                <PiSun size={20} className=" text-yellow-400" />
              )}
            </button>
          </div> */}
          <div className="flex items-center justify-center gap-2 md:hidden">
            {/* <button
              onClick={handleChangeTheme}
              className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-lg border-1 border-[#E5E6E6] dark:border-[#1F273D] px-0"
            >
              {theme === 'light' ? (
                <PiMoonStars size={20} className=" text-yellow-400" />
              ) : (
                <PiSun size={20} className=" text-yellow-400" />
              )}
            </button> */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#5651e5]"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>

          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-25 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`fixed right-[-120%] md:right-[-100%] md:w-[360px] w-max-sm h-[95%] bg-[#ecf0f3] rounded-lg transform transition-transform duration-300 ease-in-out 
            ${isMenuOpen ? "right-5 top-5" : "right-[-120%] md:right-[-100%] md:w-[360px] w-3/4 xs:w-9/12"
            }`}
        >
          <div className="flex items-center justify-between p-6 mt-[-50px]">
            <Link href="/" className="flex-shrink-0" onClick={toggleMenu}>
              <Image src="/logo2.png" alt="Logo Image" width={210} height={100} className="" />
            </Link>
            <button
              onClick={toggleMenu}
              className="rounded-full p-2 inline-flex items-center justify-center text-gray-800 hover:text-[#5651e5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5651e5]"
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-2 mt-[-50px] pb-3 space-y-1 border-b border-gray-300">
            <p className="px-3 py-2 text-sm font-medium text-gray-800">
              Let&#39;s build something amazing together
            </p>
          </div>
          <nav className="px-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                onClick={toggleMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#5651e5] hover:bg-gray-100 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-6">
            <p className="mb-4 text-sm font-semibold tracking-widest text-[#5651e5] uppercase">
              Let&#39;s Connect
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-gray-800 hover:text-[#5651e5] transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
