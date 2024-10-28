"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "/utils/motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_detkgiv", "template_8sul8xn", form.current, {
        publicKey: "pKkiEzAOSEuCBDouv",
      })
      .then(
        () => {
          setSuccess(true);
          setFailure(false);
          form.current.reset(); // Reset form fields
        },
        (error) => {
          setSuccess(false);
          setFailure(true);
        }
      );
    e.target.reset();
  };
  return (
    <div className="w-full lg:h-screen">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] mx-auto px-2 py-16 w-full"
      >
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-xl tracking-widest uppercase text-[#5651e5] mt-16"
        >
          Contact
        </motion.p>
        <motion.h2 variants={slideInFromLeft(0.8)} className="py-4">
          Get In Touch
        </motion.h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* comment */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          >
            <div className="lg:p-4 h-full">
              <motion.div variants={slideInFromLeft(1)}>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="contact"
                  width={400}
                  height={300}
                />
              </motion.div>
              <div>
                <motion.h2 variants={slideInFromLeft(1.2)} className="py-2 mt-5 text-[#5651e5]">
                  Ahmed Wagih
                </motion.h2>
                <motion.p variants={slideInFromLeft(1.4)}>
                  Front-End Developer
                </motion.p>
                <motion.p
                  variants={slideInFromLeft(1.6)}
                  className="py-4 leading-loose"
                >
                  I&#39;m available for freelance or full-time positions Contact
                  me and let&#39;s talk.
                </motion.p>
              </div>
              <div>
                <motion.p
                  variants={slideInFromLeft(1.8)}
                  className="uppercase pt-8"
                >
                  Connect With Me
                </motion.p>
                <motion.div
                  variants={slideInFromLeft(2)}
                  className="flex items-center justify-between py-4"
                >
                  <div className="grid grid-cols-4 gap-4">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-gray-800 hover:text-[#5651e5] transition-colors duration-200"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* comment */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <motion.div
                    variants={slideInFromLeft(1.2)}
                    className="flex flex-col"
                  >
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="w-full outline-none p-3 rounded-xl shadow-lg shadow-gray-400"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={slideInFromLeft(1.4)}
                    className="flex flex-col"
                  >
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="w-full outline-none p-3 rounded-xl shadow-lg shadow-gray-400"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </motion.div>
                </div>
                <motion.div
                  variants={slideInFromLeft(1.6)}
                  className="flex flex-col py-2"
                >
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="w-full outline-none p-3 rounded-xl shadow-lg shadow-gray-400"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </motion.div>
                <motion.div
                  variants={slideInFromLeft(1.8)}
                  className="flex flex-col py-2"
                >
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="w-full outline-none p-3 rounded-xl shadow-lg shadow-gray-400"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </motion.div>
                <motion.div
                  variants={slideInFromLeft(2)}
                  className="flex flex-col py-2"
                >
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="w-full outline-none p-3 rounded-xl shadow-lg shadow-gray-400"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="10"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  variants={slideInFromLeft(2.2)}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        {/* <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>  
          </Link>
        </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
