import { Fragment } from 'react';

export default function InputSkeleton() {
	return (
		<Fragment>
			<div className='skeleton h-8 w-24 bg-neutral'></div>
			<div className='skeleton h-8 w-20 bg-neutral'></div>
			<div className='skeleton h-8 w-20 bg-neutral'></div>
			<div className='skeleton h-8 w-20 bg-neutral'></div>
		</Fragment>
	);
}
