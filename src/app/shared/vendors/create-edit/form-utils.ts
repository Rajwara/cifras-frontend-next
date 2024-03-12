import { CreateVendorInput } from '@/utils/validators/create-vendor.schema';
import isEmpty from 'lodash/isEmpty';

export const customFields = [
  {
    label: '',
    value: '',
  },
];
export const locationShipping = [
  {
    name: '',
    shippingCharge: '',
  },
];
export const productVariants = [
  {
    label: '',
    value: '',
  },
];

export function defaultValues(vendor?: CreateVendorInput) {
  return {
    name: vendor?.name ?? '',
    alias: vendor?.alias ?? '',
    phoneNumber: vendor?.phoneNumber ?? '',
    ruc: vendor?.ruc ?? "",
    dv: vendor?.dv ?? "",
    // address: vendor?.address ?? "",
   
  };
}

export const vendorData = {
  name: 'Apple',
  alias: 'Fresh Express Iceberg Garden Salad Blend',
  phoneNumber: '03057725129',
  ruc: "This is RUC",
  dv: "This is DV",
  // address: "This is addres",  
};


