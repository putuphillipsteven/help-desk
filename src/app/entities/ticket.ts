export class Ticket {
	constructor(
		public id: number,
		public registration_number: string,
		public reg_datetime: string,
		public subject: string,
		public description: string,
		public priority_id: number,
		public service_level: string,
		public customer_id: string,
		public provider_id: number,
		public master_status_id: number,
		public customer_team_id: number,
		public created_at: string,
		public updated_at: string,
		public deleted_at: string,
	) {}
}
