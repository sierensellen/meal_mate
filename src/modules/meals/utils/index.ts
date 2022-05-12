import { mealFilterConfig } from '@meals/const';
import { MealFilter } from '@meals/types';

export const findFilter = (value: string, order: number): MealFilter => {
	return mealFilterConfig.find((item) => {
		return item.order === order && item.value === value;
	});
};
