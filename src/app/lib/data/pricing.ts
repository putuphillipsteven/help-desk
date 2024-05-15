export interface Pricing {
	name: string;
	price: number;
	description: string;
	accesses: string[];
}

type Pricings = Pricing[];

export const pricings: Pricings = [
	{
		name: 'Standard',
		price: 100000,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		accesses: [
			'Live chat for support',
			'Team inboxes',
			'Ticketing workflows',
			'Service Level Agreement rules',
			'Workload management',
			'Role-based permissions',
			'Outcome reporting',
		],
	},
	{
		name: 'Plus',
		price: 200000,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		accesses: [
			'Outbound email and in-product',
			'Messaging',
			'Push messages & notifications',
			'Custom bots',
			'Mobile Carousels',
			'Banner messages',
			'Multi-channel campaigns',
			'A/B testing & control groups',
			'Message versioning',
		],
	},
	{
		name: 'Company',
		price: 300000,
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		accesses: [
			'Conversational chatbots',
			'Live chat for sales',
			'Smart lead qualification',
			'Service Level Agreement rules',
			'Workload management',
			'Role-based permissions',
			'Outcome reporting',
			'Multiple team inboxes',
			'Automatic meeting booking',
			'Conversation routing rules',
			'Account-based assignments',
			'Revenue and performance',
		],
	},
];
