import React, { forwardRef } from 'react';

import styles from './Textarea.module.scss';
import { TextareaProps } from './Textarea.types';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ onChange, label, ...attributes }, ref) => {
		return (
			<label className={styles['c-label']}>
				<span className={styles['c-label__content']}>{label && label}</span>
				<textarea
					ref={ref}
					className={styles['c-input']}
					onChange={onChange}
					{...attributes}
				/>
			</label>
		);
	}
);

Textarea.displayName = 'Textarea';

export default Textarea;
