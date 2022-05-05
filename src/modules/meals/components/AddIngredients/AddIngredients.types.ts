import { DefaultComponentProps } from '@shared/types';

export interface AddIngredientsProps extends DefaultComponentProps {
	onSubmit: (ingredients: any) => void;
}

// export type AddMealFormState = Meal;
