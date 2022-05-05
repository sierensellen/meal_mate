import { MouseEventHandler } from 'react';

import { DefaultComponentProps } from '@shared/types';

export interface ButtonProps extends DefaultComponentProps {
	href?: string;
	isExternal?: boolean;
	onClick?: MouseEventHandler;
}
