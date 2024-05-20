import React, { forwardRef, useEffect, useLayoutEffect, useRef, Ref } from 'react';
import Quill from 'quill';

interface EditorProps {
	readOnly?: boolean;
	defaultValue?: any; // Replace `any` with the appropriate type for Quill contents if known
	onTextChange?: (delta: any, oldDelta: any, source: string) => void;
	onSelectionChange?: (range: any, oldRange: any, source: string) => void;
}

const Editor = forwardRef<Quill, EditorProps>(
	({ readOnly = false, defaultValue, onTextChange, onSelectionChange }, ref) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const defaultValueRef = useRef(defaultValue);
		const onTextChangeRef = useRef(onTextChange);
		const onSelectionChangeRef = useRef(onSelectionChange);

		useLayoutEffect(() => {
			onTextChangeRef.current = onTextChange;
			onSelectionChangeRef.current = onSelectionChange;
		}, [onTextChange, onSelectionChange]);

		useEffect(() => {
			if (ref && 'current' in ref && ref.current) {
				ref.current.enable(!readOnly);
			}
		}, [ref, readOnly]);

		useEffect(() => {
			const container = containerRef.current;
			if (!container) return;

			const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
			const quill = new Quill(editorContainer, {
				theme: 'snow',
			});

			if (ref && 'current' in ref) {
				ref.current = quill;
			}

			if (defaultValueRef.current) {
				quill.setContents(defaultValueRef.current);
			}

			quill.on('text-change', (...args) => {
				onTextChangeRef.current?.(...args);
			});

			quill.on('selection-change', (...args) => {
				onSelectionChangeRef.current?.(...args);
			});

			return () => {
				if (ref && 'current' in ref) {
					ref.current = null;
				}
				container.innerHTML = '';
			};
		}, [ref]);

		return <div ref={containerRef} className='p-4 border rounded shadow-md bg-white'></div>;
	},
);

Editor.displayName = 'Editor';

export default Editor;
