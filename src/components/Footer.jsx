import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-[60px] bg-indigo-700 px-[20px] py-[25px] md:px-[70px]">
        <div className="font-[600] cursor-pointer text-[#fff] text-[17px]">Eyewitnex</div>
        <div className="font-[600] text-[14px]">Follow us on all social media</div>
        <div className="flex mt-[8px] items-center space-x-[10px]">
            <FaFacebookSquare className="w-[20px] cursor-pointer h-[20px] font-[600] text-white"/>
            <FaGithubSquare className="w-[20px] cursor-pointer h-[20px] font-[600] text-white"/>
            <FaLinkedin className="w-[20px] cursor-pointer h-[20px] font-[600] text-white"/>
        </div>
    </div>
  );
};

export default Footer;
