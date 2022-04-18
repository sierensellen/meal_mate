import React, { FC } from 'react';

import styles from './CheckboxSlider.module.scss';
import { CheckboxSliderProps } from './CheckboxSlider.types';

const CheckboxSlider: FC<CheckboxSliderProps> = ({ labelFalse, labelTrue }) => {
	return (
		<label className={styles['c-checkbox-slider']}>
			<span>{labelFalse}</span>
			<div className={styles['c-checkbox-slider__input']}>
				<input type="checkbox" id="checkbox" />
				<div className={styles['c-checkbox-slider__input--slider']} />
			</div>
			<span>{labelTrue}</span>
		</label>
	);
};

export default CheckboxSlider;
