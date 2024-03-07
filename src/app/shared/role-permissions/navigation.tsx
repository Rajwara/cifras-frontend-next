'use client';

import { useState } from 'react';
import { Button, Text } from 'rizzui';
import cn from '@/utils/class-names';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { useBerylliumSidebars } from '@/layouts/beryllium/beryllium-utils';
import ReportGrid from '../report-permissions/report-grid';

const menuItems = [
  {
    label: 'My Details',
    value: 'myDetails',
  },
  {
    label: 'Profile',
    value: 'profile',
  },
];

export default function ProfileSettingsNav() {
  const [activeItem, setActiveItem] = useState('myDetails'); // Default active item
  const { layout } = useLayout();
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();
  const { expandedLeft } = useBerylliumSidebars();

  const renderContent = () => {
    switch (activeItem) {
      case 'myDetails':
        return <div className='mt-5'>
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
        </div>;
      case 'profile':
        return <div className='mt-5  relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-#404040]'>
          <thead className='text-sm font-bold font-inter leading-7 text-gray-700 uppercase bg-[#F4F4F4] '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                User
              </th>
              <th scope='col' className='px-6 text-[12px] py-3'>
                Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b border-[#EBEBEB] font-inter font-normal text-[#404040] leading-7'>
              <th scope='row' className='px-6 py-4 '>
                Jamal Saied
              </th>
              <td className='px-6 py-4  uppercase '>INSERT</td>
              <td className='px-6 py-4'>2024-01-01</td>
            </tr>
          </tbody>
        </table>
      </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={cn(
          'sticky z-20 -mx-4 -mt-4 border-b border-muted bg-white px-4 py-0 font-medium text-gray-500 sm:-mt-2 md:-mx-5 md:px-5 lg:-mx-8 lg:mt-0 lg:px-8 xl:-mx-6 xl:px-6 2xl:top-20 3xl:-mx-[33px] 3xl:px-[33px] 4xl:-mx-10 4xl:px-10 dark:bg-gray-50',
          layout === LAYOUT_OPTIONS.LITHIUM
            ? 'top-[66px] sm:top-[70px] md:top-[73px] '
            : layout === LAYOUT_OPTIONS.BERYLLIUM
              ? 'top-[62px] sm:top-[72px] 2xl:top-[72px]'
              : 'top-[62px] md:top-[71px]',
          layout === LAYOUT_OPTIONS.BERYLLIUM &&
            expandedLeft &&
            'xl:-ms-1 xl:px-0 3xl:-ms-2 3xl:ps-0 4xl:-ms-2'
        )}
      >
        <div className="relative flex items-center overflow-hidden">
          <Button
            title="Prev"
            variant="text"
            ref={sliderPrevBtn}
            onClick={() => scrollToTheLeft()}
            className="!absolute left-0 top-0.5 z-10 !h-[calc(100%-4px)] w-8 !justify-start bg-gradient-to-r from-white via-white to-transparent px-0 text-gray-500 hover:text-black lg:hidden dark:from-gray-50 dark:via-gray-50"
          >
            <PiCaretLeftBold className="w-5" />
          </Button>
          <div className="flex h-[52px] items-start overflow-hidden">
            <div
              className="-mb-7 flex w-full gap-3 overflow-x-auto scroll-smooth pb-7 md:gap-5 lg:gap-8"
              ref={sliderEl}
            >
              {menuItems.map((menu, index) => (
                <div
                  key={`menu-${index}`}
                  onClick={() => setActiveItem(menu.value)}
                  className={cn(
                    'group relative cursor-pointer whitespace-nowrap py-2.5 font-medium text-gray-500 before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-0.5  before:bg-gray-1000 before:transition-all hover:text-gray-900',
                    menu.value === activeItem
                      ? 'before:visible before:w-full before:opacity-100 text-gray-900'
                      : 'before:invisible before:w-0 before:opacity-0 text-gray-500'
                  )}
                >
                  <Text
                    as="span"
                    className="inline-flex rounded-md px-2.5 py-1.5 transition-all duration-200 group-hover:bg-gray-100/70"
                  >
                    {menu.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <Button
            title="Next"
            variant="text"
            ref={sliderNextBtn}
            onClick={() => scrollToTheRight()}
            className="!absolute right-0 top-0.5 z-10 !h-[calc(100%-4px)] w-8 !justify-end bg-gradient-to-l from-white via-white to-transparent px-0 text-gray-500 hover:text-black lg:hidden dark:from-gray-50 dark:via-gray-50"
          >
            <PiCaretRightBold className="w-5" />
          </Button>
        </div>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </>
  );
}
