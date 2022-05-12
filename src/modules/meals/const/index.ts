import { Icons } from '@shared/components';

import { MealFilter } from '@meals/types';

export const mealFilterConfig: MealFilter[] = [
	{ value: 'price', order: 0, img: Icons.price_up_down },
	{ value: 'price', order: 1, img: Icons.price_up },
	{ value: 'price', order: -1, img: Icons.price_down },
	{ value: 'time', order: 0, img: Icons.time_up_down },
	{ value: 'time', order: 1, img: Icons.time_up },
	{ value: 'time', order: -1, img: Icons.time_down },
	{ value: 'washing', order: 0, img: Icons.washing_up_down },
	{ value: 'washing', order: 1, img: Icons.washing_up },
	{ value: 'washing', order: -1, img: Icons.washing_down },
];
