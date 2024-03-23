import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2"  className="w-full h-screen  text-black p-1">
      <div className="textstructure mt-44 px-16">
        {["WE Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex overflow-hidden">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ease: [0.76,0,0.24,1],duration:1}}
                    className="mr-[1vw] w-[7.5vw] h-[5.2vw] rounded relative top-[1vw] bg-red-600 overflow-hidden"
                  ><img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"/></motion.div>
                )}
                <h1 className=" text-[7.5vw]  leading-[6.4vw] tracking-[-.3vw] font-bold  uppercase font-['Founders Grotesk-X-Cond-Bold']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px]  border-zinc-400 mt-28 flex justify-between px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-[1.2vw] font-normal tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-2">
          <div className="px-6 py-1 rounded-full  border-[1px] border-zinc-400 font-light uppercase text-[1vw]">
            start the project
          </div>
          <div className="h-9 w-9 border-zinc-400 border rounded-full flex items-center justify-center">
            <BsArrowUpRight size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
