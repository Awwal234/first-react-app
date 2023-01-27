import React from "react";

const TrackBanners = () => {
  return (
    <div className="md:flex w-[90%] md:w-fit space-y-[30px] mx-auto md:space-y-[0px] md:space-x-[120px] md:justify-center">
        <div className="w-[90%] mx-auto md:mx-[0px] md:w-fit bg-[#f1f5f9] py-[8px] px-[30px] text-[14px] text-blue-800 space-y-[3px] rounded-[10px]">
            <div className="text-center">1,000+</div>
            <div className="font-[600] text-center">Transactions</div>
        </div>
        {/* 2nd frame banner */}
        <div className="w-[90%] mx-auto md:mx-[0px] md:w-fit bg-[#f1f5f9] py-[8px] px-[30px] text-[14px] text-blue-800 space-y-[3px] rounded-[10px]">
            <div className="text-center">1,000+</div>
            <div className="font-[600] text-center">Transactions</div>
        </div>
        {/* 3rd frame banner */}
        <div className="w-[90%] mx-auto md:mx-[0px] md:w-fit bg-[#f1f5f9] py-[8px] px-[30px] text-[14px] text-blue-800 space-y-[3px] rounded-[10px]">
            <div className="text-center">1,000+</div>
            <div className="font-[600] text-center">Transactions</div>
        </div>
        {/* end banner */}
    </div>
  );
};

export default TrackBanners;
