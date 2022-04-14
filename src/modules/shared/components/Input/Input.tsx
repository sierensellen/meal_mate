import React, { FC } from 'react';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

const Tag: FC<InputProps> = ({ onChange, icon, label, ...attributes }) => {
	return (
		<label className={styles['c-label']}>
			<span className={styles['c-label__content']}>{label && label}</span>
			<span className={styles['c-label__icon']}>{icon && icon}</span>
			<input className={styles['c-input']} onChange={onChange} {...attributes} />
		</label>
	);
};

export default Tag;
