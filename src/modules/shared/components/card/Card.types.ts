import { IconProps } from "../Icon/Icon.types";
import { TagProps } from "../Tag/Tag.types";
import { DefaultComponentProps } from "@shared/types";
import {Image} from '@shared/types';

export interface CardProps extends DefaultComponentProps {
    img: Image;
    title: string;
    tags: TagProps[];
    icons?: IconProps[];
}