"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "/utils/motion";
import { skills } from "@/constants";
import SkillData from "./SkillsData";
import { useInView } from "react-intersection-observer";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { usePathname } from 'next/navigation';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const pathname = usePathname();
  const isSkillsPath = pathname === '/skills';

  return (
    <div className={`w-full ${isSkillsPath ? 'h-screen' : ''}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col gap-4 justify-center h-full"
      >
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-xl tracking-widest uppercase text-[#5651e5]"
        >
          Skills
        </motion.p>
        <motion.h2 variants={slideInFromLeft(0.8)} className="">
          What I Can Do
        </motion.h2>
        <div className="">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30
              }
            }}
            loop={true}
            className="relative w-full overflow-hidden"
          >
            {skills.map((image, index) => (
              <SwiperSlide key={index}>
                <SkillData
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                  alt={image.alt}
                  skill_name={image.skill_name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
