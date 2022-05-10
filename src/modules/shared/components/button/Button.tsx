import clsx from 'clsx';
import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';
// import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({
	href,
	icon,
	big = false,
	isExternal = false,
	children,
	onClick,
	className,
	active = false,
}) => {
	return (
		<a
			className={clsx(
				styles['c-button'],
				className,
				big && styles['c-button__big'],
				active && styles['c-button__big--active']
			)}
			href={href}
			onClick={onClick}
			target={isExternal ? '_blank' : '_self'}
			rel="noreferrer"
		>
			{icon && <span>{icon}</span>}
			{children && children}
		</a>
	);
};

export default Button;
