"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "/utils/motion";
import { useInView } from "react-intersection-observer";
import { heroLinks } from "@/constants";


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
        className="w-full h-full flex justify-center items-center"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
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
            className=" font-bold text-4xl sm:text-5xl md:text-6xl text-gray-700"
            variants={slideInFromLeft(0.5)}
          >
            A Front-End Developer
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-5xl leading-relaxed"
          >
            I&#39;m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently.
            I&#39;m focused on building front-end web applications while
            learning back-end technologies.
          </motion.div>
          </div>
          <motion.div
            variants={slideInFromLeft(1.1)}
            className="flex justify-center"
          >
            <div className="grid grid-cols-5 md:gap-4 gap-2">
              {heroLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full shadow-md md:p-6 p-3 hover:text-[#5651e5] transition-all hover:scale-110 ease-in duration-300"
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
