import React from "react";

const FormHero = () => {
  return (
    <div className="mx-auto mt-[40px] w-[90%] md:w-[55%] lg:w-[30%] rounded-[10px] shadow-lg shadow-[#d4d4d8] py-[30px] px-[10px]">
        <div>
            <select disabled className='w-full rounded-[8px] border border-[#6b7280] p-[8px]'>
                <option className="font-[500] text-[14px] text-[#6b7280]">Are you a Buyer or Seller</option>
            </select>
        </div>
        <div>
            <input disabled type="text" className='w-full mt-[20px] rounded-[8px] border border-[#6b7280] p-[8px] placeholder:font-[500] placeholder:text-[14px] placeholder:text-[#6b7280]' placeholder="Price"/>
        </div>
        <div>
            <input disabled type="text" className='w-full mt-[20px] rounded-[8px] border border-[#6b7280] p-[8px] placeholder:font-[500] placeholder:text-[14px] placeholder:text-[#6b7280]' placeholder="Description"/>
        </div>
        <div>
            <button disabled className='w-full mt-[20px] bg-indigo-700 rounded-[8px] p-[8px] font-[500] text-[14px] text-[#f8fafc]'>Start Transaction</button>
        </div>
    </div>
  );
};

export default FormHero;
