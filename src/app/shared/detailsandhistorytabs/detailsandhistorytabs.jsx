import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Plus from "../../../../public/quote/plusgoodmorning.svg";
import Green from "../../../../public/quote/quoteplusgreen.svg";
import Delete from "../../../../public/quote/quotedeleteiconforform.svg";
import DetailNavigation from './navigation' 
const Detailsandhistorytabs = () => {
  return (
    
    <div className='font-inter text-sm'>
<DetailNavigation/>
      <div className='buttons flex flex-row flex-wrap gap-4 mt-6'>
        <button className='flex text-sm font-lexend py-[10px] px-[16px] bg-[#B9F9CF] text-[#04b076] rounded border border-[#04B076] items-center gap-2'>
          <img src="/quote/quoteplusgreen.svg" className='w-3 h-3 ' alt='' />
          Add Notes
        </button>
        <button className='flex text-sm font-lexend py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2'>
          <img src="/quote/plusgoodmorning.svg" className='w-3 h-3  ' alt='' />
          Add Quote
        </button>
      </div>
    </div>
  );
};

export default Detailsandhistorytabs;
