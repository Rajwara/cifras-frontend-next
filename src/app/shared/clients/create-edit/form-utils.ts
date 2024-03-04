import { CreateClientInput } from '@/utils/validators/create-client.schema';
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

export function defaultValues(client?: CreateClientInput) {
  return {
    name: client?.name ?? '',
    alias: client?.alias ?? '',
    description: client?.description ?? '',
    phoneNumber: client?.phoneNumber ?? "",
   
  };
}

export const clientData = {
  name: 'Apple',
  description: 'Fresh Express Iceberg Garden Salad Blend',
  alias: 'Grocery',
  phoneNumber: +103333333333, 
};


