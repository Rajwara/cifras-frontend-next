import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/suppliers/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
import { PhoneNumber } from '@/components/ui/phone-input';
import { Textarea } from 'rizzui';

interface AddressInfoProps {
  type: string;
  title?: string;
  className?: string;
}


const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function ProductSummary({   type,
  title,
  className,
}: AddressInfoProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();


  return (
    <FormGroup
      title="Summary"
      description="Edit your Supplier description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Name"
        placeholder="Enter your name"
        {...register('name')}
        error={errors.name?.message as string}
      />
      <Input
        label="Alias"
        placeholder="Alias"
        {...register('alias')}
        error={errors.alias?.message as string}
      />
      
      <Controller
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
      />
        <Input
        label="Ruc"
        placeholder="Ruc"
        {...register('ruc')}
        error={errors.ruc?.message as string}
      />
     
         <Input
        label="DV"
        placeholder="Dv"
        {...register('dv')}
        error={errors.dv?.message as string}
      />
 

 <Textarea
        label="Address"
        placeholder="Enter your address"
        {...register('address')}
        error={errors.address?.message as string}
        textareaClassName="h-20 "
      />
    
    </FormGroup>
  );
}
