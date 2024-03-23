import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen text-zinc-900 p-20 flex gap-10 ">
      <div className="w-1/2 h-full font-[Oswald] flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[7vw] font-bold uppercase leading-[6.5vw] tracking-tight">
            Eye-
          </h1>
          <h1 className="text-[7vw] font-bold uppercase leading-[6.5vw] tracking-tight">
            Opening
          </h1>
        </div>
        <h3 className="text-[3vw]">ochҐ</h3>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <h1 className="text-[7vw] tracking-tight -mt-[2vw] font-bold font-[Oswald] uppercase ">presentation</h1>
        <div className="flex flex-col gap-3 font-[Neue Montreal]">
            <h1 className="text-[5vw] tracking-widest text-zinc-600 font-extrabold">L:</h1>
            <p className="text-xl text-zinc-500 tracking-tighter">202-1965 W 4th Ave</p>
            <p className="text-xl text-zinc-500 tracking-tighter">Vancouver, Canada</p>

        </div>
        <div className="w-full flex items-center justify-between">
            <div className="text-xl text-zinc-400">©ochi design 2024. Legal Terms</div>
            <h3 className="text-xl tracking-tight text-zinc-400">Created by Pushkar🦁</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
