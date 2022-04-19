import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({ onChange, icon, big = false, label, ...attributes }) => {
	return (
		<label className={clsx(styles['c-label'], big && styles['c-label__big'])}>
			<span className={styles['c-label__content']}>{label && label}</span>
			<span className={styles['c-label__icon']}>{icon && icon}</span>
			<input className={styles['c-input']} onChange={onChange} {...attributes} />
		</label>
	);
};

export default Input;
