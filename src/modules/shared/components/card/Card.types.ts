import { IconProps } from "../icon/Icon.types";
import { TagProps } from "../tag/Tag.types";
import {Image} from '@shared/types';

export interface CardProps {
    img: Image;
    title: string;
    tags: TagProps[];
    icons?: IconProps[];
}