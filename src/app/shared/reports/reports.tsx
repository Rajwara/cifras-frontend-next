import React from "react";
import Report from "./report";
import Reportgallery from "./reportgallery";

const Reports = () => {
  return (
    <div>
      <div className=' '>
        <p className=''>
          <Report />
        </p>
      </div>
      <div className=' sm:ml-[62px] bg-white'>
        <div className='  mt-10'>
          <div className='grid grid-cols-1 -mt-10 mb-4 '>
            <div className=' rounded'>
              <p className='text-2xl text-gray-400 '>
                <Reportgallery />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
