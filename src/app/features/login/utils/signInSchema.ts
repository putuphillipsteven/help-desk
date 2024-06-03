import { ZodType, z } from 'zod';

export type SignInData = {
	email: string;
	password: string;
};

export const SignInSchema: ZodType<SignInData> = z.object({
	email: z
		.string()
		.min(3, { message: 'Min 3 characters' })
		.email({ message: 'Invalid email address' }),
	password: z.string().min(1, { message: 'Please fill the password' }),
});
