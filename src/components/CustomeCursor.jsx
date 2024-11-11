'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LuMousePointer2, LuPointer } from 'react-icons/lu';

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const [isPointer, setIsPointer] = useState(false);

	useEffect(() => {
		document.body.classList.add('cursor-none');

		const cursor = cursorRef.current;
		if (!cursor) return;

		const handleMouseMove = (event) => {
			cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

			const element = document.elementFromPoint(event.clientX, event.clientY);

			const checkForPointerCursor = (el) => {
				if (!el) return false;
				const style = window.getComputedStyle(el);

				if (
					style.cursor === 'pointer' ||
					el.tagName === 'A' ||
					el.tagName === 'BUTTON' ||
					el.onclick ||
					el.classList.contains('cursor-pointer')
				) {
					return true;
				}

				return checkForPointerCursor(el.parentElement);
			};

			setIsPointer(checkForPointerCursor(element));
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.body.classList.remove('cursor-none');
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			className='custom-cursor fixed pointer-events-none z-50'
			style={{ top: '-1px', left: '-1px' }}>
			{isPointer ? (
				<LuPointer
					size={30}
					className='text-black [&>path]:fill-white [&>*]:stroke-[2]'
				/>
			) : (
				<LuMousePointer2
					size={30}
					className='text-black [&>path]:fill-white [&>*]:stroke-[2]'
				/>
			)}
		</div>
	);
};

export default CustomCursor;
