import React from "react";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import identityimg from '/img/identityimg.png'

const SecurelyTransact = () => {
  const letter = 'Eyewitnex is an escrow platform that stands as a third party between buyesrs and sellers to ensure both parties are secured against scam'
  return (
    <div className="mt-[50px] lg:flex lg:justify-between lg:items-center px-[20px] md:mt-[60px] md:px-[70px]">
        <div className="w-full lg:w-[40%] md:w-[90%]">
            <div className="text-[20px] font-[600] text-blue-800 md:leading-[40px] md:text-[35px]">Securely transact with Eyewitnex</div>
            <div className="mt-[25px] font-[600] text-gray-800 text-[16px] md:text-[18px]">
                {letter}
            </div>
            <div className="md:flex w-full md:space-x-[50px] mt-[25px] md:justify-between">
                <div className="md:w-[50%]">
                    <div className="font-[600] text-[19px] md:text-[22px]">As a Buyer you get to...</div>
                    <div className='flex space-x-[16px] mt-[20px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Buy from anyone safely</div>
                    </div>
                    <div className='flex space-x-[16px] mt-[10px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Avoid losing money</div>
                    </div>
                    <div className='flex space-x-[16px] mt-[10px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Avoid fraud...</div>
                    </div>
                </div>
                {/* 2nd flex or block */}
                <div className="md:w-[50%] mt-[25px] md:mt-[0px]">
                    <div className="font-[600] text-[19px] md:text-[22px]">As a Seller you get to...</div>
                    <div className='flex space-x-[16px] mt-[20px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Make more sales</div>
                    </div>
                    <div className='flex space-x-[16px] mt-[10px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Gain more customers</div>
                    </div>
                    <div className='flex space-x-[16px] mt-[10px]'>
                        <div><IoIosCheckmarkCircleOutline className="w-[25px] text-blue-800 font-[600] h-[25px]" /></div>
                        <div className="font-[600] text-[18px] md:text-[18px]">Avoid fraud...</div>
                    </div>
                </div>
                {/* end block or flex */}
            </div>
            {/* hippy hippy */}
        </div>
        {/* 2nd flex or block for mobile and desktop */}
        <div className="mx-auto lg:mx-[0px]">
            <img src={identityimg} className="mx-auto lg:mx-[0px]" alt=""/>
        </div>
    </div>
  );
};

export default SecurelyTransact;
