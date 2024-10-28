"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  {
    href: "https://drive.google.com/file/d/17pMdjT_B2HCXb9WUltH5E5WkCEL8UqiS/view?usp=sharing",
    label: "Resume",
    target: "_blank",
  },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ahmedwagih02/",
    icon: <FaLinkedinIn aria-hidden="true" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/AhmeWagih",
    icon: <FaGithub aria-hidden="true" />,
    label: "GitHub",
  },
  {
    href: "/contact",
    icon: <AiOutlineMail aria-hidden="true" />,
    label: "Email",
  },
  {
    href: "https://api.whatsapp.com/send?phone=+201113078687&text=Hello%20Ahmed%20Wagih",
    icon: <FaWhatsapp aria-hidden="true" />,
    label: "WhatsApp",
  },
]

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false)

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
      className={`fixed w-full z-50 transition-shadow duration-300 ${hasShadow ? "shadow-xl" : ""
        }`}
      style={{ backgroundColor: "#ecf0f3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo2.png" alt="Logo Image" width={210} height={100} className="" />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.target}
                  className="text-gray-800 hover:text-[#5651e5] px-3 py-2 rounded-md text-md font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#5651e5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5651e5]"
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
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-[#ecf0f3] shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-800 hover:text-[#5651e5] transition-colors duration-200"
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
