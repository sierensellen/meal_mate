import React, { FC } from 'react';

import { ButtonProps } from './Button.types';
// import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ href, isExternal = false, children }) => {
	return (
		<a href={href} target={isExternal ? '_blank' : '_self'} rel="noreferrer">
			{children}
		</a>
	);
};

export default Button;
