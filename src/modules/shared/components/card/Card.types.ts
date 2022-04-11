import { DefaultComponentProps, Image } from '@shared/types';

import { IconProps } from '../Icon/Icon.types';
import { TagProps } from '../Tag/Tag.types';

export interface CardProps extends DefaultComponentProps {
	img: Image;
	title: string;
	tags: TagProps[];
	icons?: IconProps[];
}
