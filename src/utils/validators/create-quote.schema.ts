import { z } from 'zod';
import { messages } from '@/config/messages';
import { fileSchema } from '@/utils/validators/common-rules';
export const quoteFormSchema = z.object({
  quoteNumber: z.string().min(1, { message: messages.quoteNumberRequired }),
  notes: z.string().optional(),
//   productImages: z.array(fileSchema).optional(),
  // unitprice: z.coerce.number().min(1, { message: messages.unitpriceRequired }),
  quoteDate: z.date({
required_error: messages.quoteDateRequired,
  }),
  notificationDate: z.date({
    required_error: messages.notificationDateRequired,
      }),
      expirationDate: z.date({
        required_error: messages.expirationDateRequired,
          }),
          taxAmount: z.string().min(1, { message: messages.taxAmountRequired }),
});
export type CreateQuoteInput = z.infer<typeof quoteFormSchema>;