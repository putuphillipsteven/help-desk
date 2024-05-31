import { ZodType, z } from 'zod';

export type SignUpData = {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
};

export const SignUpSchema: ZodType<SignUpData> = z.object({
	firstname: z.string().min(3, { message: 'Minimal 3 characters' }),
	lastname: z.string().min(3, { message: 'Minimal 3 characters' }),
	email: z.string().min(3, { message: 'Minimal 3 characters' }),
	password: z.string().min(3, { message: 'Minimal 3 characters' }),
});
