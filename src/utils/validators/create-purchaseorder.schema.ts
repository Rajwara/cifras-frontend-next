import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const purchaseorderFormSchema = z.object({
  name: z.string().min(1, { message: messages.nameRequired }),
  description: z.string().optional(), 
  unitprice: z.coerce.number().min(1, { message: messages.unitpriceRequired }),
  unitofmeasure: z.coerce.number().min(1, { message: messages.unitofMeasureRequired }),
  phoneNumber: z.coerce.number().min(1, { message: messages.phoneNumberRequired }),
  dateofpurchasing: z.coerce.number().min(1, { message: messages.dateofpurchasingRequired }),
  availablestock: z.coerce.number().min(1, { message: messages.availablestockRequired }),
  Vendor: z.coerce.number().min(1, { message: messages.vendorRequired }),
  alias: z.string().min(1, { message: messages.aliasRequired }),
  image: z.array(fileSchema).optional(),


});
export type CreatePurchaseOrderInput = z.infer<typeof purchaseorderFormSchema>;