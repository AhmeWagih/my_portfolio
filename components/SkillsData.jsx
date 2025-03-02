"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const SkillData = ({ src, index, alt, skill_name }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4">
          <motion.div
            className="flex flex-col items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
                alt={alt}
                className="filter drop-shadow-md"
              />
            </div>
            {/* <h3 className="text-lg font-semibold text-center">{skill_name}</h3> */}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillData;
