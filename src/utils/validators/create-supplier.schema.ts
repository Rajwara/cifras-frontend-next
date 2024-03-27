import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';

export const SupplierFormSchema = z.object({

  name: z.string().min(1, { message: messages.nameRequired }),
  email: z.string().min(1, { message: messages.emailRequired }),

  alias: z.string().min(1,{message: messages.aliasRequired}),
  phone: z.string().min(1,{message: messages.phoneNumberRequired}),
  ruc: z.string().min(1,{message: messages.rucRequired}),
  dv: z.string().min(1,{message: messages.dvRequired}),
  // address: z.string().min(1,{message: messages.addressRequired}),
  addressType: z.string().min(1, { message: messages.addressType }),
  firstStreet: z.string().min(1, { message: messages.firstStreet }),
  secondStreet: z.string().min(1, { message: messages.secondStreet }),
  province: z.string().min(1, { message: messages.province }),
  district: z.string().min(1, { message: messages.district }),
  jurisdiction: z.string().min(1, { message: messages.jurisdiction }),
  country: z.string().min(1, { message: messages.country }),
  supplierType: z.string().min(1, { message: messages.supplierType }),
  
});

export type CreateSupplierInput = z.infer<typeof SupplierFormSchema>;
