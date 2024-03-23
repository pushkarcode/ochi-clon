import React from "react";

const Card = () => {
  return (
    <div className="w-full h-[65vh] bg-zinc-100 flex gap-5 mt-32 px-14">
      <div className="cardcontainer w-1/2 h-[55vh]">

        <div className="card relative w-full rounded-xl h-full  bg-[#004D43] flex items-center justify-center">
          <h1 className="text-[5vw] font-semibold text-[#CDEA68]">ochҐ</h1>
          <p className="absolute bottom-[10%] left-[5%] text-[#CDEA68] border-[2px] border-[#CDEA68] rounded-full px-2 py-1">©2023-2024</p>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
      <div className="card relative w-full h-full rounded-xl bg-[#212121] flex justify-center items-center">
        <img className="" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
        <p className="uppercase absolute bottom-[10%] left-[5%] border-[2px] rounded-full border-zinc-100 px-2 py-[.2vw]"> rating 5.0 on clutch</p>
      </div>
      <div className="card relative w-full h-full rounded-xl bg-[#212121] flex justify-center items-center">
      <img className="w-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
      <p className="uppercase absolute bottom-[10%] left-[5%] border-[2px] rounded-full border-zinc-100 px-2 py-[.2vw]">business bootcamp alumini</p>
      </div>

      </div>
    </div>
  );
};

export default Card;
