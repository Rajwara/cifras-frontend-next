import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/clients/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
import { PhoneNumber } from '@/components/ui/phone-input';
const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

interface AddressInfoProps {
  type: string;
  title?: string;
  className?: string;
}


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
      description="Edit your Clients description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Name"
        placeholder="Name"
        {...register('name')}
        error={errors.name?.message as string}
      />
        <Input
        label="Email"
        placeholder="Email"
        {...register('email')}
        error={errors.email?.message as string}
      />
      <Input
        label="Alias"
        placeholder="Alias"
        {...register('alias')}
        error={errors.alias?.message as string}
      />
       
         <Input
        label="RUC"
        placeholder="RUC"
        {...register('ruc')}
        error={errors.ruc?.message as string}
      />
         <Input
        label="DV"
        placeholder="Dv"
        {...register('dv')}
        error={errors.dv?.message as string}
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

      {/* <Controller
        control={control}
        name="Address"
        render={({ field: { onChange, value } }) => (
          <QuillEditor
            value={value}
            onChange={onChange}
            label="Address"
            className="col-span-full [&_.ql-editor]:min-h-[100px]"
            labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
          />
        )}
      /> */}
    </FormGroup>
  );
}
