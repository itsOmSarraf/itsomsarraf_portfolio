'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme, THEMES, ThemeKey } from '@/context/ThemeContext';
import { LuPalette, LuX } from 'react-icons/lu';

const themeKeys = Object.keys(THEMES) as ThemeKey[];

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);

	return (
		<div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998]'>
			<AnimatePresence mode='wait'>
				{open ? (
					<motion.div
						key='panel'
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.9 }}
						transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
						className='flex items-center gap-2 px-3 py-2.5 rounded-full border'
						style={{
							background: 'var(--card-bg)',
							borderColor: 'var(--border-color)',
							backdropFilter: 'blur(20px)',
						}}>
						{themeKeys.map((key) => {
							const t = THEMES[key];
							const isActive = theme === key;
							return (
								<button
									key={key}
									onClick={() => setTheme(key)}
									className='relative group flex items-center justify-center'
									aria-label={`Switch to ${t.label} theme`}>
									<motion.div
										className='w-7 h-7 rounded-full relative'
										style={{ backgroundColor: t.dot }}
										whileHover={{ scale: 1.15 }}
										whileTap={{ scale: 0.95 }}>
										{isActive && (
											<motion.div
												layoutId='active-ring'
												className='absolute -inset-1 rounded-full border-2'
												style={{ borderColor: t.dot }}
												transition={{ type: 'spring', stiffness: 400, damping: 30 }}
											/>
										)}
									</motion.div>
									<div
										className='absolute -top-9 px-2 py-1 text-xs font-body whitespace-nowrap rounded-md opacity-0 group-hover:opacity-100 pointer-events-none'
										style={{
											background: 'var(--bg-tertiary)',
											color: 'var(--text-primary)',
											transition: 'opacity 0.15s ease',
										}}>
										{t.label}
									</div>
								</button>
							);
						})}
						<button
							onClick={() => setOpen(false)}
							className='ml-1 p-1.5 rounded-full hover:opacity-70'
							style={{ color: 'var(--text-muted)' }}
							aria-label='Close theme picker'>
							<LuX size={14} />
						</button>
					</motion.div>
				) : (
					<motion.button
						key='trigger'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setOpen(true)}
						className='flex items-center gap-2 px-4 py-2.5 rounded-full border font-body text-sm'
						style={{
							background: 'var(--card-bg)',
							borderColor: 'var(--border-color)',
							color: 'var(--text-secondary)',
							backdropFilter: 'blur(20px)',
						}}
						aria-label='Open theme picker'>
						<LuPalette size={16} />
						<span className='hidden sm:inline'>{THEMES[theme].label}</span>
						<div
							className='w-3 h-3 rounded-full'
							style={{ backgroundColor: THEMES[theme].dot }}
						/>
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
}
