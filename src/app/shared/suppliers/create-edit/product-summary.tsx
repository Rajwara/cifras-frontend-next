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

export default function ProductSummary({
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

      <Controller
        name="phone"
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

   
        <Controller
            name="addressType"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                dropdownClassName="!z-0"
                options={addressTypeOption}
                value={value}
                onChange={onChange}
                label="Address Type"
                error={errors?.addressType?.message as string}
                getOptionValue={(option) => option.label}
              />
            )}
          />
        <Input
        label="First Street"
        placeholder="first street"
        {...register('firstStreet')}
        error={errors.firstStreet?.message as string}
      />
        <Input
        label="Second Street"
        placeholder="second street"
        {...register('secondStreet')}
        error={errors.secondStreet?.message as string}
      />
        <Input
        label="Province"
        placeholder="province"
        {...register('province')}
        error={errors.province?.message as string}
      />
          <Input
        label="District"
        placeholder="district"
        {...register('district')}
        error={errors.district?.message as string}
      />
          <Input
        label="Jurisdiction"
        placeholder="jurisdiction"
        {...register('jurisdiction')}
        error={errors.jurisdiction?.message as string}
      />
          <Input
        label="Country"
        placeholder="country"
        {...register('country')}
        error={errors.country?.message as string}
      />
   <Controller
            name="supplierType"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                dropdownClassName="!z-0"
                options={supplierTypeOption}
                value={value}
                onChange={onChange}
                label="Contributor Type"
                error={errors?.supplierType?.message as string}
                getOptionValue={(option) => option.label}
              />
            )}
          />
    </FormGroup>
  );
}

const supplierTypeOption = [
  {
    value: 'local',
    label: 'LOCAL',
  },
  {
    value: 'international',
    label: 'INTERNATIONAL',
  },
  {
    value: 'national',
    label: 'NATIONAL',
  },
];

const addressTypeOption = [
  {
    value: 'primary',
    label: 'PRIMARY',
  },
  {
    value: 'secondary',
    label: 'SECONDARY',
  },
  {
    value: 'billing',
    label: 'BILLING',
  },
  {
    value: 'shipping',
    label: 'SHIPPING',
  },
  {
    value: 'mailing',
    label: 'MAILING',
  },

];