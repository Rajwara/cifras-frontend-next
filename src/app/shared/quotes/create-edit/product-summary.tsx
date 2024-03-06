import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/quotes/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
import { DatePicker } from '@/components/ui/datepicker';
import { IoClose } from "react-icons/io5";


const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

const Quotesidebar = ({ onClose }:any) => {
  return (
    // side bar start
    <div className='sidebar border border-[#ebebeb] rounded'>
      <div className='quotesidebar flex flex-col gap-4 px-6 pt-[100px] pb-[130px]    bg-white'>
        <h2 className='font-lexend font-semibold text-[#634AF9] text-lg leading-9'>
          Quote Summary
        </h2>
        <div className='flex gap-2 items-center'>
          <img src="/quote/sidebarlines.svg" alt='' className='w-6 h-6' />
          <p className='text-[#404040] text-base font-inter font-medium leading-7'>
            Lines: <span className='text-[#C0C0C0] text-sm'> 00</span>
          </p>
        </div>
        <div className='flex gap-2 items-center'>
          <img src="/quote/sidebarsubtotal.svg" alt='' className='w-6 h-6' />
          <p className='text-[#404040] text-base font-inter font-medium leading-7'>
            SubTotal: <span className='text-[#C0C0C0] text-sm'> 0.00</span>
          </p>
        </div>
        <div className='flex gap-2 items-center'>
          <img src="/quote/sidebarcommision.svg" alt='' className='w-6 h-6' />
          <p className='text-[#404040] text-base font-inter font-medium leading-7'>
            Commision: <span className='text-[#C0C0C0] text-sm'> 0.00</span>
          </p>
        </div>
        <div className='flex gap-2 items-center'>
          <img src="/quote/sidebardiscount.svg" alt='' className='w-6 h-6' />
          <p className='text-[#404040] text-base font-inter font-medium leading-7'>
            Discount %: <span className='text-[#C0C0C0] text-sm'> 0.00</span>
          </p>
        </div>
        <div className='flex gap-2 items-center '>
          <img src="/quote/sidebartotal.svg" alt='' className='w-6 h-6' />
          <p className='text-[#404040]  text-base font-inter font-medium leading-7'>
            Total $: <span className='text-[#C0C0C0] text-sm'> 0.00</span>
          </p>
        </div>
        <button onClick={onClose} className='close-btn absolute top-[50px] '>
          <IoClose className='w-8 h-8 text-[#634AF9]' />
        </button>
      </div>
    </div>
    // side end start
  );
};

export default function ProductSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const [isSideComponentVisible, setIsSideComponentVisible] = useState(false);

  const toggleSideComponent = () => {
    setIsSideComponentVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className='flex flex-col md:flex-row gap-10 w-full md:items-center'>
      <div className='form md:w-[80%]'>
    <FormGroup
      title="Summary"
      description="Edit your quotes description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Quote Name"
        placeholder="Q - 59"
        {...register('name')}
        error={errors.name?.message as string}
      />
           <Controller
            name="quoteDate"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Quote Date' }}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                onBlur={onBlur}
                wrapperClassName="w-full"
                //@ts-ignore
                selected={value}
              />
            )}
          />
           <Controller
            name="notificationDate"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Notification Date' }}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                onBlur={onBlur}
                wrapperClassName="w-full"
                //@ts-ignore
                selected={value}
              />
            )}
          />
           <Controller
            name="expirationDate"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Expiration Date' }}
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                onBlur={onBlur}
                wrapperClassName="w-full"
                //@ts-ignore
                selected={value}
              />
            )}
          />
      <Input
        label="Client"
        placeholder="Client"
        {...register('client')}
        error={errors.client?.message as string}
        className="col-span-full"
      />
       
    </FormGroup>
    </div>
    <div className='sidebar relative right-0 left-0 lg:w-[25%] xl:w-[17%]'>
    <div className={`  flex justify-end`}>
        {isSideComponentVisible ? (
          <button onClick={toggleSideComponent}>
            <img src="/quote/quotesideiconbuttonfor.svg" alt='sideicon' className='w-[130px] h-[189px]' />
          </button>
        ) : (
          <Quotesidebar onClose={toggleSideComponent} />
        )}
      </div>
    </div>
    </div>
  );
}
