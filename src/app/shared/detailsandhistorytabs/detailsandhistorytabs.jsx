import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Plus from "../../../../public/quote/plusgoodmorning.svg";
import Green from "../../../../public/quote/quoteplusgreen.svg";
import Delete from "../../../../public/quote/quotedeleteiconforform.svg";

const Detailsandhistorytabs = () => {
  return (
    <div className='font-inter text-sm'>
      <Tabs aria-label='Default tabs' style='default'>
        <Tabs.Item active title='Details' >
          <form className='grid grid-cols-1 '>
            <div className='flex flex-row flex-wrap justify-between'>
              <div className='left rounded-full border border-[#04B076] px-4 py-3 text-[#04B076] font-normal font-inter '>
                <span className='rounded-r-lg border h-3 w-3 px-2 mr-2 border-[#04B076]'></span>
                <span className='font-bold text-sm leading-5'># 1</span>
              </div>
              <div className='right mt-4 md:mt-0'>
                <button className='text-[#04b076] font-inter rounded-full px-4 py-2 font-semibold text-sm leading-7 border border-[#04B076] bg-[#B9F9CF]'>
                  Total $ 0.00
                </button>
              </div>
            </div>
            <div className='form'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                <div className='w-full '>
                  <label
                    htmlFor='item'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Item
                  </label>
                  <input
                    type='text'
                    name='item'
                    id='small-input'
                    placeholder='item'
                    className='text-sm border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
                <div className='w-full '>
                  <label
                    htmlFor='Quantity'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Quantity
                  </label>
                  <input
                    type='count'
                    name='quantity'
                    id='small-input'
                    placeholder='0'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
                <div className='w-full '>
                  <label
                    htmlFor='price'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Price
                  </label>
                  <input
                    type='number'
                    name='price'
                    id='small-input'
                    placeholder='$ 0.00'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                <div className='w-full '>
                  <label
                    htmlFor='commission'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Commission
                  </label>
                  <input
                    type='number'
                    name='commission'
                    id='small-input'
                    placeholder='$ 0.00'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
                <div className='w-full '>
                  <label
                    htmlFor='rate'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Rate
                  </label>
                  <input
                    type='number'
                    name='rate'
                    id='small-input'
                    placeholder='% 0.00'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
                <div className='w-full '>
                  <label
                    htmlFor='discount'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Discount
                  </label>
                  <input
                    type='number'
                    name='discount'
                    id='small-input'
                    placeholder='$ 0.00'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
              </div>
              <div className='flex flex-row flex-wrap justify-between mt-6'>
                <div className=' w-[32.5%]'>
                  <label
                    htmlFor='rate'
                    className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                  >
                    Rate
                  </label>
                  <input
                    type='number'
                    name='rate'
                    id='small-input'
                    placeholder='% 0.00'
                    className='border text-sm border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                </div>
                <div className=' '>
                  <button className='flex py-[10px] px-[16px]  text-[#FF3D00] text-sm rounded items-center gap-2'>
                    <img src="/quote/quotedeleteiconforform.svg" className='w-3.5 h-3.5  ' alt='' />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Tabs.Item>
        <Tabs.Item title='History'>
          <div class='relative overflow-x-auto'>
            <table class='w-full text-sm text-left rtl:text-right text-#404040]'>
              <thead class='text-sm font-bold font-inter leading-7 text-gray-700 uppercase bg-[#F4F4F4] '>
                <tr>
                  <th scope='col' class='px-6 py-3'>
                    User
                  </th>
                  <th scope='col' className='px-6 text-[12px] py-3'>
                    Type
                  </th>
                  <th scope='col' class='px-6 py-3'>
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class='bg-white border-b border-[#EBEBEB] font-inter font-normal text-[#404040] leading-7'>
                  <th scope='row' class='px-6 py-4 '>
                    Jamal Saied
                  </th>
                  <td class='px-6 py-4  uppercase '>INSERT</td>
                  <td class='px-6 py-4'>2024-01-01</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Tabs.Item>
      </Tabs>
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
