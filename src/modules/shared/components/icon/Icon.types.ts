import { DefaultComponentProps } from "@shared/types";

export interface IconProps extends DefaultComponentProps {
    name: Icons;
    small ?: boolean;
}

export const enum Icons {
	Vriezer = 'vriezer',
}
