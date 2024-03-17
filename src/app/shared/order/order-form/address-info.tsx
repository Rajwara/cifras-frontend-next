'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { PhoneNumber } from '@/components/ui/phone-input';
import { Input, Title } from 'rizzui';
import cn from '@/utils/class-names';
import { DatePicker } from '@/components/ui/datepicker';

interface AddressInfoProps {
  type: string;
  title?: string;
  className?: string;
}

export default function AddressInfo({
  type,
  title,
  className,
}: AddressInfoProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn('grid grid-cols-2 gap-3 @lg:gap-4 @2xl:gap-5', className)}
    >
      {title && (
        <Title as="h3" className="col-span-full font-semibold">
          {title}
        </Title>
      )}

      <Input
        label="Order Number"
        placeholder="Order Number"
        {...register(`${type}.orderNumber`)}
        // @ts-ignore
        error={errors?.[type]?.orderNumber?.message as any}
      />
      {/* <Controller
        name={`${type}.phoneNumber`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <PhoneNumber
            label="Phone Number"
            country="us"
            value={value}
            onChange={onChange}
            // @ts-ignore
            error={errors?.[type]?.phoneNumber?.message as string}
          />
        )}
      /> */}
      {/* <Input
        label="Country"
        placeholder="Country"
        {...register(`${type}.country`)}
        // @ts-ignore
        error={errors?.[type]?.country?.message as string}
      /> */}
      <Input
        label="State"
        placeholder="State"
        {...register(`${type}.state`)}
        // @ts-ignore
        error={errors?.[type]?.state?.message as string}
      />
      <Input
        label="Sales Person"
        placeholder="Sales Person"
        {...register(`${type}.salesPerson`)}
        // @ts-ignore
        error={errors?.[type]?.salesPerson?.message as string}
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
      {/* <Input
        label="ZIP / Postcode"
        placeholder="ZIP / postcode"
        {...register(`${type}.zip`)}
        // @ts-ignore
        error={errors?.[type]?.zip?.message as string}
      /> */}
      {/* <Input
        label="Street Address"
        placeholder="Street Address"
        className="col-span-full"
        {...register(`${type}.street`)}
        // @ts-ignore
        error={errors?.[type]?.street?.message as string}
      /> */}
    </div>
  );
}
