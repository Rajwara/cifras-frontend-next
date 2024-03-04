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

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function ProductSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
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
  );
}
