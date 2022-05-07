import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Overlay.module.scss';
import { OverlayProps } from './Overlay.types';

const Overlay: FC<OverlayProps> = ({ onClick, active = false }) => {
	console.log(active);
	return (
		<div
			onClick={onClick}
			className={clsx(styles['c-overlay'], active && styles['c-overlay__open'])}
		/>
	);
};

export default Overlay;
