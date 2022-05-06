import React, { FC, forwardRef } from 'react';

import styles from './Select.module.scss';
import { SelectProps } from './Select.types';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ onChange, options, icon, label, name, ...attributes }, ref) => {
		return (
			<label className={styles['c-label']}>
				<span className={styles['c-label__content']}>{label && label}</span>
				<span className={styles['c-label__icon']}>{icon && icon}</span>
				<select
					ref={ref}
					name={name}
					className={styles['c-select']}
					onChange={onChange}
					{...attributes}
				>
					{options.map((option, index) => {
						return (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						);
					})}
				</select>
			</label>
		);
	}
);

Select.displayName = 'Select';

export default Select;
