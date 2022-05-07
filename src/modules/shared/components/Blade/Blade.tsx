import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Blade.module.scss';
import { BladeProps } from './Blade.types';

const Blade: FC<BladeProps> = ({ children, isOpened = false }) => {
	console.log(isOpened);
	return (
		<div className={clsx(styles['c-blade'], isOpened && styles['c-blade__open'])}>
			{children}
		</div>
	);
};

export default Blade;
