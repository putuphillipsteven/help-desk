export interface Filter {
	label: string;
	query: string;
}

type Filters = Filter[];

export const filters: Filters = [
	{ label: 'Open', query: 'op' },
	{ label: 'Pending', query: 'pe' },
	{ label: 'On Hold', query: 'oh' },
	{ label: 'Solved', query: 'so' },
	{ label: 'Closed', query: 'cl' },
];
