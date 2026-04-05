'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export const THEMES = {
	brutalist: {
		label: 'Brutalist',
		accent1: '#ff2200',
		accent2: '#0055ff',
		dot: '#ff2200',
	},
	editorial: {
		label: 'Editorial',
		accent1: '#b83a2a',
		accent2: '#1a3a5c',
		dot: '#b83a2a',
	},
	neon: {
		label: 'Neon',
		accent1: '#ff0080',
		accent2: '#00d4ff',
		dot: '#00ffa3',
	},
	luxury: {
		label: 'Luxury',
		accent1: '#c9a84c',
		accent2: '#9a7b4f',
		dot: '#c9a84c',
	},
} as const;

export type ThemeKey = keyof typeof THEMES;

const THEME_KEYS = Object.keys(THEMES) as ThemeKey[];

interface ThemeContextType {
	theme: ThemeKey;
	setTheme: (t: ThemeKey) => void;
	accent1: string;
	accent2: string;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'brutalist',
	setTheme: () => {},
	accent1: THEMES.brutalist.accent1,
	accent2: THEMES.brutalist.accent2,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<ThemeKey>('brutalist');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('portfolio-theme') as ThemeKey | null;
		if (stored && THEME_KEYS.includes(stored)) {
			setThemeState(stored);
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('portfolio-theme', theme);
	}, [theme, mounted]);

	const setTheme = (t: ThemeKey) => {
		if (THEME_KEYS.includes(t)) setThemeState(t);
	};

	if (!mounted) {
		return (
			<script
				dangerouslySetInnerHTML={{
					__html: `
						(function(){
							var t=localStorage.getItem('portfolio-theme');
							if(t&&['brutalist','editorial','neon','luxury'].indexOf(t)!==-1){
								document.documentElement.setAttribute('data-theme',t);
							}else{
								document.documentElement.setAttribute('data-theme','brutalist');
							}
						})();
					`,
				}}
			/>
		);
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				accent1: THEMES[theme].accent1,
				accent2: THEMES[theme].accent2,
			}}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
