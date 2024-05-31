'use client';

import React, { Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { FieldError, UseFormRegister, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import {
	TicketFormData,
	TicketValidFieldNames,
} from '../features/dashboard/tickets/utils/ticketSchema';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

type CustomQuillProps = {
	register: UseFormRegister<TicketFormData> | any;
	name: TicketValidFieldNames | any;
	setValue: UseFormSetValue<TicketFormData> | any;
	getValue: UseFormRegister<TicketFormData> | any;
	error: FieldError | undefined;
	trigger: UseFormTrigger<TicketFormData> | any;
};

export default function CustomQuill({
	register,
	name,
	setValue,
	error,
	getValue,
	trigger,
}: CustomQuillProps) {
	const quillModules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
		],
	};

	useEffect(() => {
		register(name);
	}, [register, name]);

	const onEditorStateChange = (editorState: any) => {
		setValue(name, editorState);
		trigger(name);
	};

	const quillFormats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'link',
		'image',
		'align',
		'color',
		'code-block',
	];

	return (
		<Fragment>
			<QuillEditor
				value={getValue('textArea')}
				onChange={onEditorStateChange}
				modules={quillModules}
				formats={quillFormats}
				className='overflow-clip placeholder:text-black-dimata'
				placeholder='Enter text...'
				style={{
					borderRadius: '8px',
					marginBottom: '10px',
					width: '100%',
					height: '240px',
					outline: 'none',
					border: '1px solid #D1D5DB',
				}}
			/>
			{error ? (
				<span className='error-message place-self-start pt-2'>
					<p className='text-red-500 text-xs'>{error.message}</p>
				</span>
			) : (
				<span className='place-self-start pt-2 opacity-0'>
					<p className='text-red-500 text-xs'>NULL</p>
				</span>
			)}
		</Fragment>
	);
}
