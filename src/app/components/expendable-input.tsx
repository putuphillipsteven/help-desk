'use client';

import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function ExpendableInput() {
	const [inputDisplay, setInputDisplay] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setInputDisplay(false);
			}
		};

		if (inputDisplay) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [inputDisplay]);

	useEffect(() => {
		if (inputDisplay && inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputDisplay]);

	const toggleInputDisplay = (): void => {
		setInputDisplay(!inputDisplay);
	};
	return (
		<div
			className={clsx('centering-flex md:flex-row gap-x-2 h-full px-2', {
				'flex-row-reverse': inputDisplay,
			})}
			ref={containerRef}
		>
			{inputDisplay && (
				<input
					ref={inputRef}
					className='input input-bordered h-full text-primary-text bg-transparent input-md w-full py-1 md:min-w-[30em] border-[1.5px] border-neutral focus:ring-0 focus:outline-0 focus:border-primary-text'
					type='text'
				/>
			)}
			<IoIosSearch
				onClick={toggleInputDisplay}
				className='cursor-pointer text-info-text text-2xl h-full'
			/>
		</div>
	);
}
