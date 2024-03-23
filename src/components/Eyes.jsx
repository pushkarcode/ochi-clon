import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let delatX = mousex - window.innerWidth / 2;
      let delatY = mousey - window.innerHeight / 2;

      var angle = Math.atan2(delatY, delatX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.3" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full flex ">
                <div className="w-5 h-5  rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>

          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex justify-center items-center">
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full ">
                <div className="w-5 h-5 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
