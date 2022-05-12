import { InputHTMLAttributes, ReactNode } from 'react';

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
	name: string;
	options: OptionProps[];
	label?: string;
	icon?: ReactNode;
}

export interface OptionProps {
	value: number;
	label: string;
}
