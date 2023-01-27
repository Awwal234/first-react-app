import React from "react";
import FormHero from "./FormHero";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Herosection = () => {
  return (
    <div className="py-[15px] px-[20px] md:py-[20px] md:px-[70px]">
        <div className="font-[500] mt-[110px] md:text-[50px] lg:text-[60px] text-center text-[25px] mx-auto w-full md:w-[90%] text-[#000]">
            Buy or Sell securely on <span className="font-[600] text-indigo-700">Whatsapp</span>
        </div>
        <div className="font-[500] w-full md:w-[60%] mx-auto text-[15px] md:text-[18px] text-center">
            This is a text supporting the title explaining the use of escrow in the
            whatever that it sees fit to talk about to the third line
        </div>
        <div className="mx-auto justify-center mt-[8px] space-x-[20px] flex items-center">
            <div><BsFillPlayCircleFill className="w-[20px] h-[20px]"/></div>
            <div className="font-[600] text-[16px] text-[#475569]">Watch video tutorial</div>
        </div>
        <FormHero />
    </div>
  );
};

export default Herosection;
