import { ZodType, z } from 'zod';
import { FieldError, UseFormRegister } from 'react-hook-form';

export type TicketFormData = {
	subject: string;
	name: string;
	email: string;
	team: string;
	agent: string;
	priority: string;
	status: string;
	textArea: string;
};

export type TicketFormFieldProps = {
	type: string;
	placeholder: string;
	name: TicketValidFieldNames;
	register: UseFormRegister<TicketFormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export type TicketValidFieldNames =
	| 'subject'
	| 'name'
	| 'email'
	| 'team'
	| 'agent'
	| 'priority'
	| 'status'
	| 'textArea';

export const CreateTicketSchema: ZodType<TicketFormData> = z.object({
	subject: z
		.string({ message: 'Subject is required', required_error: 'Subject is required' })
		.min(10, { message: 'Subject is required' }),
	name: z
		.string({ required_error: 'Requester name is required' })
		.min(3, { message: 'Name is required, minimal 3 characters' }),
	email: z
		.string({ required_error: 'Requester email is required' })
		.email({ message: 'Must be an email' }),
	team: z
		.string({ required_error: 'Team must be selected', message: 'Team must be selected' })
		.min(3, { message: 'Team is required, minimal 3 characters' }),
	agent: z.string({ required_error: 'Agent must be selected' }),
	priority: z.string({ required_error: 'Priority must be selected' }),
	status: z.string({ required_error: 'Status must be selected' }),
	textArea: z.string({ required_error: 'Text area must be filled' }),
});

export type TicketErrors = {
	errors?: {
		subject?: string[];
		name?: string[];
		email?: string[];
		team?: string[];
		agent?: string[];
		priority?: string[];
		status?: string[];
		textArea?: string[];
	};
	message?: string | null;
};
