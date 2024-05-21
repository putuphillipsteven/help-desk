import React, { Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function CustomQuill() {
	const [content, setContent] = useState('');

	const quillModules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image'],
		],
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

	const handleEditorChange = (newContent: string) => {
		setContent(newContent);
	};

	return (
		<Fragment>
			<QuillEditor
				value={content}
				onChange={handleEditorChange}
				modules={quillModules}
				formats={quillFormats}
				className='overflow-clip'
				style={{
					borderRadius: '8px',
					marginBottom: '10px',
					width: '708px',
					height: '240px',
					outline: 'none',
					border: '1px solid #D1D5DB',
					color: 'black',
				}}
			/>
		</Fragment>
	);
}
