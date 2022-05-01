import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';
// import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ href, isExternal = false, children, onClick, className }) => {
	return (
		<a
			className={clsx(styles['c-button'], className)}
			href={href}
			onClick={onClick}
			target={isExternal ? '_blank' : '_self'}
			rel="noreferrer"
		>
			{children}
		</a>
	);
};

export default Button;
