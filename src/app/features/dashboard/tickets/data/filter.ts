interface ParentFilterProp {
	name: string;
	children: {
		name: string;
		notification: number;
	}[];
}

type ParentFilterProps = ParentFilterProp[];
export const filters: ParentFilterProps = [
	{
		name: 'All Recent Tickets',
		children: [
			{ name: 'Ticket to handle', notification: 0 },
			{
				name: 'My Open Tickets',
				notification: 0,
			},
		],
	},
	{
		name: 'Status',
		children: [
			{ name: 'Open', notification: 0 },
			{
				name: 'Pending',
				notification: 0,
			},
			{
				name: 'On hold',
				notification: 0,
			},
			{
				name: 'Solved',
				notification: 0,
			},
			{
				name: 'Closed',
				notification: 0,
			},
			{
				name: 'Pending',
				notification: 0,
			},
		],
	},
	{
		name: 'Folders',
		children: [
			{
				name: 'Archive',
				notification: 0,
			},
			{ name: 'Spam', notification: 0 },
			{ name: 'Trash', notification: 0 },
			{ name: 'Solved', notification: 0 },
			{ name: 'Closed', notification: 0 },
		],
	},
];
