import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const inventeryFormSchema = z.object({
  itemname: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().optional(),
  productImages: z.array(fileSchema).optional(),
  unitprice: z.coerce.number().min(1, { message: messages.unitpriceRequired }),
  unitofMeasure: z.coerce.number().min(1, { message: messages.unitofMeasureRequired }),
  onhandqty: z.coerce.number().min(1, { message: messages.onhandqtyRequired }),
  incomingqty: z.coerce.number().min(1, { message: messages.incomingqtyRequired }),
  reservedqty: z.coerce.number().min(1, { message: messages.reservedqtyRequired }),
  vendor: z.string().min(1, { message: messages.vendorRequired }),
});
export type CreateInventeryInput = z.infer<typeof inventeryFormSchema>;