import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/inventory/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
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
      description="Edit your inventory description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Item Name"
        placeholder="Item Name"
        {...register('itemname')}
        error={errors.itemname?.message as string}
        className="col-span-full"
      />
         <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <QuillEditor
            value={value}
            onChange={onChange}
            label="Description"
            className="col-span-full [&_.ql-editor]:min-h-[100px]"
            labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
          />
        )}
      />
      <Input
        label="Vendor"
        placeholder="Vendor"
        {...register('vendor')}
        error={errors.vendor?.message as string}
      />
        <Input
        label="Unit Price"
        placeholder="0.00"
        {...register('unitprice')}
        error={errors.unitprice?.message as string}
      />
         <Input
        label=" Unit of Measure"
        placeholder="0.00"
        {...register('unitofMeasure')}
        error={errors.unitofMeasure?.message as string}
      />
      {/* <Input
        label="Vendor"
        placeholder="Vendor"
        {...register('vendor')}
        error={errors.vendor?.message as string}
        className="col-span-full"
      /> */}
       <Input
        label="On Hand Qty"
        placeholder="00"
        {...register('onhandqty')}
        error={errors.onhandqty?.message as string}
      />
       <Input
        label="Incoming Qty"
        placeholder="00"
        {...register('incomingqty')}
        error={errors.incomingqty?.message as string}
      />
       <Input
        label="Reserved Qty"
        placeholder="00"
        {...register('reservedqty')}
        error={errors.reservedqty?.message as string}
        // className="col-span-full"
      />

   
    </FormGroup>
  );
}
