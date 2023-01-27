import React from "react";
import { BsFilterRight } from "react-icons/bs";

const Navbar = () => {
 
  const navLinks = {
    'Blog': 'Blog',
    'About': 'About Us',
    'FAQs': 'FAQs',
  }

  return (
    <div>
        <div className="w-full z-[200] bg-[#fff] h-fit flex items-center justify-between fixed top-0 left-0 py-[15px] px-[20px] md:py-[20px] md:px-[70px]">
            <div className="font-[600] cursor-pointer text-[#000] text-[17px]">Eyewitnex</div>
            <div className="lg:flex hidden font-[600] text-[#000] text-[15px] items-center space-x-[20px]">
                <div className="cursor-pointer">{navLinks.Blog}</div>
                <div className="cursor-pointer">{navLinks.About}</div>
                <div className="cursor-pointer">{navLinks.FAQs}</div>
            </div>
            <div className="lg:flex hidden items-center space-x-[25px]">
                <div className="w-fit h-fit font-[600] py-[10px] px-[40px] border cursor-pointer border-blue-600 rounded-full text-[15px] text-blue-600">Login</div>
                <div className="w-fit h-fit font-[600] py-[10px] px-[40px] border cursor-pointer border-blue-600 rounded-full text-[15px] text-blue-600">Sign up</div>
            </div>
            <div className="lg:hidden"><BsFilterRight className="font-[600] lg:hidden text-blue-600 w-[25px] h-[25px]"/></div>
        </div>
    </div>
  );
};

export default Navbar;
