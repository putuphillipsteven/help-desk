import { ZodType, z } from 'zod';

export type SignInData = {
	email: string;
	password: string;
};

export const SignInSchema: ZodType<SignInData> = z.object({
	email: z.string().min(3, { message: 'Minimal 3 characters' }),
	password: z.string().min(3, { message: 'Minimal 3 characters' }),
});
