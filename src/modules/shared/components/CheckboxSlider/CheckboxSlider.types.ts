import { InputHTMLAttributes } from 'react';

export interface CheckboxSliderProps extends InputHTMLAttributes<HTMLInputElement> {
	labelFalse: string;
	labelTrue: string;
}
