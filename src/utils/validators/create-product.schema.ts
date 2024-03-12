import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const productFormSchema = z.object({
  itemname: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().optional(),
  productImages: z.array(fileSchema).optional(),
  unitprice: z.coerce.number().min(1, { message: messages.unitpriceRequired }),
  unitofMeasure: z.coerce.number().min(1, { message: messages.unitofMeasureRequired }),
  vendor: z.string().min(1, { message: messages.vendorRequired }),
});
export type CreateProductInput = z.infer<typeof productFormSchema>;