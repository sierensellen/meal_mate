import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Blade.module.scss';
import { BladeProps } from './Blade.types';

const Blade: FC<BladeProps> = ({ children, isOpened = false, left = false }) => {
	console.log(isOpened);
	return (
		<div
			className={clsx(
				styles['c-blade'],
				isOpened && styles['c-blade__open'],
				left && styles['c-blade__left']
			)}
		>
			{children}
		</div>
	);
};

export default Blade;
