import { ReactNode } from 'react';

import { DefaultComponentProps } from '@shared/types';

export interface ButtonProps extends DefaultComponentProps {
	href?: string;
	isExternal?: boolean;
	icon?: ReactNode;
	big?: boolean;
	active?: boolean;
	onClick?: () => void;
}
