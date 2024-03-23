import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full bg-[#CDEA68] py-20 px-24  rounded-tl-3xl text-black">
      <h1 className="font-['Neue Montreal_Regular'] text-6xl leading-[4.2vw] -tracking-[.2vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <span className="border-b-[3px] border-zinc-900 -pb-2 hover:border-b-0 transition-all delay-5 ease-in re">raise funds</span>, <span className="border-b-[3px] border-zinc-900 -pb-2 hover:border-b-0 transition-all delay-5 ease-in re">sell products</span>, <span className="border-b-[3px] border-zinc-900 -pb-2 hover:border-b-0 transition-all delay-5 ease-in re">explain complex ideas</span>, and  
        <span className="border-b-[3px] border-zinc-900 -pb-2 hover:border-b-0 transition-all delay-5 ease-in re"> hire great people.</span>
      </h1>
      <div className="w-full border-t-2 mt-16   border-[#b0bf5d] flex">
        <div className="w-1/2 pt-6 flex flex-col items-start gap-3">
          <h1 className="text-[3.7vw]">Our approach:</h1>
          <button className="px-10 py-4 bg-zinc-800 font-light text-[1.vw] rounded-full text-white flex items-center gap-8 ">
            READ MORE
            <div className="w-3 h-3  bg-slate-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-300 mt-16 rounded-xl overflow-hidden">
        <img className="w-full h-full bg-cover bg-center " src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/> </div>
      </div>
    </div>
  );
};

export default About;
