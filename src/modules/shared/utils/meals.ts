import { Icons } from '@shared/components';
import { Meal, ParsedMeal } from '@shared/types';

import { Afwas } from '@meals/types';

export const mapWashing = (value: string): string => {
	switch (value) {
		case Afwas.Weinig:
			return 'Weinig';

		case Afwas.Gemiddeld:
			return 'Gemiddeld';

		case Afwas.Veel:
			return 'Veel';
	}
};

export const mapMeals = (meals: Meal[]): ParsedMeal[] => {
	return meals.map((meal) => {
		const icons = [];

		meal.freezer && icons.push(Icons.Vriezer);

		return {
			...meal,
			title: meal.name,
			tags: [
				{
					label: meal.price,
					iconName: Icons.Vriezer,
				},
				{
					label: mapWashing(meal.washing),
					iconName: Icons.Vriezer,
				},
				{
					label: meal.time,
					iconName: Icons.Vriezer,
				},
			],
			icons,

			posX: meal.positionX,
			posY: meal.positionY,
			id: meal._id,
			ingredients: meal.ingredients.map((ingredient) => ({
				...ingredient,
				// TODO: get amuonts from db
				amount: 1,
			})),
		};
	});
};
