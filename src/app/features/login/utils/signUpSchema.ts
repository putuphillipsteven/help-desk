import { ZodType, z } from 'zod';

export type SignUpData = {
	// firstname: string;
	// lastname: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

export const SignUpSchema: ZodType<SignUpData> = z
	.object({
		// firstname: z.string().min(3, { message: 'Minimal 3 characters' }),
		// lastname: z.string().min(3, { message: 'Minimal 3 characters' }),
		email: z
			.string()
			.min(3, { message: 'Min 3 characters' })
			.email({ message: 'Invalid email address' }),
		password: z.string().min(8, { message: 'Minimum 8 characters' }).regex(passwordRules, {
			message: 'Minimum 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number',
		}),
		confirmPassword: z.string().min(8, { message: 'Minimal 8 characters' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'], // Specify the path to the field that should show the error message
	});
