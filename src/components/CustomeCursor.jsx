'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LuMousePointer2, LuPointer } from 'react-icons/lu';

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const [isPointer, setIsPointer] = useState(false);
	const [shouldShow, setShouldShow] = useState(false);

	useEffect(() => {
		// Check if we're in a browser environment
		if (typeof window === 'undefined') return;

		// Function to check if device has touch capability
		const isTouchDevice = () => {
			return (
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			);
		};

		const updateCursorVisibility = () => {
			// Show cursor if it's not a touch-only device
			const shouldShowCursor = !isTouchDevice();
			setShouldShow(shouldShowCursor);

			if (shouldShowCursor) {
				document.body.classList.add('cursor-none');
			} else {
				document.body.classList.remove('cursor-none');
			}
		};

		updateCursorVisibility();

		const cursor = cursorRef.current;
		if (!cursor) return;

		const handleMouseMove = (event) => {
			requestAnimationFrame(() => {
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
			});
		};

		document.addEventListener('mousemove', handleMouseMove);

		const handleResize = () => {
			updateCursorVisibility();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			document.body.classList.remove('cursor-none');
			document.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Handle the CSS visibility based on screen size
	return (
		<div
			ref={cursorRef}
			className={`custom-cursor fixed pointer-events-none z-50 ${
				shouldShow ? 'block md:block' : 'hidden'
			}`}
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
