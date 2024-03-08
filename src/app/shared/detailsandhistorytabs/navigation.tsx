'use client';

import React, { useEffect, useState } from 'react';
import { Button, Text, Input, ActionIcon } from 'rizzui';
import cn from '@/utils/class-names';
import { useScrollableSlider } from '@/hooks/use-scrollable-slider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import { useBerylliumSidebars } from '@/layouts/beryllium/beryllium-utils';
<<<<<<< HEAD
import { Controller, useFormContext, FormProvider, useForm, useFieldArray } from 'react-hook-form';
import FormGroup from '@/app/shared/form-group';

import {
  categoryOption,
  typeOption,
} from '@/app/shared/ecommerce/product/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';

import { calculateTotalPrice } from '@/utils/calculate-total-price';
import { PiMinusBold, PiPlusBold, PiTrashBold } from 'react-icons/pi';
import { FormBlockWrapper } from '@/app/shared/invoice/form-utils';
=======
import { Input } from 'rizzui';
import { Controller, useFormContext } from 'react-hook-form';
import FormGroup from '@/app/shared/form-group';
>>>>>>> 34a2cf1f50ac9814cb4265b7bdab31700da81fdd

const menuItems = [
  {
    label: 'My Details',
    value: 'myDetails',
  },
  {
    label: 'History',
    value: 'history',
  },
];

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function ProfileSettingsNav({ className }: { className?: string }) {
  const methods = useForm(); // Get useForm hook

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

  const handleChange = (value: number) => {
    console.log('Quantity changed:', value);
  };

  const renderContent = ({
    name = 'quantity',
    error,
    onChange,
    defaultValue,
  }: {
    name: string;
    error?: string;
    onChange?: (value: number) => void;
    defaultValue?: number;
  }) => {
    const [value, setValue] = useState(defaultValue ?? 1);
  
    function handleIncrement() {
      let newValue = value + 1;
      setValue(newValue);
      onChange && onChange(newValue);
    }
  
    function handleDecrement() {
      let newValue = value > 1 ? value - 1 : 1;
      setValue(newValue);
      onChange && onChange(newValue);
    }
  
    function handleOnChange(inputValue: number) {
      setValue(Number(inputValue));
      onChange && onChange(inputValue);
    }
  
    useEffect(() => {
      setValue(defaultValue ?? 1);
      onChange && onChange(defaultValue ?? 1);
    }, []);
  
    switch (activeItem) {
      case 'myDetails':
        return (
          <div className="mt-5 w-full">
            <FormProvider {...methods}>
              <FormGroup
                title="Summary"
                description="Edit your detail description and necessary information from here"
                className={cn(className)}
              >
                <div className='flex flex-wrap gap-8 w-full'>
                  <div className='flex flex-wrap gap-8 w-full'>
                    <Input
                      label="Item"
                      placeholder="item"
                      {...methods.register('item')}
                      className="col-span-full w-[31%]"
                    />
                    <Input
                      label="Quantity"
                      type="number"
                      min={1}
                      name={name}
                      value={value}
                      placeholder="1"
                      onChange={(e) => handleOnChange(Number(e.target.value))}
                      className="col-span-full w-[31%]"
                      suffix={
                        <>
                          <ActionIcon
                            title="Decrement"
                            size="sm"
                            variant="outline"
                            className="scale-90 shadow-sm"
                            onClick={handleDecrement}
                          >
                            <PiMinusBold className="h-3.5 w-3.5" strokeWidth={2} />
                          </ActionIcon>
                          <ActionIcon
                            title="Increment"
                            size="sm"
                            variant="outline"
                            className="scale-90 shadow-sm"
                            onClick={handleIncrement}
                          >
                            <PiPlusBold className="h-3.5 w-3.5" strokeWidth={2} />
                          </ActionIcon>
                        </>
                      }
                      suffixClassName="flex gap-1 items-center -me-2"
                      error={error}
                    />
                      <Input
                      label="Price"
                      placeholder="$ 0.00"
                      {...methods.register('price')}
                      // error={methods.errors.price?.message}
                      className="col-span-full w-[31%]"
                    />
                  </div>
                  {/* <div className='flex flex-wrap gap-8 w-full'>
                </div> */}
                  <div className='flex flex-wrap gap-8 w-full'>
                  <Input
                      label="Commission"
                      placeholder="$ 0.00"
                      {...methods.register('commission')}
                      // error={methods.errors.item?.message}
                      className="col-span-full w-[31%]"
                    />
                    <Input
                      label="Rate"
                      placeholder="% 0.00"
                      {...methods.register('rate')}
                      // error={methods.errors.item?.message}
                      className="col-span-full w-[31%]"
                    />
                    <Input
                      label="Discount"
                      placeholder="$ 0.00"
                      {...methods.register('discount')}
                      // error={methods.errors.item?.message}
                      className="col-span-full w-[31%]"
                    />
                  </div>
                </div>
              </FormGroup>
            </FormProvider>
          </div>
        );
      case 'history':
        return (
          <div className='mt-5 relative overflow-x-auto'>
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
                  <td className='px-6 py-4 uppercase '>INSERT</td>
                  <td className='px-6 py-4'>2024-01-01</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
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
        {renderContent({})}
      </div>
    </>
  );
}
