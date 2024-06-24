import { ReadonlyURLSearchParams } from 'next/navigation';

class SortHandler {
	private uses: string;
	private nameSort: string;
	private roleSort: string;
	private replace: (url: string) => void;
	private pathname: string;
	private newParams: URLSearchParams;

	constructor(
		uses: string,
		nameSort: string,
		roleSort: string,
		replace: (url: string) => void,
		searchParams: ReadonlyURLSearchParams,
		pathname: string,
	) {
		this.uses = uses;
		this.nameSort = nameSort;
		this.roleSort = roleSort;
		this.replace = replace;
		this.pathname = pathname;
		this.newParams = new URLSearchParams(searchParams);
	}

	private toggleSortOrder(currentOrder: string): string {
		return currentOrder === 'asc' ? 'desc' : 'asc';
	}

	private handleNameSort(): void {
		this.newParams.delete('ro');
		this.newParams.set('na', this.toggleSortOrder(this.nameSort));
	}

	private handleRoleSort(): void {
		this.newParams.delete('na');
		this.newParams.set('ro', this.toggleSortOrder(this.roleSort));
	}

	private resetAgentId(agentId: string | null): void {
		if (agentId) {
			this.newParams.delete('agId');
			this.newParams.set('agId', agentId);
		}
	}

	public sort(): void {
		const agentId = this.newParams.get('agId');

		if (this.uses === 'name') {
			this.handleNameSort();
		} else {
			this.handleRoleSort();
		}

		this.resetAgentId(agentId);

		this.replace(`${this.pathname}?${this.newParams.toString()}`);
	}
}

export const handleSort = (
	uses: string,
	nameSort: string,
	roleSort: string,
	replace: (url: string) => void,
	searchParams: ReadonlyURLSearchParams,
	pathname: string,
) => {
	const sortHandler = new SortHandler(uses, nameSort, roleSort, replace, searchParams, pathname);
	sortHandler.sort();
};
