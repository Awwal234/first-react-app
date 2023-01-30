import { React, useState} from "react";
import { BsFilterRight } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
 
  const navLinks = {
    'Blog': 'Blog',
    'About': 'About Us',
    'FAQs': 'FAQs',
  }
  
  const [toggle, settoggle] = useState(false);
  

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
            <div className="lg:hidden"><BsFilterRight onClick={(e)=>settoggle(!toggle)} className="font-[600] lg:hidden text-blue-600 w-[25px] h-[25px]"/></div>
        </div>
        
        <div className={`${toggle ? 'block':'hidden'} lg:hidden w-full z-[1000] px-[20px] py-[30px] fixed h-full top-0 bg-gray-50 left-0`}>
          <div className="float-right"><VscChromeClose onClick={(e)=>settoggle(!toggle)}  className="w-[20px] h-[20px] text-blue-800 font-[600]" /></div>
          <div className="mt-[60px] space-y-[40px] mx-auto text-center font-[600] text-[17px]">
            <div>{navLinks.Blog}</div>
            <div>{navLinks.About}</div>
            <div>{navLinks.FAQs}</div>
            <div className="mx-auto space-y-[40px] text-center">
                <div className="w-fit h-fit mx-auto font-[600] py-[10px] px-[40px] border cursor-pointer border-blue-600 rounded-full text-[15px] text-blue-600">Login</div>
                <div className="w-fit h-fit mx-auto font-[600] py-[10px] px-[40px] border cursor-pointer border-blue-600 rounded-full text-[15px] text-blue-600">Sign up</div>
            </div>
          </div>
        </div>
        {/* menu way */}
    </div>
  );
};

export default Navbar;
