import React, { FC } from 'react';

import styles from './Select.module.scss';
import { SelectProps } from './Select.types';

const Select: FC<SelectProps> = ({ onChange, options, icon, label, name, ...attributes }) => {
	console.log(options);
	return (
		<label className={styles['c-label']}>
			<span className={styles['c-label__content']}>{label && label}</span>
			<span className={styles['c-label__icon']}>{icon && icon}</span>
			<select name={name} className={styles['c-select']} onChange={onChange} {...attributes}>
				{options.map((option, index) => {
					console.log(option.value);
					return (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
		</label>
	);
};

export default Select;
