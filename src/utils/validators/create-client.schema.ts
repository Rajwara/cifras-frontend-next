import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const clientFormSchema = z.object({
  name: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().optional(),
  phoneNumber: z.coerce.number().min(1, { message: messages.phoneNumberRequired }),
  alias: z.string().min(1, { message: messages.aliasRequired }),
  images: z.array(fileSchema).optional(),
  email: z.string().min(1, { message: messages.emailRequired }),
  ruc: z.string().min(1, { message: messages.rucRequired }),
  dv: z.string().min(1, { message: messages.dvRequired }),

});
export type CreateClientInput = z.infer<typeof clientFormSchema>;