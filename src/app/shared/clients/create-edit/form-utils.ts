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
    phoneNumber: client?.phone?? "",
    email: client?.email ?? "",
    image: client?.images ?? undefined,
    ruc: client?.ruc ?? "",
    dv: client?.dv ?? "",
  };
}

export const clientData = {
  name: 'Semon',
  description: 'Fresh Express Iceberg Garden Salad Blend',
  alias: 'Vendor',
  phoneNumber: +103333333333, 
  image: undefined,
  email:"asad55992!@gmail.com",
  ruc:" This is Ruc",
  dv:"This is Dv",
};


