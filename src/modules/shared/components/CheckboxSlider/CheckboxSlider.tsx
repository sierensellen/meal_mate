import React, { forwardRef } from 'react';

import styles from './CheckboxSlider.module.scss';
import { CheckboxSliderProps } from './CheckboxSlider.types';

const CheckboxSlider = forwardRef<HTMLInputElement, CheckboxSliderProps>(
	({ labelFalse, labelTrue, ...attributes }, ref) => {
		return (
			<label className={styles['c-checkbox-slider']}>
				<span>{labelFalse}</span>
				<div className={styles['c-checkbox-slider__input']}>
					<input {...attributes} ref={ref} type="checkbox" id="checkbox" />
					<div className={styles['c-checkbox-slider__input--slider']} />
				</div>
				<span>{labelTrue}</span>
			</label>
		);
	}
);

CheckboxSlider.displayName = 'CheckboxSlider';

export default CheckboxSlider;
