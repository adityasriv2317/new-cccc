import React, { useState } from "react";
import graphicon from "../EventsImg/graphicon.png";
import hackerp from "../EventsImg/hackerp.jpg";
import spocc23 from "../EventsImg/spocc23.jpg";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import TypingAnimation from "./ui/typing-animation";
import { motion } from "framer-motion";
import Recrutingno from "./Recrutingno";
import ShimmerButton from "./ui/shimmer-button";
import download from "../EventsImg2/download.jpeg"

export function Alumni() {
  return (
    <div className="lg:flex block sm:max-w-[90vw] relative w-full lg:h-screen m-auto p-7 justify-center items-center">
      <Text />
      <Shufle />
    </div>
  );
}

const Shufle = () => {
  const [images, setImages] = useState([
    { id: 1, src: download, text: "Image 5" },
    { id: 2, src: download , text: "Image 5" },
    { id: 3, src: download, text: "hello" },
    { id: 4, src: download, text: "Image 4" },
    { id: 5, src:download, text: "Image 5" },
    { id: 6, src: download, text: "Image 6" },
    { id: 7, src: download, text: "Image 7" },
    { id: 8, src: download, text: "Image 8" },
    { id: 9, src: download, text: "Image 9" },
    { id: 10, src: download, text: "Image 9" },
    { id: 11, src: download, text: "Image 9" },
    { id: 12, src: download, text: "Image 9" },
    // { id: 13, src: download, text: "Image 9" },
    // { id: 14, src: download, text: "Image 9" },
    // { id: 15, src: download, text: "Image 9" },
    // { id: 16, src: download, text: "Image 9" },
  ]);

  return (
    <div className="h-auto  grid grid-cols-4 sm:ml-9 justify-center  gap-2">
      {images.map((image) => (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          key={image.id}
          className="relative group w-full"
        >
          <img
            src={image.src}
            alt={`image-${image.id}`}
            className="md:w-32 w-20 sm:h-32 h-20 flex-wrap object-cover cursor-pointer grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
          />

          {image.text && (
            <p className="absolute bottom-0 left-0 right-0 w-20 sm:w-full text-center text-white sm:text-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 p-2 group-hover:animate-su">
              {image.text}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const Text = () => {
  const [close, setClose] = useState(false);

  function message() {
    setClose(true);
  }

  function messageclose() {
    setClose(false);
  }

  return (
    <div className="text-white sm:text-center lg:text-start xl:w-6/12 lg:ml-8 w-full p-2 flex flex-col">
      {close && <Recrutingno messageclose={messageclose}/>}
      <p className="md:text-5xl text-3xl font-bold m-3 font-rubik  mb-4 sm:mb-12">
        Let's have a look on our <br /> star achievers
      </p>
      <div className="md:text-3xl font-poppins text-xl ml-5">
        <TypingAnimation
          duration={100}
          delay={0}
          startOnView={true}
          className="text-white sm:mt-4 mt-7 text-lg sm:text-3xl font-bold"
        >
          {"65+ Hackathon Winners"}
        </TypingAnimation>
        <TypingAnimation
          duration={200}
          delay={200}
          startOnView={true}
          className="text-white sm:mt-7 mt-7 text-lg sm:text-3xl font-bold"
        >
          {"5+ MLH Winning"}
        </TypingAnimation>
        <TypingAnimation
          duration={300}
          delay={400}
          startOnView={true}
          className="text-white sm:mt-7 mt-7 text-lg sm:text-3xl font-bold"
        >
          {"6+ GSOC'r"}
        </TypingAnimation>
        <TypingAnimation
          duration={350}
          delay={600}
          startOnView={true}
          className="text-white sm:mt-7 mt-7 text-lg sm:text-3xl font-bold"
        >
          {"5+ Winning"}
        </TypingAnimation>
      </div>
      <div className="mt-7 sm:mt-10 mb-14 ml-3">
        {/* <InteractiveHoverButton
          text="Join Us"
          onClick={message}
          className="text-black font-poppins"
        /> */}
      </div>
      {close && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 mt-20 -translate-x-1/2 -translate-y-1/2 z-50"
        >
        </motion.div>
      )}
    </div>
  );
};
