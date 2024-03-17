import { z } from 'zod';
import { messages } from '@/config/messages';

// form zod validation schema
export const createreportSchema = z.object({
  reportName: z
    .string()
    .min(1, { message: messages.reportNameIsRequired })
    .min(3, { message: messages.reportNameLengthMin }),
  reportColor: z
    .object({
      r: z.number(),
      g: z.number(),
      b: z.number(),
      a: z.number(),
    })
    .optional(),
});

// generate form types from zod validation schema
export type CreatereportInput = z.infer<typeof createreportSchema>;
