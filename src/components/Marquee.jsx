import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full rounded-tl-3xl rounded-tr-3xl py-10 bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden mt-14 pr-20 ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{x:"-100%"}}
          transition={{repeat: Infinity, ease: "linear",duration:8}}
          className='text-[22vw] -tracking-[1.7vw] font-bold uppercase leading-none font-["Oswald"]  -mt-7 pr-20'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{x:"-100%"}}
          transition={{repeat:Infinity, ease: "linear",duration:8}}
          className='text-[22vw] -tracking-[1.7vw] font-bold uppercase leading-none font-["Oswald"]  -mt-7 pr-20'
        >
          we are ochi
        </motion.h1>
       
      </div>
    </div>
  );
};

export default Marquee;
