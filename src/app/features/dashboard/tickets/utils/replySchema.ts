import { ZodType, z } from 'zod';
import { isEmptyHtml } from './ticketSchema';

export type ReplyFormData = {
	textArea: string;
};

export type ReplyValidFieldNames = 'textArea';

export const ReplyFormSchema: ZodType<ReplyFormData> = z.object({
	textArea: z
		.string({ required_error: 'Text area must be filled' })
		.min(17, { message: 'Minimum 10 characters please' })
		.refine((val) => !isEmptyHtml(val), {
			message: 'Text area must be filled',
		}),
});
