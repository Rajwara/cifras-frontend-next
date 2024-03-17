import { CreateProductInput } from '@/utils/validators/create-product.schema';
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

export function defaultValues(product?: CreateProductInput) {
  return {
    itemname: product?.itemname ?? '',
    vendor: product?.vendor ?? '',
    description: product?.description ?? '',
    unitprice: product?.unitprice ?? undefined,
    unitofMeasure: product?.unitofMeasure ?? undefined,
    productImages: product?.productImages ?? undefined,
   
  };
}

export const productData = {
  itemname: 'Apple',
  description: 'Fresh Express Iceberg Garden Salad Blend',
  vendor: 'Grocery',
  unitprice: 10,
  unitofMeasure: 20,
  productImages: undefined,  
};


