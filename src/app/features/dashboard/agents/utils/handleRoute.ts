import { ReadonlyURLSearchParams } from 'next/navigation';

export const handleSort = (
	uses: string,
	nameSort: string,
	roleSort: string,
	replace: any,
	searchParams: ReadonlyURLSearchParams,
	pathname: string,
) => {
	const newParams = new URLSearchParams(searchParams);
	const agentId = newParams.get('agId');
	if (agentId) {
		newParams.delete('agId');
		if (uses === 'name') {
			newParams.delete('ro');
			if (nameSort === 'asc') {
				newParams.set('na', 'desc');
			} else {
				newParams.set('na', 'asc');
			}
		} else {
			newParams.delete('na');
			if (roleSort === 'asc') {
				newParams.set('ro', 'desc');
			} else {
				newParams.set('ro', 'asc');
			}
		}
		newParams.set('agId', agentId);
	} else {
		if (uses === 'name') {
			newParams.delete('ro');
			if (nameSort === 'asc') {
				newParams.set('na', 'desc');
			} else {
				newParams.set('na', 'asc');
			}
		} else {
			newParams.delete('na');
			if (roleSort === 'asc') {
				newParams.set('ro', 'desc');
			} else {
				newParams.set('ro', 'asc');
			}
		}
	}

	replace(`${pathname}?${newParams.toString()}`);
};
