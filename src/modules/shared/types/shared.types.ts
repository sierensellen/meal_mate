import { IconProps, TagProps } from '@shared/components';

export interface Image {
	path: string;
	alt?: string;
}

export interface DefaultComponentProps {
	className?: string;
}

/**
 * Meals
 */

export interface Ingredients {
	title: string;
}

export interface Meal {
	bgColor: string;
	color: string;
	rotation: number;
	scale: number;
	positionX: number;
	positionY: number;
	name: string;
	price: number;
	time: number;
	washing: string;
	freezer: boolean;
	ingredients: Ingredient[] | IngredientWithAmount[];
	ingredientAmounts?: any;
	method: string;
	_id?: string;
}

export interface ParsedMeal {
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
	method: string;
	ingredients: IngredientWithAmount[];
}

export interface Ingredient {
	_id: string;
	metric: string;
	name: string;
	category: string;
}

export interface IngredientWithAmount extends Ingredient {
	amount: number;
}

/**
 * Shopping list
 */

export interface ShoppingListItem {
	_id: string;
	mealId: string;
}
