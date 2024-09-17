'use client';

import React, { useEffect, useRef, useState } from 'react';
import Kinet from 'kinet';

const CustomCursor = () => {
	const circleRef = useRef(null);
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const kinet = new Kinet({
			acceleration: 0.06,
			friction: 0.2,
			names: ['x', 'y']
		});

		const circle = circleRef.current;
		if (!circle) return;

		kinet.on('tick', function (instances) {
			circle.style.transform = `translate3d(${instances.x.current}px, ${
				instances.y.current
			}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
				instances.y.velocity / 2
			}deg)`;
		});

		const handleMouseMove = (event) => {
			kinet.animate('x', event.clientX - window.innerWidth / 2);
			kinet.animate('y', event.clientY - window.innerHeight / 2);

			const target = event.target;
			setIsVisible(!target.closest('.hide-cursor'));
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={circleRef}
			className={`custom-cursor ${isVisible ? 'opacity-100' : 'opacity-0'}`}
		/>
	);
};

export default CustomCursor;
