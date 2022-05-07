import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	icon?: ReactNode;
	big?: boolean;
	checkbox?: boolean;
}
