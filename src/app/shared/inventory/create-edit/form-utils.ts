import { CreateInventeryInput } from '@/utils/validators/create-inventery.schema';
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

export function defaultValues(inventery?: CreateInventeryInput) {
  return {
    itemname: inventery?.itemname ?? '',
    vendor: inventery?.vendor ?? '',
    description: inventery?.description ?? '',
    unitprice: inventery?.unitprice ?? undefined,
    unitofMeasure: inventery?.unitofMeasure ?? undefined,
    // productImages: inventery?.productImages ?? undefined,
    onhandqty:  inventery?.onhandqty ?? '',
    incomingqty:  inventery?.incomingqty ?? '',
    reservedqty: inventery?.reservedqty ?? '',
   
  };
}

export const inventeryData = {
  itemname: 'Apple',
  description: 'Fresh Express Iceberg Garden Salad Blend',
  vendor: 'Grocery',
  unitprice: 10,
  unitofMeasure: 20,
  // productImages: undefined,
  onhandqty: "28909",
  incomingqty:"898",
  reservedqty :"8989",
};


