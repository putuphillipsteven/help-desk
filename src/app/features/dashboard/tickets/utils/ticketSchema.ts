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

export const isEmptyHtml = (input: string) => {
	return input.trim() === '<p><br></p>';
};

export const CreateTicketSchema: ZodType<TicketFormData> = z.object({
	subject: z
		.string({ message: 'Subject is required', required_error: 'Subject is required' })
		.min(10, { message: 'Subject is required, min 10 characters' }),
	name: z
		.string({ required_error: 'Requester name is required' })
		.min(3, { message: 'Minimal 3 characters' }),
	email: z
		.string({ required_error: 'Requester email is required' })
		.email({ message: 'Must be an email' }),
	team: z.enum(['Dimata', 'Apple', 'All Team(default team)'], {
		message: 'Please select the team',
	}),
	agent: z.enum(['Vinky Sedana', 'Phillip Steven'], { message: 'Please select the agent' }),
	priority: z.enum(['Low', 'Medium', 'High'], { message: 'Please select the priority' }),
	status: z.enum(['Plan', 'Pending', 'In Progress'], { message: 'Please select the status' }),
	textArea: z
		.string({ required_error: 'Text area must be filled' })
		.min(17, { message: 'Minimum 10 characters please' })
		.refine((val) => !isEmptyHtml(val), {
			message: 'Text area must be filled',
		}),
});
