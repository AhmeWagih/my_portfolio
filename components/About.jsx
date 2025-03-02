"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "/utils/motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full md:h-screen flex items-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=" md:grid grid-cols-2 gap-8"
      >
        <div className="flex flex-col gap-4">
          <motion.div
            variants={slideInFromLeft(0.2)}
            className="uppercase text-xl tracking-widest text-[#5651e5]"
          >
            About
          </motion.div>
          <motion.h2 variants={slideInFromLeft(0.5)} className="">
            Who I Am
          </motion.h2>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-gray-600 leading-loose"
          >
            I specialize in building mobile-responsive front-end UI applications that integrate seamlessly with APIs and various backend technologies. 
            My passion for learning new technologies drives me to explore multiple solutions to a problem. 
            Although I am most proficient in creating front-end applications using HTML, CSS, JavaScript, React, and Next.js .
            I pride myself on being a quick learner who can adapt to new tech stacks as required. 
            I believe that being an effective developer is about selecting the right tools for each 
            project rather than sticking to a single programming language.
          </motion.div>
          {/* <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 text-gray-600 leading-loose"
          >
            I started web developement in 2022 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications.
          </motion.div> */}
          <Link href="/projects">
            <motion.div
              variants={slideInFromLeft(1.2)}
              className="text-gray-600 underline cursor-pointer hover:text-[#5651e5]"
            >
              Check out some of my latest projects.
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={slideInFromRight(2)}
          className="w-full h-auto shadow-md rounded-lg flex items-center justify-center p-3"
        >
          <Image
            src="/assets/about.jpeg"
            className="rounded-xl"
            alt="About Image"
            width={400}
            height={300}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
