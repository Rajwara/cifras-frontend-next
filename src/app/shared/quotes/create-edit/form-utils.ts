import { CreateQuoteInput } from '@/utils/validators/create-quote.schema';
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

export function defaultValues(quote?: CreateQuoteInput) {
  return {
    quoteNumber: quote?.quoteNumber ?? '',
    quoteDate: quote?.quoteDate ?? '',
    notificationDate: quote?.notificationDate ?? '',
    expirationDate: quote?.expirationDate ?? '',
    taxAmount: quote?.taxAmount ?? '',
    notes: quote?.notes ?? '',
   
  };
}

export const Data = {
  quoteNumber: '89hjjh88',
  quoteDate: "10-04-2024",
  notificationDate: "10-04-2024",
  expirationDate: "10-04-2024",
  taxAmount: "20%",
  notes: "This is notes",  
};


