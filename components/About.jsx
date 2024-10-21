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
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
      >
        <div className="col-span-2">
          <motion.div
            variants={slideInFromLeft(0.2)}
            className="uppercase text-xl tracking-widest text-[#5651e5] mt-5"
          >
            About
          </motion.div>
          <motion.h2 variants={slideInFromLeft(0.5)} className="py-4">
            Who I Am
          </motion.h2>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="py-2 text-gray-600 leading-loose"
          >
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </motion.div>
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 text-gray-600 leading-loose"
          >
            I started web developement in 2022 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. 
          </motion.div>
          <Link href="/projects">
            <motion.div
              variants={slideInFromLeft(1.2)}
              className="py-2 text-gray-600 underline cursor-pointer hover:text-[#5651e5]"
            >
              Check out some of my latest projects.
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={slideInFromRight(2)}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4"
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
