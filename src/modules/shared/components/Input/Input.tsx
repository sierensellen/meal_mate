import clsx from 'clsx';
import React, { forwardRef } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ onChange, className, checkbox = false, icon, big = false, label, ...attributes }, ref) => {
		return (
			<label className={clsx(styles['c-label'], big && styles['c-label__big'], className)}>
				{!checkbox && label && <span className={styles['c-label__content']}>{label}</span>}
				<span className={styles['c-label__icon']}>{icon && icon}</span>
				<input
					ref={ref}
					className={styles['c-input']}
					onChange={onChange}
					{...attributes}
				/>
				{checkbox && <span className={styles['c-label__content']}>{label && label}</span>}
			</label>
		);
	}
);

Input.displayName = 'Input';

export default Input;
