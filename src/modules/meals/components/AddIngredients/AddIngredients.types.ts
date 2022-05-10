import { DefaultComponentProps } from '@shared/types';

export interface AddIngredientsProps extends DefaultComponentProps {
	onSubmit: (ingredients: any) => void;
	checkedIngredients: any;
	isOpened: boolean;
}

// export type AddMealFormState = Meal;
