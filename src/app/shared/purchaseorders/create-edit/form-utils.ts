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
    ponumber: purchaseorder?.ponumber ?? '',
    total: purchaseorder?.total ?? '',
    notes: purchaseorder?.notes ?? '',
    subtotal: purchaseorder?.subtotal ?? '',
    tax: purchaseorder?.tax ?? '',
    shipping: purchaseorder?.shipping??'',
    dateofpurchasing: purchaseorder?.dateofpurchasing??'',
  };
}

export const purchaseorderData = {
  ponumber: '8789889',
  total: '78987',
  notes: 'This is notes',
  subtotal: 10,
  tax: 20,
  // productImages: undefined,  
  shipping: "this is shipping",
  dateofpurchasing: "10 jan, 2024",
};


