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

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { routes } from '@/config/routes';
import usePrice from '@/hooks/use-price';
import OrderProducts from '../../checkout/order-products';
import { Button, Title, Text } from 'rizzui';
import { toCurrency } from '@/utils/to-currency';
import { useCart } from '@/store/quick-cart/cart.context';



const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

 const Quotesidebar =({
  isLoading,
  className,
}: {
  className?: string;
  isLoading?: boolean;
}) => {
  const params = useParams();
  const { items, total, addItemToCart, removeItemFromCart, clearItemFromCart } =
    useCart();
  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );
  const { price: totalPrice } = usePrice({
    amount: total,
  });
  return (
    // side bar start
    <div
    className={cn(
      'sticky top-24 mt-16  @5xl:col-span-4 w-full  @6xl:col-span-3 ',
      className
    )}
  >
    <Title as="h4" className="mb-3 font-semibold">
      Your Qoute
    </Title>
    <div className="rounded-lg  border border-[#ebebeb] p-4 @xs:p-6 @5xl:rounded-none @5xl:border-none @5xl:px-0">
      <div className="flex justify-between rounded-tl-lg rounded-tr-lg border-b border-muted pb-4 @xs:pb-6">
        Qoute items
        <Link href={routes.eCommerce.cart}>
          <Button
            as="span"
            variant="text"
            className="h-auto w-auto p-0 text-primary underline hover:text-gray-1000"
          >
            Edit Cart
          </Button>
        </Link>
      </div>
      <div className="pt-4 @xl:pt-6">
        <OrderProducts
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
          clearItemFromCart={clearItemFromCart}
          items={items}
          className="mb-5 border-b border-muted pb-5"
        />
        <div className="mb-4 flex items-center justify-between last:mb-0">
          Subtotal
          <Text as="span" className="font-medium text-gray-900">
            {subtotal}
          </Text>
        </div>
        <div className="mb-4 flex items-center justify-between last:mb-0">
          Tax
          <Text as="span" className="font-medium text-gray-900">
            {toCurrency(0)}
          </Text>
        </div>
        <div className="mb-4 flex items-center justify-between last:mb-0">
          Shipping
          <Text as="span" className="font-medium text-gray-900">
            {toCurrency(0)}
          </Text>
        </div>
        <div className="flex items-center justify-between border-t border-muted py-4 text-base font-bold text-gray-1000">
          Total
          <Text>{totalPrice}</Text>
        </div>

        {items && items?.length ? (
          <Button
            type="submit"
            isLoading={isLoading}
            className="mt-3 w-full text-base @md:h-12"
          >
            {params?.id ? 'Update Qoute' : 'Place Qoute'}
          </Button>
        ) : (
          <Link href={routes.eCommerce.shop}>
            <Button
              as="span"
              className="mt-3 w-full text-base @md:h-12"
            >{`Back to Store`}</Button>
          </Link>
        )}
      </div>
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
      <div className='form md:w-[70%]'>
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
    <div className='sidebar relative right-0 left-0 lg:w-[25%] xl:w-[30%]'>
    <div className={`  flex justify-end`}>
      <Quotesidebar />
        {/* {isSideComponentVisible ? (
          <button onClick={toggleSideComponent}>
            <img src="/quote/quotesideiconbuttonfor.svg" alt='sideicon' className='w-[130px] h-[189px]' />
          </button>
        ) : (
          <Quotesidebar onClose={toggleSideComponent} />
        )} */}
      </div>
    </div>
    </div>
  );
}
