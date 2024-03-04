import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';

export const SupplierFormSchema = z.object({

  name: z.string().min(1, { message: messages.nameRequired }),
  alias: z.string().min(1,{message: messages.aliasRequired}),
  phoneNumber: z.string().min(1,{message: messages.phoneNumberRequired}),
  ruc: z.string().min(1,{message: messages.rucRequired}),
  dv: z.string().min(1,{message: messages.dvRequired}),
  address: z.string().min(1,{message: messages.addressRequired}),
  
});

export type CreateSupplierInput = z.infer<typeof SupplierFormSchema>;