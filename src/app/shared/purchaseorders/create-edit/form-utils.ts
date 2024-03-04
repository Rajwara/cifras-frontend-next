import { CreatePurchaseOrderInput } from '@/utils/validators/create-purchaseorder.schema';
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

export function defaultValues(purchaseorder?: CreatePurchaseOrderInput) {
  return {
    name: purchaseorder?.name ?? '',
    vendor: purchaseorder?.Vendor ?? '',
    description: purchaseorder?.description ?? '',
    unitprice: purchaseorder?.unitprice ?? '',
    unitofMeasure: purchaseorder?.unitofmeasure ?? '',
    availablestock: purchaseorder?.availablestock??'',
    dateofpurchasing: purchaseorder?.dateofpurchasing??'',
  };
}

export const purchaseorderData = {
  name: 'Apple',
  description: 'Fresh Express Iceberg Garden Salad Blend',
  vendor: 'Grocery',
  unitprice: 10,
  unitofMeasure: 20,
  productImages: undefined,  
  availablestock: 2,
  dateofpurchasing: "10 jan, 2024",
};


