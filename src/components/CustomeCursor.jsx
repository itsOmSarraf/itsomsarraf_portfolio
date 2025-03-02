'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
	const cursorOuterRef = useRef(null);
	const cursorInnerRef = useRef(null);
	const cursorTextRef = useRef(null);
	const [isPointer, setIsPointer] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const [hoverText, setHoverText] = useState('');
	const [shouldShow, setShouldShow] = useState(false);
	const [clicking, setClicking] = useState(false);

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

		const cursorOuter = cursorOuterRef.current;
		const cursorInner = cursorInnerRef.current;
		const cursorText = cursorTextRef.current;

		if (!cursorOuter || !cursorInner || !cursorText) return;

		const handleMouseMove = (event) => {
			const { clientX, clientY } = event;

			// Use requestAnimationFrame for smoother animation
			requestAnimationFrame(() => {
				// Position cursors
				cursorOuter.style.transform = `translate(${clientX}px, ${clientY}px)`;
				cursorInner.style.transform = `translate(${clientX}px, ${clientY}px)`;
				cursorText.style.transform = `translate(${clientX}px, ${
					clientY + 35
				}px)`;

				const element = document.elementFromPoint(clientX, clientY);

				// Check for elements with data-cursor attribute
				const checkForCursorText = (el) => {
					if (!el) return null;
					return (
						el.getAttribute('data-cursor') ||
						checkForCursorText(el.parentElement)
					);
				};

				// Check for pointer cursor
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

				const cursorText = checkForCursorText(element);
				setIsPointer(checkForPointerCursor(element));

				if (cursorText) {
					setIsHovering(true);
					setHoverText(cursorText);
				} else {
					setIsHovering(false);
					setHoverText('');
				}
			});
		};

		const handleMouseDown = () => {
			setClicking(true);
		};

		const handleMouseUp = () => {
			setClicking(false);
		};

		const handleMouseEnter = () => {
			cursorOuter.style.opacity = '1';
			cursorInner.style.opacity = '1';
			cursorText.style.opacity = '1';
		};

		const handleMouseLeave = () => {
			cursorOuter.style.opacity = '0';
			cursorInner.style.opacity = '0';
			cursorText.style.opacity = '0';
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseenter', handleMouseEnter);
		document.addEventListener('mouseleave', handleMouseLeave);

		const handleResize = () => {
			updateCursorVisibility();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			document.body.classList.remove('cursor-none');
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mousedown', handleMouseDown);
			document.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mouseenter', handleMouseEnter);
			document.removeEventListener('mouseleave', handleMouseLeave);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const outerVariants = {
		default: {
			width: '32px',
			height: '32px',
			backgroundColor: 'rgba(255, 255, 255, 0)',
			borderColor: 'rgba(255, 255, 255, 0.3)',
			borderWidth: '1px',
			mixBlendMode: 'difference'
		},
		pointer: {
			width: '80px',
			height: '80px',
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			borderColor: 'rgba(255, 255, 255, 0.5)',
			borderWidth: '1px',
			mixBlendMode: 'difference'
		},
		clicking: {
			width: '36px',
			height: '36px',
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
			borderColor: 'rgba(255, 255, 255, 0.6)',
			borderWidth: '2px',
			mixBlendMode: 'difference'
		}
	};

	const innerVariants = {
		default: {
			width: '4px',
			height: '4px',
			backgroundColor: 'rgba(255, 255, 255, 1)',
			mixBlendMode: 'difference'
		},
		pointer: {
			width: '10px',
			height: '10px',
			backgroundColor: 'rgba(255, 255, 255, 1)',
			mixBlendMode: 'difference'
		},
		clicking: {
			width: '3px',
			height: '3px',
			backgroundColor: 'rgba(255, 255, 255, 1)',
			mixBlendMode: 'difference'
		}
	};

	// Get the correct animation variant
	const getCursorVariant = () => {
		if (clicking) return 'clicking';
		if (isPointer) return 'pointer';
		return 'default';
	};

	// Handle the CSS visibility based on screen size
	return (
		<>
			{/* Outer cursor */}
			<motion.div
				ref={cursorOuterRef}
				variants={outerVariants}
				animate={getCursorVariant()}
				transition={{
					type: 'spring',
					stiffness: 150,
					damping: 15,
					mass: 0.5
				}}
				className={`fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 ${
					shouldShow ? 'block' : 'hidden'
				}`}
				style={{
					top: '0',
					left: '0',
					opacity: 0,
					transition: 'opacity 0.3s ease'
				}}
			/>

			{/* Inner cursor */}
			<motion.div
				ref={cursorInnerRef}
				variants={innerVariants}
				animate={getCursorVariant()}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 15,
					mass: 0.2
				}}
				className={`fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 ${
					shouldShow ? 'block' : 'hidden'
				}`}
				style={{
					top: '0',
					left: '0',
					opacity: 0,
					transition: 'opacity 0.3s ease'
				}}
			/>

			{/* Text cursor for hover states */}
			<motion.div
				ref={cursorTextRef}
				initial={{ opacity: 0, y: 10 }}
				animate={{
					opacity: isHovering ? 1 : 0,
					y: isHovering ? 0 : 10
				}}
				transition={{ duration: 0.2 }}
				className={`fixed pointer-events-none z-[9999] -translate-x-1/2 text-center ${
					shouldShow ? 'block' : 'hidden'
				}`}
				style={{
					top: '0',
					left: '0',
					opacity: 0,
					transition: 'opacity 0.3s ease'
				}}>
				<span className='bg-white/10 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap'>
					{hoverText}
				</span>
			</motion.div>
		</>
	);
};

export default CustomCursor;
