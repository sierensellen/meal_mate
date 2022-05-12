export interface Image {
	path: string;
	alt?: string;
}

export interface DefaultComponentProps {
	className?: string;
}

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
	ingredients: any;
	ingredientAmounts?: any;
	method: string;
	_id?: string;
}

export type SortOrder = number;
export type SortValue = 'price' | 'time' | 'wahing';

export enum SortValues {
	Price = 'price',
}

export interface Ingredient {
	metric: string;
	name: string;
	category: string;
}

export interface IngredientProps {
	metric: string;
	name: string;
	category: string;
	amount: number;
}
