'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const ProjectCard = ({
  src,
  width,
  height,
  index,
  alt,
  project_name,
  tags,
  url,
  github,
  description,
  disabled
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full" 
    >
      <Card
        className="overflow-hidden relative group h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <CardContent className="flex-grow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{project_name}</h3>
            <p title={description} className="text-gray-600 mb-4 ">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4 ">
              {tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className='hover:bg-slate-200 cursor-pointer'>{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            <Button asChild
              variant="secondary"
              className={`text-white ${disabled
                ? "bg-[#5651e5] hover:bg-[#5651e5]/80 cursor-not-allowed"
                : "bg-[#5651e5] hover:bg-[#5651e5]/80"
                }`}
              disabled={disabled}>
              {disabled ?
                <div href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </div>
                :
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              }
            </Button>
            <Button asChild variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Repo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
