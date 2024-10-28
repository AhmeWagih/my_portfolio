"use client";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "/utils/motion";
import { useInView } from "react-intersection-observer";

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
  {
    href: "https://drive.google.com/file/d/17pMdjT_B2HCXb9WUltH5E5WkCEL8UqiS/view?usp=sharing",
    icon: <BsFillPersonLinesFill aria-hidden="true" />,
    label: "WhatsApp",
  },
]

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full h-screen text-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"
      >
        <div>
          <motion.div
            variants={slideInFromTop}
            className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-gray-600"
          >
            Let&#39;s build something amazing
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.2)}
            className=" font-bold text-4xl sm:text-5xl md:text-6xl"
          >
            Hi, I&#39;m <span className="text-[#5651e5]">Ahmed Wagih</span>
          </motion.div>
          <motion.div
            className=" font-bold text-4xl sm:text-5xl md:text-6xl py-2 text-gray-700"
            variants={slideInFromLeft(0.5)}
          >
            A Front-End Web Developer
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-5xl mx-auto mb-8 leading-relaxed"
          >
            I&#39;m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently.
            I&#39;m focused on building front-end web applications while
            learning back-end technologies.
          </motion.div>
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="flex justify-center"
          >
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 rounded-full shadow-lg shadow-gray-400 p-6 hover:text-[#5651e5] transition-all hover:scale-110 ease-in duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
