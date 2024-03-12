import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const purchaseorderFormSchema = z.object({
  ponumber: z.coerce.number().min(1, { message: messages.ponumberRequired }),
  status: z.string().min(1, { message: messages.statusRequired }),
  notes: z.string().optional(), 
  subtotal: z.coerce.number().min(1, { message: messages.subtotalRequired }),
  tax: z.coerce.number().min(1, { message: messages.taxRequired }),
  total: z.coerce.number().min(1, { message: messages.totalRequired }),
  dateofpurchasing: z.coerce.number().min(1, { message: messages.dateofpurchasingRequired }),
  shipping: z.string().min(1, { message: messages.shippingRequired }),
  // image: z.array(fileSchema).optional(),


});
export type CreatePurchaseOrderInput = z.infer<typeof purchaseorderFormSchema>;