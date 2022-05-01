import { InputHTMLAttributes } from 'react';

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	name: string;
	label?: string;
}
