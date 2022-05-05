import { ReactNode } from 'react';

import { DefaultComponentProps } from '@shared/types';

import { IconProps } from '../Icon/Icon.types';
import { TagProps } from '../Tag/Tag.types';

export interface CardProps extends DefaultComponentProps {
	title: string;
	tags: TagProps[];
	icons?: IconProps[];
	color: string;
	bgColor: string;
	rotation: number;
	scale: number;
	posX: number;
	posY: number;
	id: string;
	button?: ReactNode;
}
