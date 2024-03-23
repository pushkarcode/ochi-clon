import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 bg-[#F1F1F1]">
      <div className="w-full px-10 mt-5 border-b-[1px] pb-10 border-zinc-300">
        <h1 className="text-[4.5vw] leading-none text-zinc-900 -tracking-[.1vw]">
          Featured projects
        </h1>
      </div>

      <div className="px-14">
        <div className="cards w-full flex gap-4 mt-16 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex left-full top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#CDEA68] z-[9] text-[7.7vw] leading-none tracking-tight font-[Oswald] font-bold overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <h2 className="text-zinc-900 mb-4 flex items-center gap-3 text-[1.2vw]">
              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
              FYDE
            </h2>
            <div className=" card w-full h-full rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </motion.div>

          <motion.div 
           onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
          className=" relative cardcontainer w-1/2 h-[75vh] ">
            <h2 className="text-zinc-900 mb-4 flex items-center gap-3 text-[1.2vw]">
              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
              VISE
            </h2>
            <div className="card w-full h-full  overflow-hidden rounded-2xl ">
              <h1 className="absolute flex overflow-hidden right-full top-1/2 -translate-y-1/2 translate-x-1/2 text-[#CDEA68] z-[9] text-[7.7vw] leading-none tracking-tight font-[Oswald] font-bold">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </motion.div>
        </div>

        {/* // ? secand par not need  */}
{/* 
        <div className="cards w-full flex gap-4 mt-28 ">
          <motion.div 
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
          className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className="absolute flex overflow-hidden left-full top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#CDEA68] z-[9] text-[7.7vw] leading-none tracking-tight font-[Oswald] font-bold">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
              ))}
            </h1>
            <h2 className="text-zinc-900 mb-4 flex items-center gap-3 text-[1.2vw]">
              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
              TRAWA
            </h2>
            <div className=" card w-full h-full rounded-2xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </div>
          </motion.div>
          <motion.div 
           onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
          className=" relative cardcontainer w-1/2 h-[75vh] ">
            <h2 className="text-zinc-900 mb-4 flex items-center gap-3 text-[1.2vw]">
              <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
              PRIMIUM BLANDE
            </h2>
            <div className="card w-full h-full  overflow-hidden rounded-2xl ">
              <h1 className="absolute flex overflow-hidden right-full top-1/2 -translate-y-1/2 translate-x-1/2 text-[#CDEA68] z-[9] text-[7.7vw] leading-none tracking-tight font-[Oswald] font-bold">
                {"PRIMIUM".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              />
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Feature;
