'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, filters } from '../filter';
import { logging } from '@/app/lib/utils/logging/logging';
import clsx from 'clsx';

export default function TEAFilter() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);

	const tAFilter = params.get('tefi');

	const handleFilter = (params: URLSearchParams, query: string) => {
		params.set('tefi', query);
		router.replace(`?${params.toString()}`);
	};
	const renderedFilters = filters?.map((filter: Filter, index) => {
		return (
			<p
				key={filter.label}
				className={clsx('text-sm cursor-pointer px-2  hover:font-medium h-full', {
					'text-primary font-bold border-b-2 border-primary': tAFilter === filter.query,
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
