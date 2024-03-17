import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'rizzui';
import cn from '@/utils/class-names';
import FormGroup from '@/app/shared/form-group';
import {
  categoryOption,
  typeOption,
} from '@/app/shared/purchaseorders/create-edit/form-utils';
import dynamic from 'next/dynamic';
import SelectLoader from '@/components/loader/select-loader';
import QuillLoader from '@/components/loader/quill-loader';
import { DatePicker } from '@/components/ui/datepicker';
import { Textarea } from 'rizzui';

const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
  ssr: false,
  loading: () => <SelectLoader />,
});
const QuillEditor = dynamic(() => import('@/components/ui/quill-editor'), {
  ssr: false,
  loading: () => <QuillLoader className="col-span-full h-[143px]" />,
});

export default function PurchasOrderSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Summary"
      description="Edit your Purchase Order description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Purchase Order Number"
        placeholder="Purchase Order Number"
        {...register('poNumber')}
        error={errors.poNumber?.message as string}
        className="col-span-full "
      />
       {/* <Controller
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
      /> */}
       <Controller
            name="Purchase Order Date"
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <DatePicker
                inputProps={{ label: 'Purchase Order Date' }}
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
        label="Status"
        placeholder="Status"
        {...register('status')}
        error={errors.status?.message as string}
      />
         <Input
        label="Sub Total"
        placeholder="0.00"
        {...register('subTotal')}
        error={errors.subTotal?.message as string}
      />
   <Input
        label="Tax"
        placeholder="Tax"
        {...register('tax')}
        error={errors.tax?.message as string}
      />
      {/* <Input
        label="Date of Purchasing"
        placeholder="1 Jan, 2014"
        {...register('dateofPurchasing')}
        error={errors.dateofPurchasing?.message as string}
      /> */}
      <Input
        label="Shipping"
        placeholder="Shipping"
        {...register('shipping')}
        error={errors.shipping?.message as string}
        // className="col-span-full "
      />
       <Input
        label="Total"
        placeholder="0.00"
        {...register('total')}
        error={errors.total?.message as string}
        // className="col-span-full "
      />
       <Textarea
        label="Notes (optional)"
        placeholder="Notes about your Purchase Odrer, e.g. special notes for delivery."
        {...register('note')}
        error={errors.note?.message as string}
        textareaClassName="h-20"
        className="col-span-full "
      />

      {/* <Controller
                    name="status"
                    control={control}
                    render={({ field: { name, onChange, value } }) => (
                      <Select
                        dropdownClassName="!z-10"
                        inPortal={false}
                        options={statusOptions}
                        value={value}
                        onChange={onChange}
                        name={name}
                        label="Status"
                        // error={errors?.status?.message}
                        getOptionValue={(option) => option.value}
                        getOptionDisplayValue={(option) =>
                          renderOptionDisplayValue(option.value as string)
                        }
                        displayValue={(selected: string) =>
                          renderOptionDisplayValue(selected)
                        }
                      />
                    )}
                  /> */}
     
    </FormGroup>
  );
}
