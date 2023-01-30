import { React, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const FAQS = () => {
  const[toggleone, Settoggleone] = useState(false);
  const[toggletwo, Settoggletwo] = useState(false);
  
  return (
    <div className="mt-[60px] md:mt-[100px] px-[20px] md:px-[70px]">
        <div className="mx-auto text-center font-[600] text-[20px] md:text-[27px]">Frequently asked questions (FAQs)</div>
        <div className="mt-[20px] font-[600] text-[19px]">General</div>
        <div className="w-full md:w-[60%]">
          <div className="flex items-center mt-[20px] space-x-[10px]">
            <BsChevronDown onClick={(e)=>Settoggleone(!toggleone)} className="w-[20px] cursor-pointer h-[20px] text-[600] text-[#000]" />
            <div className="font-[600] text-[15px] md:text-[15px]">What is Escrow?</div>
          </div>
          <div className={`${toggleone ? 'block':'hidden'} font-[500] mt-[20px] text-[14px] text-[#000] md:text-[13px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo provident hic accusamus? Consequatur eius modi omnis officia, quidem tempore accusantium ducimus libero, consectetur nam ab voluptas labore minus, dolor sint!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus neque excepturi numquam? Tenetur atque reprehenderit numquam, obcaecati odio nisi blanditiis quod officia iusto eius? Culpa sed voluptatum corrupti doloremque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi odit voluptatem debitis culpa asperiores quos accusantium nihil sint consequuntur, illum in rerum nesciunt dolor laboriosam. Iste fuga laudantium vero?
          </div>
          <hr className="mt-[4px]"></hr>
          <div className="flex items-center mt-[20px] space-x-[10px]">
            <BsChevronDown onClick={(e)=>Settoggletwo(!toggletwo)} className="w-[20px] cursor-pointer h-[20px] text-[600] text-[#000]" />
            <div className="font-[600] text-[15px] md:text-[15px]">is Eyewitnex an Escrow service?</div>
          </div>
          <div className={`${toggletwo ? 'block':'hidden'} font-[500] mt-[20px] text-[14px] text-[#000] md:text-[13px]`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo provident hic accusamus? Consequatur eius modi omnis officia, quidem tempore accusantium ducimus libero, consectetur nam ab voluptas labore minus, dolor sint!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus neque excepturi numquam? Tenetur atque reprehenderit numquam, obcaecati odio nisi blanditiis quod officia iusto eius? Culpa sed voluptatum corrupti doloremque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi odit voluptatem debitis culpa asperiores quos accusantium nihil sint consequuntur, illum in rerum nesciunt dolor laboriosam. Iste fuga laudantium vero?
          </div> 
          <hr className="mt-[4px]"></hr>
          {/* second role hr */}
        </div>
        {/* end the faq space */}
    </div>
  );
};

export default FAQS;
