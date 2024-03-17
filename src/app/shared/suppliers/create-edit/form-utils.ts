import { CreateSupplierInput } from '@/utils/validators/create-supplier.schema';
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

export function defaultValues(supplier?: CreateSupplierInput) {
  return {
    name: supplier?.name ?? '',
    alias: supplier?.alias ?? '',
    phoneNumber: supplier?.phoneNumber ?? '',
    ruc: supplier?.ruc ?? "",
    dv: supplier?.dv ?? "",
    // address: supplier?.address ?? "",
   
  };
}

export const supplierData = {
  name: 'Apple',
  alias: 'Fresh Express Iceberg Garden Salad Blend',
  phoneNumber: 'Grocery',
  ruc: "This is RUC",
  dv: "This is DV",
  // address: "This is addres",  
};


