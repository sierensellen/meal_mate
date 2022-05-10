import { DefaultComponentProps } from '@shared/types';

export interface IconProps extends DefaultComponentProps {
	name: Icons;
	big?: boolean;
}

export const enum Icons {
	Vriezer = 'vriezer',
	price_up_down = 'price_up_down',
	price_up = 'price_up',
	price_down = 'price_down',
	time_up_down = 'time_up_down',
	time_up = 'time_up',
	time_down = 'time_down',
	washing_up_down = 'washing_up_down',
	washing_up = 'washing_up',
	washing_down = 'washing_down',
}
