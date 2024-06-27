'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, filters } from '../../filter';
import clsx from 'clsx';

export default function AgAStatusFilter() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	const agFilter = params.get('agfi');

	const handleFilter = (params: URLSearchParams, query: string) => {
		params.set('agfi', query);
		router.replace(`?${params.toString()}`);
	};
	const renderedFilters = filters?.map((filter: Filter, index) => {
		return (
			<p
				key={filter.label}
				className={clsx('text-sm cursor-pointer px-2 pb-1  hover:font-medium h-full', {
					'text-primary font-bold border-b-2 border-primary': agFilter === filter.query,
				})}
				onClick={() => {
					handleFilter(params, filter.query);
				}}
			>
				{filter.label}
			</p>
		);
	});
	return <div className='centering-flex gap-x-4 border-b-2 border-neutral'>{renderedFilters}</div>;
}
