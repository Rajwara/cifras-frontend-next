import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const clientFormSchema = z.object({
  name: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().optional(),
  phone: z.coerce.string().min(1, { message: messages.phoneNumberRequired }),
  alias: z.string().optional(),
  images: z.array(fileSchema).optional(),
  email: z.string().min(1, { message: messages.emailRequired }),
  ruc: z.string().min(1, { message: messages.rucRequired }),
  dv: z.string().min(1, { message: messages.dvRequired }),
  addressType: z.string().min(1, { message: messages.addressType }),
  firstStreet: z.string().min(1, { message: messages.firstStreet }),
  secondStreet: z.string().min(1, { message: messages.secondStreet }),
  province: z.string().min(1, { message: messages.province }),
  district: z.string().min(1, { message: messages.district }),
  jurisdiction: z.string().min(1, { message: messages.jurisdiction }),
  country: z.string().min(1, { message: messages.country }),
  receptorFeType: z.string().min(1, { message: messages.receptorFeType }),
  contributorType: z.string().min(1, { message: messages.contributorType }),

});
export type CreateClientInput = z.infer<typeof clientFormSchema>;