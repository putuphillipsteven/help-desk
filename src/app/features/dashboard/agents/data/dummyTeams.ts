import { TeamsProps } from './teams';

// Example teams
export const teamLists: TeamsProps[] = [
	{
		id: 1,
		name: 'Team A',
		members: [
			{ name: 'Alice', role: 'Leader' },
			{ name: 'Bob', role: 'Member' },
			{ name: 'Charlie', role: 'Member' },
		],
	},
	{
		id: 2,
		name: 'Team B',
		members: [
			{ name: 'David', role: 'Leader' },
			{ name: 'Eve', role: 'Member' },
			{ name: 'Frank', role: 'Member' },
		],
	},
	{
		id: 3,
		name: 'Team C',
		members: [
			{ name: 'Grace', role: 'Leader' },
			{ name: 'Henry', role: 'Member' },
			{ name: 'Ivy', role: 'Member' },
		],
	},
];
